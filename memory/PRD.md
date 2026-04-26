# Podosis — Favicon Set (PRD)

## Original problem statement
> github.com/medipodo/podosis — podosis.com için siteye uygun, Google'ın
> sevdiği tüm formatlarda favicon hazırla. Başka bir şeye dokunma.

## Scope
- ONLY favicon assets generated. No application code modified.
- Source repo `github.com/medipodo/podosis` returns 404 (private/empty),
  so live site `podosis.com` was used as the source-of-truth for branding
  (theme color `#E91E63`, Fraunces serif headings, name "Podosis").

## Deliverables (location: /app/frontend/public/favicons/)
- favicon.ico (multi-size 16/32/48) + duplicate at /app/frontend/public/favicon.ico
- favicon.svg (modern vector) + safari-pinned-tab.svg
- PNGs: 16, 32, 48, 96, 192 (favicon)
- apple-touch-icon (180), 152, 167
- android-chrome 192 + 512
- maskable-icon 512 (PWA adaptive)
- mstile-150x150 (Windows)
- site.webmanifest + browserconfig.xml
- README.md with copy-paste <head> snippet
- gen_favicons.py for future regeneration

## Design
- Square with rounded corners, brand pink `#E91E63` background
- White serif "P" using Fraunces Bold (matches site's heading font)
- Google's full recommended set (every format/size)

## Next action items (user-side)
1. Copy `frontend/public/favicons/` folder + root `favicon.ico` into the
   real podosis project's `public/` directory.
2. Paste the `<head>` snippet from README.md into the site template.
3. Deploy.

## Future / backlog
- If brand evolves to a custom mark (e.g. foot silhouette), regenerate via
  `gen_favicons.py` (single source-of-truth script).
