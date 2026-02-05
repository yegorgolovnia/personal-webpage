# Tech Stack

## Frameworks
- Astro 5 (static-first, fast builds, partial hydration)
- React 19 (interactive overlay component)

## UI / Motion
- Framer Motion (overlay transitions)
- Custom canvas glitch utility (lightweight, opt-in)

## Styling
- Vanilla CSS (component-scoped styles + global tokens)
- Design system tokens in `src/styles/global.css`

## Fonts
- Space Grotesk (primary sans)
- Instrument Serif (display for headings)
- Space Mono (mono accents)

## Data / APIs
- Strava API (server endpoint + client polling)
- Spotify links (static)

## Hosting
- Vercel (recommended for serverless API + caching)

## Tooling
- TypeScript (Astro + React typing)
- Node / npm

## Scripts
- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview build

## Environment Variables
- `STRAVA_CLIENT_ID`
- `STRAVA_CLIENT_SECRET`
- `STRAVA_REFRESH_TOKEN`

## Repository Structure
- `src/pages/` — Astro routes
- `src/components/` — UI sections and components
- `src/styles/` — global and component styles
- `src/lib/` — utilities (glitch, Strava)
- `src/pages/api/` — serverless endpoints
