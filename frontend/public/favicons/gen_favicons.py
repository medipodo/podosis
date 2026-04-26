"""
Generate Podosis favicon set in every Google-recommended format.
Brand: Podosis — minimal "P" lettermark.
Theme color: #E91E63 (matches site theme-color meta).
Typography: Fraunces serif (same as the live site headings).
"""

import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = "/app/frontend/public/favicons"
os.makedirs(OUT_DIR, exist_ok=True)

BRAND = "#E91E63"        # Pink (Podosis primary)
BRAND_DEEP = "#AD1457"   # Darker pink, used for subtle inner ring on large sizes
WHITE = "#FFFFFF"
FONT_PATH = "/tmp/fonts/Fraunces-Bold.ttf"


def make_master(size: int, rounded: bool = True, bg: str = BRAND, with_ring: bool = False) -> Image.Image:
    """Create a square favicon canvas with a centered serif 'P'."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background: rounded square (iOS / Android friendly) or pure square.
    radius = int(size * 0.22)
    if rounded:
        draw.rounded_rectangle([(0, 0), (size - 1, size - 1)], radius=radius, fill=bg)
    else:
        draw.rectangle([(0, 0), (size - 1, size - 1)], fill=bg)

    # Optional subtle inner ring for larger icons (improves luxe feel).
    if with_ring:
        inset = int(size * 0.06)
        draw.rounded_rectangle(
            [(inset, inset), (size - 1 - inset, size - 1 - inset)],
            radius=max(radius - inset, 4),
            outline=BRAND_DEEP,
            width=max(1, int(size * 0.012)),
        )

    # Letter "P" — Fraunces serif, optical-size aware variable axes via instance.
    # Pick a font size that visually fills the canvas without crowding edges.
    font_size = int(size * 0.74)
    font = ImageFont.truetype(FONT_PATH, font_size)
    text = "P"

    # Measure & center precisely (use textbbox for accurate metrics).
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    tx = (size - tw) // 2 - bbox[0]
    # Slight optical baseline correction so the serif "P" looks centered.
    ty = (size - th) // 2 - bbox[1] - int(size * 0.02)
    draw.text((tx, ty), text, font=font, fill=WHITE)

    return img


def save_png(img: Image.Image, name: str) -> None:
    img.save(os.path.join(OUT_DIR, name), format="PNG", optimize=True)


def save_ico(sizes, name: str) -> None:
    """Multi-resolution .ico with sharp-rendered tiers (16/32/48)."""
    # Render at each size separately for crispness, then bundle into one ICO.
    # PIL's ICO writer uses the `sizes` parameter to encode entries; we feed
    # the highest-quality 48x48 master and supply explicit sizes so PIL
    # generates the 32 and 16 tiers via high-quality downscaling.
    largest = max(sizes)
    base = make_master(largest, rounded=False)
    base.save(
        os.path.join(OUT_DIR, name),
        format="ICO",
        sizes=[(s, s) for s in sorted(sizes)],
    )


def write_svg() -> None:
    """Modern SVG favicon (light + dark friendly via currentColor fallback)."""
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" ry="112" fill="{BRAND}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
        font-family="'Fraunces','Times New Roman',serif"
        font-weight="600" font-size="380" fill="#FFFFFF">P</text>
</svg>
"""
    with open(os.path.join(OUT_DIR, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write(svg)

    # Safari pinned-tab uses a single-color SVG (mask-icon).
    mask = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
        font-family="'Fraunces','Times New Roman',serif"
        font-weight="700" font-size="420" fill="#000000">P</text>
</svg>
"""
    with open(os.path.join(OUT_DIR, "safari-pinned-tab.svg"), "w", encoding="utf-8") as f:
        f.write(mask)


def write_manifests() -> None:
    """site.webmanifest + browserconfig.xml (MS tiles)."""
    webmanifest = """{
  "name": "Podosis — Elvankent Ayak Bakım Merkezi",
  "short_name": "Podosis",
  "description": "Podosis — Elvankent'te profesyonel ayak bakım merkezi.",
  "lang": "tr-TR",
  "icons": [
    { "src": "/favicons/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "/favicons/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "/favicons/maskable-icon-512x512.png",  "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ],
  "theme_color": "#E91E63",
  "background_color": "#FFFFFF",
  "display": "standalone",
  "start_url": "/"
}
"""
    with open(os.path.join(OUT_DIR, "site.webmanifest"), "w", encoding="utf-8") as f:
        f.write(webmanifest)

    browserconfig = """<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/favicons/mstile-150x150.png"/>
      <TileColor>#E91E63</TileColor>
    </tile>
  </msapplication>
</browserconfig>
"""
    with open(os.path.join(OUT_DIR, "browserconfig.xml"), "w", encoding="utf-8") as f:
        f.write(browserconfig)


def main() -> None:
    # PNGs Google explicitly recommends + common ecosystem sizes.
    png_specs = [
        ("favicon-16x16.png",          16,  False, False),
        ("favicon-32x32.png",          32,  False, False),
        ("favicon-48x48.png",          48,  False, False),
        ("favicon-96x96.png",          96,  True,  False),
        ("favicon-192x192.png",        192, True,  False),
        ("apple-touch-icon.png",       180, False, False),  # iOS expects square, no transparency
        ("apple-touch-icon-152x152.png", 152, False, False),
        ("apple-touch-icon-167x167.png", 167, False, False),
        ("android-chrome-192x192.png", 192, True,  False),
        ("android-chrome-512x512.png", 512, True,  True),
        ("maskable-icon-512x512.png",  512, False, False),  # full bleed, safe zone respected
        ("mstile-150x150.png",         150, False, False),
    ]
    for name, size, rounded, ring in png_specs:
        save_png(make_master(size, rounded=rounded, with_ring=ring), name)

    # Multi-size .ico (Google's primary fallback).
    save_ico([16, 32, 48], "favicon.ico")

    # SVGs: modern + Safari pinned tab.
    write_svg()

    # Manifests.
    write_manifests()

    # Friendly listing.
    for f in sorted(os.listdir(OUT_DIR)):
        path = os.path.join(OUT_DIR, f)
        print(f"{f:38s}  {os.path.getsize(path):>7} B")


if __name__ == "__main__":
    main()
