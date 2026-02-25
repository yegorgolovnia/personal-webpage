# Personal Website Guide

A blazing-fast, terminal-inspired landing page built on Astro. Featuring a fluid mouse-reactive ambient background, glassmorphism UI elements, and dynamic data-fetching for Strava and Spotify.

## ✨ Features
- **Typography**: Uses `Geist Pixel Circle` for a unique lowercase circular-pixel aesthetic.
- **Ambient Liquid UI**: Smooth-scrolling purple & green background gradients that drift autonomously across the screen.
- **Glassmorphism**: Service and link cards feature frosted `backdrop-filter` styles to allow the liquid background to shine through.
- **Live Integrations**: 3D interactive cubes polling live workout data from Strava and static playlists from Spotify.

## ✏️ How to Edit Content
You don't need to touch code. Just change the text in these files:

1.  **Bio & Links**: open `src/pages/index.astro`.
    *   Scroll down to the `about` section to change your bio.
    *   Scroll to the `const links` list at the top to change your social links.
2.  **Experience**: open `src/components/Experience.astro`.
    *   You'll see a list called `experiences`. Just edit the text inside the quotes `""`.
3.  **Projects/Case Studies**: open `src/components/CaseStudies.astro`.
    *   Same here, just edit the list!

## 🚀 Hosting (Free)
1.  Go to **Vercel.com** and sign up (Free tier is forever free for personal sites).
2.  Connect your GitHub.
3.  Select this project (`personal-webpage`).
4.  Hit **Deploy**.
5.  **Domain**: Once deployed, go to Settings -> Domains and type `yegorgolovnia.com`. Vercel will tell you exactly what to copy into Namecheap.

## 🛠 That "Toolbar" Thing
Note: The toolbar you see at the bottom of the screen is **ONLY for you** on your computer. When you put the site online, it disappears completely. Visitors will just see your clean site.
