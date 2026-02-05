import type { APIRoute } from "astro";
import { getLatestActivity } from "../../lib/strava";

export const prerender = false;

export const GET: APIRoute = async () => {
    const activities = await getLatestActivity();

    return new Response(JSON.stringify(activities ?? []), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=60",
        },
    });
};
