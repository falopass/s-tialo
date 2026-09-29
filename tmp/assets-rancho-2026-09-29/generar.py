"""Compone los assets de Rancho Itahue usando solo fotos y logos del cliente."""

from pathlib import Path
from shutil import copy2

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[2]
WORK = Path(__file__).resolve().parent
ORIG = WORK / "origenes"
BRAND = ROOT / "public/demos/rancho-itahue/brand"
PUBLIC = ROOT / "public/demos/rancho-itahue"
APP = ROOT / "app/demos/rancho-itahue"
RED = (226, 4, 17)
GRAY = (88, 88, 86)
PHOTOS = {
    "og-image.png": ("portada-IMG-20260928-WA0253.webp", (1200, 630)),
    "social-cuadrada.png": ("portada-IMG-20260928-WA0053.webp", (1080, 1080)),
    "social-historia.png": ("portada-IMG-20260928-WA0052.webp", (1080, 1920)),
}

for folder in (WORK, ORIG, BRAND):
    folder.mkdir(parents=True, exist_ok=True)

sources = [
    PUBLIC / "logo-rancho-itahue.png",
    PUBLIC / "logo-horizontal-recortado.png",
    PUBLIC / "logo-vertical-recortado.png",
    PUBLIC / "logo-horizontal.svg",
    *(PUBLIC / "fotos" / name for name, _ in PHOTOS.values()),
]
for source in sources:
    copy2(source, ORIG / source.name)

square = Image.open(ORIG / "logo-rancho-itahue.png").convert("RGBA")
horizontal = Image.open(ORIG / "logo-horizontal-recortado.png").convert("RGBA")

# Recorte del cuadro rojo real del logo cuadrado, sin reconstruir el símbolo.
red_pixels = [
    (x, y)
    for y in range(square.height // 2)
    for x in range(square.width // 2, square.width)
    if (lambda p: p[0] > 170 and p[1] < 55 and p[2] < 65 and p[3] > 240)(square.getpixel((x, y)))
]
assert red_pixels, "No se encontró el símbolo rojo en el logo real"
box = (
    min(x for x, _ in red_pixels),
    min(y for _, y in red_pixels),
    max(x for x, _ in red_pixels) + 1,
    max(y for _, y in red_pixels) + 1,
)
tile = square.crop(box)
assert abs(tile.width - tile.height) <= 2, box
tile.save(WORK / "origenes/simbolo-recorte-del-logo.png")


def centered_icon(size: int, symbol_size: int, bg=(0, 0, 0, 0)) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg)
    mark = tile.resize((symbol_size, symbol_size), Image.Resampling.LANCZOS)
    canvas.alpha_composite(mark, ((size - symbol_size) // 2, (size - symbol_size) // 2))
    return canvas


icon = centered_icon(512, 440)
icon.save(BRAND / "icon-512.png", optimize=True)
icon.resize((192, 192), Image.Resampling.LANCZOS).save(BRAND / "icon-192.png", optimize=True)
for size in (32, 48):
    icon.resize((size, size), Image.Resampling.LANCZOS).save(BRAND / f"favicon-{size}.png", optimize=True)
icon.save(BRAND / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

maskable = centered_icon(512, 350, (*GRAY, 255))
maskable.save(BRAND / "icon-512-maskable.png", optimize=True)
maskable.resize((192, 192), Image.Resampling.LANCZOS).save(BRAND / "icon-192-maskable.png", optimize=True)

apple = centered_icon(180, 152, (*GRAY, 255)).convert("RGB")
apple.save(BRAND / "apple-touch-icon.png", optimize=True)


def social(photo_name: str, size: tuple[int, int]) -> Image.Image:
    width, height = size
    photo = Image.open(ORIG / photo_name).convert("RGB")
    canvas = ImageOps.fit(photo, size, Image.Resampling.LANCZOS, centering=(0.5, 0.5)).convert("RGBA")
    draw = ImageDraw.Draw(canvas, "RGBA")
    margin = round(width * 0.055)
    panel_width = round(width * (0.63 if width > height else 0.86))
    panel_height = round(panel_width * horizontal.height / horizontal.width + 2 * margin * 0.45)
    panel_top = margin
    draw.rectangle((margin, panel_top, margin + panel_width, panel_top + panel_height), fill=(255, 255, 255, 248))
    logo_width = panel_width - round(margin * 0.9)
    logo = horizontal.resize((logo_width, round(logo_width * horizontal.height / horizontal.width)), Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo, (margin + (panel_width - logo.width) // 2, panel_top + (panel_height - logo.height) // 2))

    if height > width:
        footer_height, font_size = 520, 87
    elif height == width:
        footer_height, font_size = 390, 72
    else:
        footer_height, font_size = 234, 65
    draw.rectangle((0, height - footer_height, width, height), fill=(*GRAY, 238))
    draw.rectangle((margin, height - footer_height, margin + 115, height - footer_height + 10), fill=(*RED, 255))
    font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", font_size)
    lines = ("Centro multiespacio", "en Molina")
    text_y = height - footer_height + (80 if height > width else 56)
    for line in lines:
        assert draw.textbbox((0, 0), line, font=font)[2] <= width - 2 * margin
        draw.text((margin, text_y), line, font=font, fill="white", stroke_width=0)
        text_y += round(font_size * 1.2)
    return canvas.convert("RGB")


for filename, (photo_name, size) in PHOTOS.items():
    social(photo_name, size).save(BRAND / filename, optimize=True)

for source, target in (
    ("icon-512.png", "icon.png"),
    ("apple-touch-icon.png", "apple-icon.png"),
    ("og-image.png", "opengraph-image.png"),
):
    copy2(BRAND / source, APP / target)

assert Image.open(BRAND / "favicon.ico").ico.sizes() == {(16, 16), (32, 32), (48, 48)}
assert Image.open(BRAND / "icon-512.png").getpixel((0, 0))[3] == 0
assert Image.open(BRAND / "icon-192.png").getpixel((0, 0))[3] == 0
assert Image.open(BRAND / "apple-touch-icon.png").mode == "RGB"

report = [
    "# Assets de marca — Rancho Itahue",
    "",
    "Composición por código con logos y fotografías reales del cliente. Sin generación de imágenes ni texto por IA.",
    "Titular: «Centro multiespacio en Molina», verificado en `BRIEF-CLIENTE.md` y `OFERTA-REAL.md`.",
    "",
    "## Entregables",
    "",
]
for path in sorted(BRAND.iterdir()):
    with Image.open(path) as image:
        measure = f"{image.width}×{image.height}"
        if path.suffix == ".ico":
            measure += " (fotogramas 16×16, 32×32, 48×48)"
    report.append(f"- `{path.relative_to(ROOT).as_posix()}` — {measure}; {path.stat().st_size} bytes; código.")
for path in (APP / "icon.png", APP / "apple-icon.png", APP / "opengraph-image.png"):
    with Image.open(path) as image:
        measure = f"{image.width}×{image.height}"
    report.append(f"- `{path.relative_to(ROOT).as_posix()}` — {measure}; {path.stat().st_size} bytes; código (copia).")
report += [
    "",
    "## Procedencia y archivos tocados",
    "",
    "- Originales copiados en `origenes/`: logo cuadrado, logo horizontal PNG y SVG, logo vertical PNG y las tres portadas usadas.",
    "- `origenes/simbolo-recorte-del-logo.png`: recorte mecánico del logo cuadrado, sin redibujo.",
    "- `origenes/PROMPTS.md`: no se usaron prompts de generación.",
    "- Código: `tmp/assets-rancho-2026-09-29/generar.py`.",
    "- App: `app/demos/rancho-itahue/icon.png`, `apple-icon.png`, `opengraph-image.png`.",
    "- No se tocó `page.tsx` ni `content.ts`.",
    "",
    "## Verificación y límites",
    "",
    "- Dimensiones y bytes leídos de los archivos finales con Pillow; ICO verificado con tres fotogramas; transparencia de iconos normales y opacidad de Apple comprobadas.",
    "- No se verificó el render de Next, redes sociales ni despliegue; no se levantó servidor de desarrollo.",
    "- El push a `main` puede llevarse commits pendientes de la otra sesión; el historial remoto puede requerir integración si avanzó.",
]
(ORIG / "PROMPTS.md").write_text("# Prompts\n\nNo se usó generación de imágenes ni prompts. Todas las piezas se compusieron con Pillow a partir de originales del cliente.\n", encoding="utf-8")
(WORK / "INFORME.md").write_text("\n".join(report) + "\n", encoding="utf-8")
