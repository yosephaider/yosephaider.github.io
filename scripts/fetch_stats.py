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

items = data.get("items", [])
channel_ids = sorted({item["snippet"]["channelId"] for item in items})

channels = {}
if channel_ids:
    ch_params = urllib.parse.urlencode({
        "part": "snippet",
        "id": ",".join(channel_ids),
        "key": KEY,
    })
    with urllib.request.urlopen(f"https://www.googleapis.com/youtube/v3/channels?{ch_params}") as r:
        ch_data = json.load(r)
    for ch in ch_data.get("items", []):
        sn = ch["snippet"]
        channels[ch["id"]] = {
            "name": sn["title"],
            "avatar": sn["thumbnails"]["default"]["url"],
        }

stats = {}
for item in items:
    s = item.get("statistics", {})
    stats[item["id"]] = {
        "title": item["snippet"]["title"],
        "description": item["snippet"].get("description", ""),
        "published": item["snippet"]["publishedAt"],
        "views": s.get("viewCount"),
        "likes": s.get("likeCount"),
        "comments": s.get("commentCount"),
        "channel": channels.get(item["snippet"]["channelId"]),
    }

with open("labs/labs-stats.json", "w", encoding="utf-8") as f:
    json.dump(stats, f, ensure_ascii=False, indent=2)

print(f"Estadísticas guardadas: {len(stats)} de {len(ids)} videos")

