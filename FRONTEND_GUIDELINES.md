# Frontend Guidelines

## Design System Overview
A terminal-inspired, tech-forward dark theme that projects operational credibility. It utilizes high-contrast circular pixel typography juxtaposed over a fluid, interactive ambient background layered under frosted glassmorphism cards.

## Design Principles
- Terminal-chic aesthetic.
- High contrast, high readability.
- Motion is fluid (autonomous liquid gradients).
- Information density is controlled and scannable.

## Color Tokens
Defined in `src/styles/global.css`.
- `--color-bg`: #000000 (pure black primary background)
- `--color-text`: #eaeaea (primary text)
- `--color-text-muted`: #888888 (secondary text)
- `--color-accent`: #00FF41 (terminal green high-contrast text and borders)
- `--color-accent-subtle`: #1a1a1a (borders/dividers)
- Ambient Gradients: `#00FF41` (Green) and `#c026d3` (Fuchsia)

Accent usage guidelines:
- Use green for terminal outputs, hovered cards, and interactive 3D elements.
- Orange `#fc4c02` is strictly preserved for Strava branding.

## Typography
Font families:
- Primary / Display: `Geist Pixel Circle`
- Body: `Space Grotesk` (Fallback system sans)
- Mono: `Space Mono`

Type scale (recommended):
- H1: clamp(3rem, 10vw, 6rem)
- H2: 2.2rem
- H3: 1.4rem
- Body: 1rem–1.2rem
- Small / Meta: 0.75rem–0.9rem

Rules:
- **CRITICAL**: `Geist Pixel Circle` only renders its signature circular pixels when text is strictly **lowercase**. Uppercase text will render as standard chunky square pixels.
- Headings use the primary pixel font.
- Mono is for metadata, status codes, and labels.
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
- **Liquid Gradients**: Use wide `vw`/`vh` translation keyframes to allow the green and fuchsia blurry blobs to smoothly drift across the screen.
- **Glassmorphism**: Content cards (Services, Links, Cubes) must use `background: rgba(0, 255, 65, 0.02)` and `backdrop-filter: blur(16px)` to let the ambient liquid background shine through as frosted glass.

## Motion Guidelines
- Background gradient motion uses cubic-bezier easing for a smooth "underwater" feel.
- Respect `prefers-reduced-motion` and disable the background translation if necessary.
- 3D Cube tilts uniformly rotate `20deg` on X-axis on hover.

## Interaction Patterns
- Hover styling typically shifts the border to the solid `--color-accent` green with a dashed outline.
- All clickable cards must be keyboard accessible.

## Components
Hero:
- Name in lowercase if circular pixels are desired, or uppercase if square blocks are desired.
- Keep the `System.Boot() // Welcome` style minimal.

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
