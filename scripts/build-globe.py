"""Sample public-domain Natural Earth land polygons into a compact dot map.
Usage: conda run -n py python scripts/build-globe.py /path/to/ne_110m_land.geojson
Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson
"""
import json
import math
import sys
from pathlib import Path


def inside_ring(lon, lat, ring):
    inside = False
    previous = ring[-1]
    for current in ring:
        x, y = current[:2]
        px, py = previous[:2]
        if (y > lat) != (py > lat) and lon < (px - x) * (lat - y) / (py - y) + x:
            inside = not inside
        previous = current
    return inside


def main():
    data = json.loads(Path(sys.argv[1]).read_text())
    polygons = []
    for feature in data['features']:
        geometry = feature['geometry']
        for polygon in ([geometry['coordinates']] if geometry['type'] == 'Polygon' else geometry['coordinates']):
            outer = polygon[0]
            bounds = (min(p[0] for p in outer), min(p[1] for p in outer), max(p[0] for p in outer), max(p[1] for p in outer))
            polygons.append((bounds, polygon))
    points = []
    for latitude in range(-78, 85, 3):
        step = 3 / max(math.cos(math.radians(latitude)), 0.2)
        longitude = -180.0
        while longitude < 180:
            for (left, bottom, right, top), rings in polygons:
                if left <= longitude <= right and bottom <= latitude <= top and inside_ring(longitude, latitude, rings[0]) and not any(inside_ring(longitude, latitude, r) for r in rings[1:]):
                    points.append([latitude, round(longitude, 2)])
                    break
            longitude += step
    target = Path(__file__).resolve().parents[1] / 'statics' / 'globe-land.js'
    target.write_text('// Public-domain Natural Earth 1:110m land, sampled by scripts/build-globe.py.\nwindow.GLOBE_LAND = ' + json.dumps(points, separators=(',', ':')) + ';\n')
    print(f'Generated {len(points)} land points')


if __name__ == '__main__':
    main()
