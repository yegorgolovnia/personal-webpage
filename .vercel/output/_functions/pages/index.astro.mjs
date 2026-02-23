import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderScript, o as renderComponent, p as Fragment } from '../chunks/astro/server_n2Om7Hfc.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Yegor Golovnia - Web3 Operations Generalist" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="atmosphere" aria-hidden="true"></div> <div id="content-shifter"> <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderSlot($$result, $$slots["overlays"])} </body></html>`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="content" data-astro-cid-bbe6dxrz> <h1 class="fade-in" data-astro-cid-bbe6dxrz>Yegor<br data-astro-cid-bbe6dxrz>Golovnia</h1> <div class="role-container fade-in-delay" data-astro-cid-bbe6dxrz> <span class="role" data-astro-cid-bbe6dxrz>Program & Product Lead</span> <span class="separator" data-astro-cid-bbe6dxrz>/</span> <span class="role" data-astro-cid-bbe6dxrz>Web3 Ops</span> </div> <p class="intro fade-in-more-delay" data-astro-cid-bbe6dxrz>
Building impact-focused organizations and scalable systems in the Ethereum ecosystem.
</p> </div> <div class="bg-gradient" data-astro-cid-bbe6dxrz></div> </section> `;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Hero.astro", void 0);

const $$CaseStudies = createComponent(($$result, $$props, $$slots) => {
  const cases = [
    {
      title: "ETHBarcelona",
      year: "2022",
      role: "Lead Ops & Co-Organizer",
      metrics: ["2,500 Attendees", "$1.5M Raised", "40+ Sponsors"],
      desc: "Coordinated the first impact-focused Ethereum conference in Spain. Managed 30+ volunteers and led a quadratic funding round.",
      hover_bullets: [
        "Solarpunk vibe & direction",
        "Zero-waste initiative lead",
        "Local community integration"
      ],
      tags: ["Event", "Impact", "Regen"],
      location: "Barcelona"
    },
    {
      title: "EthCC[4] x DoinGud",
      year: "2021",
      role: "Activation Lead",
      metrics: ["Media Team", "Ecosystem Interviews"],
      desc: "Managed side activations and coordinated storytelling with key ecosystem figures during EthCC.",
      hover_bullets: [
        "Coordinated media interviews",
        "Managed on-site activation",
        "Partner relations"
      ],
      tags: ["Activation", "Media", "Events"],
      location: "Paris"
    },
    {
      title: "Cryptodyssey",
      year: "2021",
      role: "Event Organizer",
      metrics: ["Lisbon Blockchain Week", "High-Profile Side Event"],
      desc: "Organized a major side event for DoinGud X API3DAO.",
      hover_bullets: [
        "Managed 500+ pax event",
        "Speaker coordination",
        "Production oversight"
      ],
      tags: ["Production", "Side Event", "Lisbon"],
      location: "Lisbon"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="case-studies" data-astro-cid-2urjykrc> <div class="header" data-astro-cid-2urjykrc> <h2 data-astro-cid-2urjykrc>Case Studies</h2> <span class="mono" data-astro-cid-2urjykrc>/events</span> </div> <div class="grid" data-astro-cid-2urjykrc> ${cases.map((item) => renderTemplate`<button type="button" class="card hover-trigger"${addAttribute(JSON.stringify(item), "data-hover-data")}${addAttribute(`Open details for ${item.title}`, "aria-label")} data-astro-cid-2urjykrc> <div class="top" data-astro-cid-2urjykrc> <h3 data-astro-cid-2urjykrc>${item.title}</h3> <span class="year mono" data-astro-cid-2urjykrc>[${item.year}]</span> </div> <div class="metrics" data-astro-cid-2urjykrc> ${item.metrics.map((m) => renderTemplate`<span class="badge mono" data-astro-cid-2urjykrc>${m}</span>`)} </div> <p data-astro-cid-2urjykrc>${item.desc}</p> </button>`)} </div> </section>  ${renderScript($$result, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/CaseStudies.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/CaseStudies.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      role: "Program & Product Lead",
      company: "Giveth",
      period: "Jan 2024 \u2013 Present",
      desc: "Leading Quadratic Funding rounds to allocate resources to high-impact public goods. optimizing donor engagement and sybil defense mechanisms.",
      hover_bullets: [
        "Orchestrated $1M+ in QF rounds",
        "Designed Sybil-resistance strategy",
        "Managed cross-functional product squads"
      ],
      tags: ["Product Mgmt", "Quadratic Funding", "Operations"],
      location: "Remote / Barcelona"
    },
    {
      role: "Contributor (Security & Ops)",
      company: "The DAO Security Fund",
      period: "Current",
      desc: "Coordinating whitehat security initiatives and safeguarding the Ethereum ecosystem. Leveraging historical DAO funds to bolster network resilience.",
      hover_bullets: [
        "Whitehat coordination",
        "Fund governance & allocation",
        "Ecosystem resilience planning"
      ],
      tags: ["Security", "DAO Gov", "Ops"],
      location: "Remote"
    },
    {
      title: "Monero Meetups BCN",
      role: "Co-organizer",
      desc: "Privacy-focused community building. Hosting monthly events on cryptography and digital rights in Barcelona.",
      hover_bullets: [
        "Monthly event production",
        "Speaker curation (Privacy/Crypto)",
        "Community growth strategy"
      ],
      tags: ["Privacy", "Events", "Community"],
      location: "Barcelona, Spain"
    },
    {
      role: "Co-Founder & Operations Lead",
      company: "ETHBarcelona",
      period: "2022 \u2013 2024",
      desc: "Scaled a localized Web3 conference to 2,500+ attendees. Managed production, staffing, and infinite operational chaos.",
      hover_bullets: [
        "Scaled to 2,500+ attendees",
        "Managed $500k+ budget",
        "Led 30+ core team & vols"
      ],
      tags: ["Event Ops", "Leadership", "Ethereum"],
      location: "Barcelona, Spain"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" data-astro-cid-xpq65ryk> <div class="header" data-astro-cid-xpq65ryk> <h2 data-astro-cid-xpq65ryk>Experience</h2> <span class="mono" data-astro-cid-xpq65ryk>/log</span> </div> <div class="timeline" data-astro-cid-xpq65ryk> ${experiences.map((exp, index) => renderTemplate`<button type="button" class="entry hover-trigger"${addAttribute(JSON.stringify(exp), "data-hover-data")}${addAttribute(`Open details for ${exp.title || exp.role}`, "aria-label")} data-astro-cid-xpq65ryk> <div class="meta mono" data-astro-cid-xpq65ryk> <span class="period" data-astro-cid-xpq65ryk>${exp.period}</span> </div> <div class="content" data-astro-cid-xpq65ryk> <h3 data-astro-cid-xpq65ryk>${exp.title || exp.role}</h3> ${exp.company && renderTemplate`<h4 class="company" data-astro-cid-xpq65ryk>${exp.company}</h4>`} <p data-astro-cid-xpq65ryk>${exp.desc}</p> </div> </button>`)} </div> </section>  ${renderScript($$result, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Experience.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/Experience.astro", void 0);

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

const $$HoverPopup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="sidebar-scene" class="perspective-container" data-astro-cid-p74self4> <canvas id="stretch-canvas" class="stretch-overlay" data-astro-cid-p74self4></canvas> <aside id="hover-sidebar" class="sidebar-panel hidden" data-astro-cid-p74self4> <div class="panel-surface" data-astro-cid-p74self4> <!-- Decorative Border Line --> <div class="active-border" data-astro-cid-p74self4></div> <div class="content-wrapper" data-astro-cid-p74self4> <div class="panel-label mono" data-astro-cid-p74self4>DETAIL VIEW</div> <div class="title-block" data-astro-cid-p74self4> <h2 class="role-title" data-astro-cid-p74self4></h2> <div class="company-sub mono" data-astro-cid-p74self4></div> </div> <div class="meta-row mono" data-astro-cid-p74self4> <span class="location-date" data-astro-cid-p74self4></span> </div> <div class="main-body" data-astro-cid-p74self4> <ul class="details-list" data-astro-cid-p74self4></ul> </div> <div class="footer-row" data-astro-cid-p74self4> <div class="tags-row mono" data-astro-cid-p74self4></div> </div> </div> </div> </aside> </div> ${renderScript($$result, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/HoverPopup.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/egorgolovnia/dev/yegor-landing-page/src/components/HoverPopup.astro", void 0);

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&0x";
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
class TextScramble {
  el;
  chars;
  queue;
  frame;
  frameRequest;
  originalText;
  constructor(el) {
    this.el = el;
    this.chars = CHARS;
    this.queue = [];
    this.frame = 0;
    this.frameRequest = null;
    if (this.el.dataset.originalText) {
      this.originalText = this.el.dataset.originalText;
    } else {
      this.originalText = el.innerText;
      this.el.dataset.originalText = this.originalText;
    }
  }
  setText(newText, mode = "normal") {
    if (prefersReducedMotion()) {
      this.el.textContent = newText;
      this.originalText = newText;
      this.el.dataset.originalText = newText;
      return;
    }
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 8);
      const end = start + Math.floor(Math.random() * 15);
      this.queue.push({ from, to, start, end });
    }
    if (this.frameRequest) cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update(mode);
  }
  update(mode) {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (/\s/.test(to)) {
        output += to;
        complete++;
        continue;
      }
      if (this.frame >= end) {
        complete++;
        if (mode === "encrypt") {
          if (!char || Math.random() < 0.1) {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }
          const colorClass = Math.random() > 0.8 ? "dud-rgb" : "dud-mono";
          output += `<span class="${colorClass}">${char}</span>`;
        } else {
          output += to;
        }
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        const colorClass = Math.random() > 0.8 ? "dud-rgb" : "dud-mono";
        output += `<span class="${colorClass}">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) ; else {
      this.frameRequest = requestAnimationFrame(() => this.update(mode));
      this.frame++;
    }
  }
  setTextInstant(newText) {
    if (this.frameRequest) cancelAnimationFrame(this.frameRequest);
    this.frameRequest = null;
    this.el.textContent = newText;
    this.originalText = newText;
    this.el.dataset.originalText = newText;
  }
  restore() {
    this.setText(this.originalText, "normal");
  }
  restoreInstant() {
    if (this.frameRequest) cancelAnimationFrame(this.frameRequest);
    this.frameRequest = null;
    this.el.textContent = this.originalText;
    this.el.dataset.originalText = this.originalText;
  }
}
class GlitchCanvas {
  canvas;
  ctx;
  stretchFactor;
  animRequest;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.stretchFactor = 0;
    this.animRequest = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (prefersReducedMotion()) return;
    if (this.stretchFactor > 0.01) {
      const chunks = Math.floor(110 * this.stretchFactor);
      for (let i = 0; i < chunks; i++) {
        const h = Math.random() * 50 * this.stretchFactor + 2;
        const w = Math.random() * this.canvas.width * 0.7 * this.stretchFactor + 24;
        const x = Math.random() * this.canvas.width - w / 2;
        const y = Math.random() * this.canvas.height;
        const rand = Math.random();
        if (rand > 0.95)
          this.ctx.fillStyle = `rgba(255, 255, 255, ${0.35 * this.stretchFactor})`;
        else if (rand > 0.9)
          this.ctx.fillStyle = `rgba(255, 100, 100, ${0.25 * this.stretchFactor})`;
        else if (rand > 0.85)
          this.ctx.fillStyle = `rgba(100, 255, 100, ${0.25 * this.stretchFactor})`;
        else if (rand > 0.8)
          this.ctx.fillStyle = `rgba(100, 100, 255, ${0.25 * this.stretchFactor})`;
        else if (rand > 0.75)
          this.ctx.fillStyle = `rgba(100, 255, 255, ${0.25 * this.stretchFactor})`;
        else this.ctx.fillStyle = `rgba(0, 0, 0, ${0.6 * this.stretchFactor})`;
        this.ctx.fillRect(x, y, w, h);
      }
      this.stretchFactor *= 0.94;
      this.animRequest = requestAnimationFrame(() => this.draw());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  triggerEntrance() {
    this.stretchFactor = 0.7;
    if (this.animRequest) cancelAnimationFrame(this.animRequest);
    this.draw();
  }
  triggerExit() {
    this.stretchFactor = 0.7;
    if (this.animRequest) cancelAnimationFrame(this.animRequest);
    this.draw();
  }
  setStretch(val) {
    this.stretchFactor = val;
    if (this.animRequest) cancelAnimationFrame(this.animRequest);
    this.draw();
  }
}

const ScrambleText = ({ text, className = "", as: Component = "span" }) => {
  const ref = useRef(null);
  const scrambler = useRef(null);
  useEffect(() => {
    if (ref.current) {
      scrambler.current = new TextScramble(ref.current);
      if (ref.current.innerText !== text) {
        scrambler.current.setText(text, "normal");
      }
    }
  }, [text]);
  useEffect(() => {
    if (scrambler.current) {
      scrambler.current.setText(text, "normal");
    }
  }, []);
  return /* @__PURE__ */ jsx(Component, { ref, className, "data-original-text": text, children: text });
};
function ExperienceOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const canvasRef = useRef(null);
  const glitchRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleOpen = (e) => {
      setItem(e.detail);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      document.body.classList.add("overlay-open");
    };
    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = "";
      document.body.classList.remove("overlay-open");
    };
    window.addEventListener("open-overlay", handleOpen);
    window.addEventListener("close-overlay", handleClose);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-overlay", handleOpen);
      window.removeEventListener("close-overlay", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("overlay-open");
    };
  }, []);
  useEffect(() => {
    if (isOpen && canvasRef.current && !glitchRef.current) {
      glitchRef.current = new GlitchCanvas(canvasRef.current);
      glitchRef.current.triggerEntrance();
    } else if (isOpen && glitchRef.current) {
      glitchRef.current.triggerEntrance();
    }
  }, [isOpen]);
  const close = () => {
    if (glitchRef.current) glitchRef.current.triggerExit();
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = "";
      document.body.classList.remove("overlay-open");
    }, 100);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && item && /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "overlay-backdrop",
        onClick: close
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "overlay-modal",
        initial: { opacity: 0, scale: 0.96, x: "-50%", y: "-50%" },
        animate: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
        exit: { opacity: 0, scale: 0.98, x: "-50%", y: "-50%" },
        transition: { type: "tween", ease: "easeOut", duration: 0.25 },
        ref: containerRef,
        children: [
          /* @__PURE__ */ jsx(
            "canvas",
            {
              ref: canvasRef,
              className: "glitch-canvas-layer"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "overlay-content", children: [
            /* @__PURE__ */ jsxs("div", { className: "overlay-header", children: [
              /* @__PURE__ */ jsx("div", { className: "overlay-label", children: "Detail View" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: close,
                  className: "overlay-close",
                  "aria-label": "Close details",
                  children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
                    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "overlay-title", children: [
              /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx(ScrambleText, { text: item.role || item.title || "", as: "span" }) }),
              /* @__PURE__ */ jsx("div", { className: "overlay-subtitle", children: /* @__PURE__ */ jsx(ScrambleText, { text: item.company || item.subtitle || "", as: "span" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "overlay-meta", children: [
              /* @__PURE__ */ jsx("span", { children: item.period || item.year }),
              item.location && /* @__PURE__ */ jsx("span", { children: item.location })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "overlay-body", children: [
              item.desc && /* @__PURE__ */ jsx("p", { className: "overlay-desc", children: item.desc }),
              item.hover_bullets && /* @__PURE__ */ jsx("ul", { className: "overlay-bullets", children: item.hover_bullets.map((bullet, i) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("span", { className: "bullet-dash", children: "—" }),
                /* @__PURE__ */ jsx("span", { children: bullet })
              ] }, i)) }),
              item.detail_sections && item.detail_sections.map((section, i) => /* @__PURE__ */ jsxs("div", { className: "overlay-section", children: [
                /* @__PURE__ */ jsx("h3", { children: section.heading }),
                /* @__PURE__ */ jsx("div", { className: "overlay-section-content", children: section.content })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsx("div", { className: "overlay-footer", children: item.tags?.map((tag, i) => /* @__PURE__ */ jsx("span", { className: "overlay-tag", children: tag }, i)) })
          ] })
        ]
      }
    )
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { label: "Email", url: "mailto:hi@yegorgolovnia.com" },
    { label: "Twitter", url: "https://twitter.com/yegorgolovnia" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yegorgolovnia/" },
    { label: "Telegram", url: "https://t.me/yegorgolovnia" },
    { label: "Warpcast", url: "https://warpcast.com/yegor" },
    { label: "Calendly", url: "https://calendly.com/yegorgolovnia" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yegor Golovnia", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="spacer" data-astro-cid-j7pv25f6></div> <section id="about" data-astro-cid-j7pv25f6> <div class="header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>About</h2> <span class="mono" data-astro-cid-j7pv25f6>/bio</span> </div> <p class="bio" data-astro-cid-j7pv25f6>
I am a <strong data-astro-cid-j7pv25f6>Program & Product Lead</strong> and <strong data-astro-cid-j7pv25f6>Operations Specialist</strong> with a deep focus on the Ethereum ecosystem.
</p> <p class="bio" data-astro-cid-j7pv25f6>
Currently leading Quadratic Funding Rounds at <strong data-astro-cid-j7pv25f6>Giveth</strong>. Previously co-founded <strong data-astro-cid-j7pv25f6>ETHBarcelona</strong>, scaling it
            to 2,500+ attendees.
</p> <p class="bio text-muted" data-astro-cid-j7pv25f6>
Specializing in Agile Product Management, Quadratic Funding, Grant
            Writing, and building distributed organizations. Native in
            Ukrainian, fluent in English & Russian.
</p> </section> ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CaseStudies", $$CaseStudies, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Lifestyle", $$Lifestyle, { "data-astro-cid-j7pv25f6": true })} <footer id="contact" data-astro-cid-j7pv25f6> <div class="header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Contact</h2> <span class="mono" data-astro-cid-j7pv25f6>/connect</span> </div> <div class="links-grid" data-astro-cid-j7pv25f6> ${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="link-item" data-astro-cid-j7pv25f6> <span class="arrow" data-astro-cid-j7pv25f6>→</span> ${link.label} </a>`)} </div> <div class="f-credits mono" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>NO COOKIES. NO TRACKERS.</p> <p data-astro-cid-j7pv25f6>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Yegor Golovnia</p> </div> </footer> `, "overlays": ($$result2) => renderTemplate`<div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HoverPopup", $$HoverPopup, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ExperienceOverlay", ExperienceOverlay, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/egorgolovnia/dev/yegor-landing-page/src/components/ExperienceOverlay", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div>` })} `;
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
