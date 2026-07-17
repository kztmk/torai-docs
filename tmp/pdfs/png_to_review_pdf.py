from pathlib import Path
from PIL import Image
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[2]

def convert(source: Path, destination: Path, width_pt: float) -> None:
    with Image.open(source) as image:
        width_px, height_px = image.size
    height_pt = width_pt * height_px / width_px
    pdf = canvas.Canvas(str(destination), pagesize=(width_pt, height_pt))
    pdf.setTitle("Torai Sales Letter Review")
    pdf.drawImage(str(source), 0, 0, width=width_pt, height=height_pt, preserveAspectRatio=True)
    pdf.showPage()
    pdf.save()

convert(ROOT / "output/sales-letter/sections/00-full-desktop.png", ROOT / "output/pdf/torai-sales-letter-desktop.pdf", 1080)
convert(ROOT / "output/sales-letter/sections/00-full-mobile.png", ROOT / "output/pdf/torai-sales-letter-mobile.pdf", 292.5)
