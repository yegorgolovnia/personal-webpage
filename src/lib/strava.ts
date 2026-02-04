export const getLatestActivity = async () => {
    const CLIENT_ID = import.meta.env.STRAVA_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.STRAVA_CLIENT_SECRET;
    const REFRESH_TOKEN = import.meta.env.STRAVA_REFRESH_TOKEN;

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        console.warn("Strava credentials missing. Using mock data.");
        return [
            { id: 1, type: "Run", start_date: new Date().toISOString(), moving_time: 3600, distance: 10000, kilojoules: 800, total_elevation_gain: 100 },
            { id: 2, type: "Ride", start_date: new Date(Date.now() - 86400000).toISOString(), moving_time: 7200, distance: 45000, kilojoules: 1200, total_elevation_gain: 500 },
            { id: 3, type: "Swim", start_date: new Date(Date.now() - 172800000).toISOString(), moving_time: 1800, distance: 1500, kilojoules: 400, total_elevation_gain: 0 },
            { id: 4, type: "Run", start_date: new Date(Date.now() - 259200000).toISOString(), moving_time: 3000, distance: 8000, kilojoules: 650, total_elevation_gain: 50 },
            { id: 5, type: "Hike", start_date: new Date(Date.now() - 345600000).toISOString(), moving_time: 10800, distance: 12000, kilojoules: 900, total_elevation_gain: 600 }
        ];
    }

    try {
        // 1. Get Access Token
        const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                refresh_token: REFRESH_TOKEN,
                grant_type: 'refresh_token',
            }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            console.error("❌ Failed to refresh Strava token. Status:", tokenResponse.status);
            console.error("Response:", JSON.stringify(tokenData));
            return null;
        }

        console.log("✅ Strava Token Refreshed.");
        console.log("🔑 Token Scope:", JSON.stringify(tokenData)); // Check what scopes we actually have

        const accessToken = tokenData.access_token;

        // 2. Get Activities
        const activitiesResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=5', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const activities = await activitiesResponse.json();

        console.log(`✅ Strava Activities Fetch Status: ${activitiesResponse.status}`);
        console.log(`📊 Activities Found: ${Array.isArray(activities) ? activities.length : 'Not an array'}`);

        if (!activities || !Array.isArray(activities)) {
            console.error("⚠️ Strava response body:", JSON.stringify(activities));
            return [];
        }

        return activities; // Return array of activities
    } catch (error) {
        console.error("Error fetching Strava data:", error);
        return null;
    }
};
