#!/usr/bin/env python3
import json, os, re, sys, urllib.parse, urllib.request

KEY = os.environ.get("YOUTUBE_API_KEY")
if not KEY:
    sys.exit("Falta la variable de entorno YOUTUBE_API_KEY")

with open("labs/labs-data.js", encoding="utf-8") as f:
    ids = sorted(set(re.findall(r'youtube:\s*"([^"]+)"', f.read())))

if not ids:
    sys.exit("No se encontraron IDs de YouTube en labs/labs-data.js")

params = urllib.parse.urlencode({
    "part": "snippet,statistics",
    "id": ",".join(ids),
    "key": KEY,
})
with urllib.request.urlopen(f"https://www.googleapis.com/youtube/v3/videos?{params}") as r:
    data = json.load(r)

stats = {}
for item in data.get("items", []):
    s = item.get("statistics", {})
    stats[item["id"]] = {
        "title": item["snippet"]["title"],
        "published": item["snippet"]["publishedAt"],
        "views": s.get("viewCount"),
        "likes": s.get("likeCount"),
        "comments": s.get("commentCount"),
    }

with open("labs/labs-stats.json", "w", encoding="utf-8") as f:
    json.dump(stats, f, ensure_ascii=False, indent=2)

print(f"Estadísticas guardadas: {len(stats)} de {len(ids)} videos")

