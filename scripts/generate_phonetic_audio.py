from __future__ import annotations

import asyncio
from pathlib import Path

import edge_tts

VOICE = "en-US-AriaNeural"
RATE = "-15%"

AUDIO_ITEMS = [
    ("i-long", "see"),
    ("i-short", "ship"),
    ("e", "bed"),
    ("ae", "cat"),
    ("uh", "cup"),
    ("a-long", "car"),
    ("o-short", "hot"),
    ("aw-long", "door"),
    ("u-short", "book"),
    ("u-long", "blue"),
    ("er-long", "bird"),
    ("schwa", "about"),
    ("ay", "day"),
    ("eye", "my"),
    ("oy", "boy"),
    ("oh", "go"),
    ("ow", "now"),
    ("ear", "ear"),
    ("air", "hair"),
    ("oor", "tour"),
    ("p", "pen"),
    ("b", "bag"),
    ("t", "ten"),
    ("d", "dog"),
    ("k", "cat"),
    ("g", "go"),
    ("f", "fish"),
    ("v", "van"),
    ("th-unvoiced", "thin"),
    ("th-voiced", "this"),
    ("s", "sun"),
    ("z", "zoo"),
    ("sh", "ship"),
    ("zh", "vision"),
    ("h", "hat"),
    ("m", "map"),
    ("n", "nose"),
    ("ng", "sing"),
    ("l", "leg"),
    ("r", "red"),
    ("j", "yes"),
    ("w", "wet"),
    ("ch", "chair"),
    ("j-sound", "jump"),
]


async def generate_file(output_dir: Path, slug: str, text: str) -> None:
    output_path = output_dir / f"{slug}.mp3"
    communicate = edge_tts.Communicate(text, voice=VOICE, rate=RATE)
    await communicate.save(output_path)
    print(f"generated {output_path.name}")


async def main() -> None:
    output_dir = Path(__file__).resolve().parents[1] / "audio" / "phonetic"
    output_dir.mkdir(parents=True, exist_ok=True)

    for slug, text in AUDIO_ITEMS:
        await generate_file(output_dir, slug, text)


if __name__ == "__main__":
    asyncio.run(main())
