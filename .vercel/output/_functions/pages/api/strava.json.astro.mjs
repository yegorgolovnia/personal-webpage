export { renderers } from '../../renderers.mjs';

const getLatestActivity = async () => {
  {
    console.warn("Strava credentials missing. Using mock data.");
    return [
      { id: 4, type: "WeightTraining", start_date: new Date(Date.now() - 2592e5).toISOString(), moving_time: 3e3, distance: 0, kilojoules: 0, calories: 350, total_elevation_gain: 0 },
      { id: 1, type: "Run", start_date: (/* @__PURE__ */ new Date()).toISOString(), moving_time: 3600, distance: 1e4, kilojoules: 800, calories: 1100, total_elevation_gain: 100 },
      { id: 2, type: "Ride", start_date: new Date(Date.now() - 864e5).toISOString(), moving_time: 7200, distance: 45e3, kilojoules: 1200, calories: 1300, total_elevation_gain: 500 },
      { id: 3, type: "Swim", start_date: new Date(Date.now() - 1728e5).toISOString(), moving_time: 1800, distance: 1500, kilojoules: 400, calories: 500, total_elevation_gain: 0 },
      { id: 5, type: "Hike", start_date: new Date(Date.now() - 3456e5).toISOString(), moving_time: 10800, distance: 12e3, kilojoules: 900, calories: 950, total_elevation_gain: 600 }
    ];
  }
};

const prerender = false;
const GET = async () => {
  const activities = await getLatestActivity();
  return new Response(JSON.stringify(activities ?? []), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=60"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
