# Pengxiang Cai's academic homepage

A standalone HTML/CSS/JavaScript site hosted on GitHub Pages. No build step or runtime dependencies.

## Preview

```sh
conda run -n py python -m http.server 8000
```

Open http://localhost:8000. Edit academic content directly in `index.html`.

## Small interactions

- **Avatar:** hover to slide the front image aside; click or use Enter/Space to toggle. Escape closes it. Replace `statics/avatar-alternate.png` with the actual second portrait (and update its `src` and `alt` in `index.html` when the filename changes).
- **Fireworks:** click the subtle arrow in the footer. It launches three short bursts without blocking links. Repeated clicks cannot start overlapping animations. Reduced-motion preferences show stationary stars instead.
- **Globe:** a local rotating Canvas globe with a Shanghai marker; drag to rotate, click to reveal a greeting. Animation pauses outside the viewport or in a background tab. This decorative globe marks Shanghai only and does not track visitors or their locations.

The avatar, fireworks, and globe run locally without third-party scripts or visitor tracking.

## Geographic data

`statics/globe-land.js` contains 1,300 sampled land points from Natural Earth 1:110m land polygons, which are public domain:
https://www.naturalearthdata.com/about/terms-of-use/

To regenerate after downloading `ne_110m_land.geojson` from the Natural Earth repository:

```sh
conda run -n py python scripts/build-globe.py /path/to/ne_110m_land.geojson
```
