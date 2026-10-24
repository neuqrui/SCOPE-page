# SCOPE project homepage

Bilingual academic project page for **SCOPE: Selective Critical-Step On-Policy Self-Distillation for Agentic Reinforcement Learning**.

Published site: https://neuqrui.github.io/SCOPE-page/

This version preserves anonymous author information. The page includes the paper, full experiment tables for three backbones, an interactive method walkthrough, and ALFWorld / WebShop trajectory replays. Each replay gallery contains four successful and two failed recorded episodes. ALFWorld scenes are text-based 3D reconstructions; WebShop illustrations are schematic.

## Preview locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Use an HTTP server rather than opening index.html directly so JavaScript modules, scene assets, and JSON data load correctly. No build step, backend, external fonts, analytics, or live agent service is required.

## Maintain

- `config.js`: paper URL, author anonymity, and optional public resource links.
- `content.js` and `index.html`: bilingual copy and default English content.
- `data.js`: complete main experimental results.
- `method/`: interactive method walkthrough.
- `replay/`: ALFWorld playback, scene configuration, and curated episode data.
- `webshop/`: WebShop playback and curated episode data.
- `assets/`: paper figures, local models, textures, illustrations, and vendored Three.js.

Keep the directory structure intact. All runtime assets use relative URLs, supporting the `/SCOPE-page/` project path. Raw source trajectory HTML, authoring scripts, and local caches are excluded from this publication checkout. Research figures and the PDF come from the provided SCOPE paper.

## Deployment

GitHub Pages publishes the `main` branch at the repository root. `.nojekyll` serves these files as a static site without Jekyll processing. Changes pushed to `main` trigger a new Pages build after Pages is enabled in repository settings.

## Asset credits

Furniture assets are CC0 from Poly Haven; source links are in `assets/replay/CREDITS.md` and `asset-manifest.json`. Three.js is distributed under MIT with its original license in `assets/vendor/three/LICENSE`. WebShop illustration details are in `assets/webshop/CREDITS.md`.
