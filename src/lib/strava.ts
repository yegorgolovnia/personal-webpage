export const getLatestActivity = async () => {
    const CLIENT_ID = import.meta.env.STRAVA_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.STRAVA_CLIENT_SECRET;
    const REFRESH_TOKEN = import.meta.env.STRAVA_REFRESH_TOKEN;

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        console.warn("Strava credentials missing. Using mock data.");
        return null;
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

        console.log("✅ Strava Token Refreshed. Fetching activities...");
        const accessToken = tokenData.access_token;

        // 2. Get Activities
        const activitiesResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=5', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const activities = await activitiesResponse.json();

        console.log(`✅ Strava API Responded. Count: ${Array.isArray(activities) ? activities.length : 'Not an array'}`);

        if (!activities || !Array.isArray(activities)) {
            console.error("⚠️ Strava response is not an array:", JSON.stringify(activities));
            return [];
        }

        return activities; // Return array of activities
    } catch (error) {
        console.error("Error fetching Strava data:", error);
        return null;
    }
};
