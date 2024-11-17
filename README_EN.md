# Coordmap

A simple map embedding service that allows you to embed maps using an intuitive URL structure. Originally hosted at coordmap.com, now at [map.zkn.app](https://map.zkn.app) as part of ZKN Lab projects.

## How it Works

Simply use this URL structure:
```
map.zkn.app/o/latitude,longitude
```

Example:
```
map.zkn.app/o/41.9028,12.4964
```

For embedding in websites:
```html
<iframe src="https://map.zkn.app/o/41.9028,12.4964" width="600" height="450" allowfullscreen loading="lazy"></iframe>
```

## Tech Stack

- **Frontend**: Plain HTML/CSS with Tailwind CSS for styling
- **Maps**: OpenStreetMap with Leaflet.js for rendering
- **Language Selection**: Vanilla JavaScript for language switching (EN/IT)

## URL Structure

- `/o/lat,lon`: OpenStreetMap view (`o` stands for OpenStreetMap)
- Possibility to add markers after coordinates (see examples)

## Features

- No API key required
- Instant deployment
- Lightweight and fast
- Mobile responsive

## Part of ZKN-Lab

This project is now part of ZKN-Lab, a personal laboratory for web experiments and tools. While the original coordmap.com domain is no longer active, the service continues to operate at map.zkn.app with the same functionality.

## Alternatives

If you're looking for more advanced mapping solutions, consider:
- Using Leaflet.js directly
- OpenStreetMap's official embed
- Google Maps embed (requires API key)
- MapTiler
- HERE Maps

## License

MIT License

## Contact

- Twitter: [@hi1zkn](https://twitter.com/hi1zkn)
- Email: kevin@zkn.app