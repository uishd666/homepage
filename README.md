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
- **Globe:** a local rotating Canvas globe with a Shanghai marker; drag to rotate, click to reveal a greeting. Animation pauses outside the viewport or in a background tab. This is a decorative fallback, not a visitor tracker. It is hidden once the configured visitor widget renders.

## Visitor statistics

The owner-provided MapMyVisitors Globe Counter is configured in the `#visitor-widget` container in `index.html`. Its script uses HTTPS and loads asynchronously. The local globe remains available while loading or if the service is blocked, and hides when the real `.mmvst_outer` widget is inserted. To change accounts, replace the provider-issued snippet inside this container. Remove it to return to the local globe.

No visitor counts or locations are simulated. Counts begin when tracking is installed, and IP-based locations approximate network exit locations. The provider receives visitor network information when its script loads. The local avatar, fireworks, and globe do not send visitor data anywhere.

## Geographic data

`statics/globe-land.js` contains 1,300 sampled land points from Natural Earth 1:110m land polygons, which are public domain:
https://www.naturalearthdata.com/about/terms-of-use/

To regenerate after downloading `ne_110m_land.geojson` from the Natural Earth repository:

```sh
conda run -n py python scripts/build-globe.py /path/to/ne_110m_land.geojson
```
