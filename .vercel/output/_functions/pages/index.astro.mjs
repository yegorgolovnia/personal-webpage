import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderComponent, o as renderScript, p as Fragment } from '../chunks/astro/server_XYEK5Jvd.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Yegor Golovnia - Web3 Operations Generalist" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="atmosphere" aria-hidden="true"></div> <div id="content-shifter"> <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderSlot($$result, $$slots["overlays"])} </body></html>`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/layouts/Layout.astro", void 0);

const $$Lifestyle = createComponent(async ($$result, $$props, $$slots) => {
  const activities = [];
  const spotifyPlaylists = [
    { month: "Feb '26", year: "2026", link: "https://open.spotify.com/playlist/01QytP6FU4AvHMPM9uzFIZ", label: "Monthly Playlist" },
    { month: "Jan '26", year: "2026", link: "https://open.spotify.com/playlist/3CVIbEDvJ93BTa2GX393PD?si=b8171c174727404e", label: "Monthly Playlist" },
    { month: "Dec '25", year: "2025", link: "https://open.spotify.com/playlist/0h2wa8isRovLhuDyvJ9zzv?si=0348503b85464872", label: "Monthly Playlist" },
    { month: "Nov '25", year: "2025", link: "https://open.spotify.com/playlist/6SzWlZxv8UN46aLpX5RG9x?si=a7c3b25743194c83", label: "Monthly Playlist" },
    { month: "Oct '25", year: "2025", link: "https://open.spotify.com/playlist/1P3Iu18FrIeXAMMqUsLB0a?si=ce80fe238b2344e4", label: "Monthly Playlist" }
  ];
  function formatDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m ${s}s`;
  }
  function formatPace(time, distance, isSwim = false) {
    let pace;
    if (isSwim) {
      pace = time / 60 / (distance / 100);
    } else {
      pace = time / 60 / (distance / 1e3);
    }
    const paceMins = Math.floor(pace);
    const paceSecs = Math.round((pace - paceMins) * 60);
    return `${paceMins}:${paceSecs.toString().padStart(2, "0")}`;
  }
  function formatSpeed(time, distance) {
    const speedMps = distance / time;
    const speedKmh = speedMps * 3.6;
    return speedKmh.toFixed(1);
  }
  function getActivityStats(activity) {
    if (!activity) return { label1: "-", val1: "-", label2: "-", val2: "-" };
    const type = activity.type;
    const isRun = type === "Run" || type === "Walk" || type === "Hike";
    const isRide = type === "Ride" || type === "VirtualRide";
    const isSwim = type === "Swim";
    let burnVal = 0;
    if (activity.calories) {
      burnVal = Math.round(activity.calories);
    }
    const distKm = (activity.distance / 1e3).toFixed(2);
    const timeStr = formatDuration(activity.moving_time);
    let stats = {
      label1: "Time",
      val1: timeStr,
      label2: "Burn",
      val2: burnVal > 0 ? `${burnVal}kcal` : "-"
    };
    if (isRun) {
      stats = {
        label1: "Dist",
        val1: `${distKm}km`,
        label2: burnVal > 0 ? "Burn" : "Pace",
        val2: burnVal > 0 ? `${burnVal}kcal` : `${formatPace(activity.moving_time, activity.distance)}/km`
      };
    } else if (isRide) {
      stats = {
        label1: "Dist",
        val1: `${distKm}km`,
        label2: burnVal > 0 ? "Burn" : "Speed",
        val2: burnVal > 0 ? `${burnVal}kcal` : `${formatSpeed(activity.moving_time, activity.distance)}km/h`
      };
    } else if (isSwim) {
      stats = {
        label1: "Dist",
        val1: `${activity.distance.toFixed(0)}m`,
        label2: burnVal > 0 ? "Burn" : "Pace",
        val2: burnVal > 0 ? `${burnVal}kcal` : `${formatPace(activity.moving_time, activity.distance, true)}/100m`
      };
    }
    return stats;
  }
  return renderTemplate`${maybeRenderHead()}<section id="lifestyle" data-astro-cid-ocyvg3by> <div class="header" data-astro-cid-ocyvg3by> <h2 data-astro-cid-ocyvg3by>Lifestyle</h2> <span class="mono" data-astro-cid-ocyvg3by>/api_streams</span> </div> <div class="grid" data-astro-cid-ocyvg3by> <!-- Spotify Cube --> <div class="cube-container spotify-cube"${addAttribute(spotifyPlaylists.length + 1, "data-total")} data-astro-cid-ocyvg3by> <div class="cube-wrapper" data-astro-cid-ocyvg3by> <div class="cube" data-astro-cid-ocyvg3by> ${spotifyPlaylists.map((playlist, index) => renderTemplate`<a${addAttribute(playlist.link, "href")} target="_blank" rel="noopener noreferrer" class="face spotify"${addAttribute(`--i: ${index}`, "style")} data-astro-cid-ocyvg3by> <div class="icon-header" data-astro-cid-ocyvg3by> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ocyvg3by> <path d="M9 18V5l12-2v13" data-astro-cid-ocyvg3by></path> <circle cx="6" cy="18" r="3" data-astro-cid-ocyvg3by></circle> <circle cx="18" cy="16" r="3" data-astro-cid-ocyvg3by></circle> </svg> <span class="mono" data-astro-cid-ocyvg3by>Spotify / ${playlist.label}</span> </div> <div class="content" data-astro-cid-ocyvg3by> <div class="art" data-astro-cid-ocyvg3by><div class="disc" data-astro-cid-ocyvg3by></div></div> <div class="info" data-astro-cid-ocyvg3by> <span class="playlist-name" data-astro-cid-ocyvg3by>${playlist.month}</span> <span class="curated-by mono" data-astro-cid-ocyvg3by>Curated by Yegor</span> </div> </div> <div class="status mono" data-astro-cid-ocyvg3by> ${index === 0 && renderTemplate`<span class="pulse" data-astro-cid-ocyvg3by></span>`} ${index === 0 ? "Listening to..." : "Archived"} </div> </a>`)} <!-- Spotify Profile Card --> <a href="https://open.spotify.com/user/22vwofsgpsjmnw5gzow7pi5ly?si=d1d7580cd8b3469e" target="_blank" rel="noopener noreferrer" class="face spotify profile-card"${addAttribute(`--i: ${spotifyPlaylists.length}`, "style")} data-astro-cid-ocyvg3by> <div class="icon-header" data-astro-cid-ocyvg3by> <span class="mono" data-astro-cid-ocyvg3by>Spotify / Profile</span> </div> <div class="center-msg mono" data-astro-cid-ocyvg3by> <span data-astro-cid-ocyvg3by>Follow me on Spotify ↗</span> </div> </a> <!-- Dummy Face for Bottom Glance (not scrollable) --> <div class="face spotify dummy-face"${addAttribute(`--i: ${spotifyPlaylists.length + 1}`, "style")} data-astro-cid-ocyvg3by></div> </div> </div> </div> <!-- Strava Cube --> <div class="cube-container strava-cube"${addAttribute(activities.length + 1, "data-total")} data-astro-cid-ocyvg3by> <div class="cube-wrapper" data-astro-cid-ocyvg3by> <div class="cube" data-astro-cid-ocyvg3by> ${activities.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ocyvg3by": true }, { "default": async ($$result2) => renderTemplate`${activities.map((activity, index) => renderTemplate`<a${addAttribute(`https://www.strava.com/activities/${activity.id}`, "href")} target="_blank" rel="noopener noreferrer" class="face strava"${addAttribute(`--i: ${index}`, "style")} data-astro-cid-ocyvg3by> <div class="icon-header" data-astro-cid-ocyvg3by> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ocyvg3by> <circle cx="12" cy="12" r="10" data-astro-cid-ocyvg3by></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-ocyvg3by></polyline> </svg> <span class="mono" data-astro-cid-ocyvg3by>Strava / Workout</span> </div> <div class="content" data-astro-cid-ocyvg3by> <div class="activity-meta" data-astro-cid-ocyvg3by> <span class="type-large" data-astro-cid-ocyvg3by>${activity.type}</span> <span class="date mono" data-astro-cid-ocyvg3by> ${activity.start_date ? new Date(activity.start_date).toLocaleDateString(void 0, { month: "short", day: "numeric" }) : ""} </span> </div> <div class="stat-row" data-astro-cid-ocyvg3by> <div data-astro-cid-ocyvg3by> <span class="label mono" data-astro-cid-ocyvg3by>${getActivityStats(activity).label1}</span> <div class="val" data-astro-cid-ocyvg3by>${getActivityStats(activity).val1}</div> </div> <div data-astro-cid-ocyvg3by> <span class="label mono" data-astro-cid-ocyvg3by>${getActivityStats(activity).label2}</span> <div class="val" data-astro-cid-ocyvg3by>${getActivityStats(activity).val2}</div> </div> </div> </div> <div class="status mono" data-astro-cid-ocyvg3by> ${index === 0 && renderTemplate`<span class="pulse" data-astro-cid-ocyvg3by></span>`} ${index === 0 ? "Latest Activity" : "Past Activity"} </div> </a>`)} <a href="https://www.strava.com/athletes/yegorgolovnia" target="_blank" rel="noopener noreferrer" class="face strava profile-card"${addAttribute(`--i: ${activities.length}`, "style")} data-astro-cid-ocyvg3by> <div class="icon-header" data-astro-cid-ocyvg3by> <span class="mono" data-astro-cid-ocyvg3by>Strava / Profile</span> </div> <div class="center-msg mono" data-astro-cid-ocyvg3by> <span data-astro-cid-ocyvg3by>Follow me on Strava ↗</span> </div> </a>  <div class="face strava dummy-face"${addAttribute(`--i: ${activities.length + 1}`, "style")} data-astro-cid-ocyvg3by></div> ` })}` : renderTemplate`<div class="face strava empty" style="--i: 0" data-astro-cid-ocyvg3by> <span class="mono" data-astro-cid-ocyvg3by>Loading Strava...</span> </div>`} </div> </div> </div> </div> </section>   ${renderScript($$result, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Lifestyle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Lifestyle.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="content" data-astro-cid-bbe6dxrz> <div class="sys-msg pixel-text" data-astro-cid-bbe6dxrz>System.Boot() // Welcome</div> <h1 class="fade-in" data-astro-cid-bbe6dxrz>YEGOR GOLOVNIA</h1> <div class="subtitle pixel-text fade-in-delay" data-astro-cid-bbe6dxrz>
~ Program Lead & Operations Specialist ~
</div> <div class="stats fade-in-more-delay" data-astro-cid-bbe6dxrz> <span class="pixel-text color-accent" data-astro-cid-bbe6dxrz>⚡ AUTOMATION STATUS ⚡</span><br data-astro-cid-bbe6dxrz>
[ OK ] SYSTEMS ONLINE<br data-astro-cid-bbe6dxrz>
[ OK ] DEPLOYING WEB3 INFRASTRUCTURE
</div> <p class="intro fade-in-more-delay" data-astro-cid-bbe6dxrz>
Building impact-focused organizations and scalable systems in the
            Ethereum ecosystem.
</p> </div> </section> `;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { label: "Email", url: "mailto:hi@yegorgolovnia.com" },
    { label: "Twitter", url: "https://twitter.com/yegorgolovnia" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yegorgolovnia/" },
    { label: "Telegram", url: "https://t.me/yegorgolovnia" },
    { label: "Warpcast", url: "https://warpcast.com/yegor" },
    { label: "Calendly", url: "https://calendly.com/yegorgolovnia" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yegor Golovnia", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="terminal-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} <div class="spacer" data-astro-cid-j7pv25f6></div> <section id="about" data-astro-cid-j7pv25f6> <div class="header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>System.Info</h2> <span class="pixel-text" data-astro-cid-j7pv25f6>/bio</span> </div> <p class="bio" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Program & Product Lead</strong> // <strong data-astro-cid-j7pv25f6>Operations Specialist</strong> </p> <p class="bio text-muted" data-astro-cid-j7pv25f6>
> Currently leading Quadratic Funding Rounds at Giveth.<br data-astro-cid-j7pv25f6>
> Previously co-founded ETHBarcelona (2,500+ attendees).<br data-astro-cid-j7pv25f6>
> Specializing in Agile Product Management, Grant Writing, and distributed
                orgs.
</p> </section> <section id="ai-services" data-astro-cid-j7pv25f6> <div class="header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Services.Execute()</h2> <span class="pixel-text" data-astro-cid-j7pv25f6>/ai</span> </div> <div class="services-grid" data-astro-cid-j7pv25f6> <div class="service-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>AI Automations</h3> <p data-astro-cid-j7pv25f6>
Streamlining business processes with custom LLM
                        workflows and agents.
</p> </div> <div class="service-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>OpenClaw Integration</h3> <p data-astro-cid-j7pv25f6>
Setting up and optimizing OpenClaw for rigorous data
                        extraction and automation.
</p> </div> </div> </section> ${renderComponent($$result2, "Lifestyle", $$Lifestyle, { "data-astro-cid-j7pv25f6": true })} <footer id="contact" data-astro-cid-j7pv25f6> <div class="header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Network.Connect()</h2> <span class="pixel-text" data-astro-cid-j7pv25f6>/links</span> </div> <div class="links-grid" data-astro-cid-j7pv25f6> ${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="link-item" data-astro-cid-j7pv25f6> <span class="arrow" data-astro-cid-j7pv25f6>→</span> ${link.label} </a>`)} </div> <div class="f-credits mono" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>NO COOKIES. NO TRACKERS.</p> <p data-astro-cid-j7pv25f6>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Yegor Golovnia</p> </div> </footer> </div>  ` })}`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/pages/index.astro", void 0);

const $$file = "/Users/egorgolovnia/dev/yegor-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
