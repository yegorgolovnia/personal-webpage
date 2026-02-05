# Frontend Guidelines

## Design System Overview
A calm, premium dark theme that projects operational credibility and systems-level thinking. Effects are used as short, intentional accents, not as constant visual noise.

## Design Principles
- Calm authority over spectacle.
- High contrast, high readability.
- Motion is intentional and rare.
- Information density is controlled and scannable.

## Color Tokens
Defined in `src/styles/global.css`.
- `--color-bg`: #050505 (primary background)
- `--color-text`: #eaeaea (primary text)
- `--color-text-muted`: #888888 (secondary text)
- `--color-accent`: #ffffff (high-contrast text)
- `--color-accent-subtle`: #2a2a2a (borders/dividers)

Accent usage guidelines:
- Use green for Spotify and orange for Strava only in their context.
- Keep accents under 10 percent of visible area.

## Typography
Font families:
- Display: Instrument Serif (H1, H2)
- Body: Space Grotesk
- Mono: Space Mono

Type scale (recommended):
- H1: clamp(4rem, 15vw, 10rem)
- H2: 2.2rem
- H3: 1.4rem
- Body: 1rem–1.2rem
- Small / Meta: 0.75rem–0.9rem

Rules:
- Headings use display font for contrast and character.
- Mono is for metadata and labels only.
- Keep line-height generous (1.4–1.6 for body).

## Spacing
- Base unit: 4px
- Section padding: 4rem–6rem vertical
- Card padding: 1.5rem–2rem
- Vertical rhythm: use 8, 12, 16, 24, 32, 48, 64

## Layout
- Container max width: 1000px
- Maintain generous whitespace between sections.
- Keep grids to 1–2 columns on desktop, 1 column on mobile.

## Breakpoints
- 480px (small phones)
- 768px (tablets)
- 1024px (desktop)
- 1280px (large desktop)

## Radius and Borders
- Card radius: 4px
- Cube radius: 12px
- Borders: 1px solid `--color-accent-subtle`

## Elevation and Layers
- Default surface: flat with subtle inset shadow.
- Overlays: stronger shadow and blur on backdrop.
- Keep z-index layers consistent (base content < overlays < modals).

## Iconography
- Use thin line icons with 1.5–2px stroke.
- Keep icons monochrome unless context-specific (Spotify, Strava).

## Visual Atmosphere
- Use a soft gradient mesh in the background for depth.
- Add subtle grain to avoid flatness.
- Background effects must be low opacity and non-distracting.

## Motion Guidelines
- Default animations should be subtle and short.
- Respect `prefers-reduced-motion` and disable non-essential animation.
- Glitch effects only on open or explicit triggers, never continuous.
- Scramble effects only on titles for 300–500ms.

## Interaction Patterns
- Hover is desktop-only. Mobile should never require hover.
- All clickable cards must be keyboard accessible.
- Use focus rings that are clearly visible.
- Keep transitions under 300ms for UI feedback.

## Interaction States
- Hover: subtle border highlight or lift.
- Focus: 2px outline with 2px offset.
- Active: brief opacity shift or border change.

## Components
Hero:
- Oversized name, minimal copy, large breathing space.
- One ambient gradient element only.

Section Headers:
- Title + mono slug.
- Thin divider line.

Experience / Case Study Cards:
- Use dark panels with subtle borders.
- Hover triggers sidebar or overlay, not both at once.

Sidebar Overlay:
- Dark panel with subtle scanline overlay.
- Page dim when sidebar is visible.

Lifestyle Cubes:
- Preserve the cube illusion.
- Dummy face is non-scrollable to reduce visual clutter.

## Accessibility
- All interactive elements must be keyboard navigable.
- Maintain a contrast ratio above 4.5:1.
- Include `rel="noopener noreferrer"` for external links.
- Avoid hover-only content on mobile.

## Content & Tone
- Short, direct, action-oriented.
- Avoid jargon unless it signals credibility.
- Prefer outcomes and metrics over adjectives.

## Voice and Brand Fit
- Emphasize reliability, systems thinking, and operational clarity.
- Avoid hype or overly playful copy.

## Do / Don’t
Do:
- Keep the system calm and precise.
- Use motion as a highlight, not a constant.
- Preserve clarity and speed over novelty.

Don’t:
- Stack multiple effects on the same interaction.
- Use neon or high-saturation palettes.
- Add continuous animations that distract from reading.
