# Product Requirements Document (PRD)

## Product Name
Yegor Golovnia — Personal Landing Page

## Problem Statement
Visitors need a fast, credible, and memorable snapshot of Yegor’s role as an operations generalist and builder of agentic AI systems, with immediate paths to connect or explore experience. The current ecosystem is noisy; the site must communicate calm authority, operational excellence, and high-leverage automation without feeling gimmicky.

## Goals
1. Communicate a clear value proposition in under 10 seconds.
2. Provide frictionless paths to contact and credibility signals (experience, case studies).
3. Express a premium, dark-mode aesthetic aligned with a Web3 operations leader.
4. Keep performance fast and interactions intentional (motion and glitch used sparingly).

## Non-Goals
- Blogging or long-form publishing.
- Multi-page marketing site.
- Heavy analytics or tracking.

## Target Audience
- Technical founders, Web3 leaders, and ecosystem operators.
- Teams looking for operational scaling through custom AI workflows.
- Collaborators in open-source and public goods funding.

## Key Value Proposition
"Building the operational layer for high-leverage teams, from custom AI agents to complex funding programs."

## Core Sections
1. Hero
2. About
3. Experience (with hover/overlay detail)
4. Case Studies
5. Lifestyle (Strava/Spotify)
6. Contact

## Functional Requirements
- Responsive layout (mobile-first).
- Accessible interactive cards (keyboard + focus states).
- Reduced motion support via prefers-reduced-motion.
- Strava activity loaded via API and refreshed on the client (30 min cache).
- Contact links open in new tabs with safe rel attributes.
- Experience and case study details accessible via hover (desktop) and click (all).

## Interaction Requirements
- Scramble effect only on the title and only for a short burst (300–500ms).
- Glitch/scanline effects only on sidebar open, not on hover change.
- Hover behavior disabled on mobile/tablet for readability.
- Page dim (subtle) while sidebar is open.

## Performance Requirements
- Minimal JS on initial load; defer non-critical effects.
- Keep animations lightweight and optional for reduced-motion users.
- Avoid layout shifts and avoid heavy canvas redraw loops.

## Content Requirements
- Tone: calm, precise, and credible.
- Copy must be short, scannable, and outcome-driven.
- Experience and case studies should highlight scale, ownership, and impact metrics.

## Success Metrics
- Time to first interaction < 1s on modern devices.
- Bounce rate below typical personal portfolio benchmarks.
- Contact link click-through rate improves over baseline.

## Risks and Mitigations
- Over-animation: keep motion subtle and rare.
- Data dependency (Strava): fallback state + caching headers.
- Overloaded interaction model: simplify hover + click interactions.

## Future Enhancements
- Optional “availability” banner (open/closed to opportunities).
- Downloadable one-page resume.
- Case study deep links with shareable URLs.
