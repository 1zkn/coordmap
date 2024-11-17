# Coordmap

Un servizio semplice per l'embedding di mappe che permette di incorporare mappe usando una struttura URL intuitiva. Originariamente ospitato su coordmap.com, ora su [map.zkn.app](https://map.zkn.app) come parte dei progetti ZKN Lab.

## Come Funziona

Usa semplicemente questa struttura URL:
```
map.zkn.app/o/latitudine,longitudine
```
Esempio:
```
map.zkn.app/o/41.9028,12.4964
```
Per incorporare in siti web:
```html
<iframe src="https://map.zkn.app/o/41.9028,12.4964" width="600" height="450" allowfullscreen loading="lazy"></iframe>
```

## Stack Tecnologico

- **Frontend**: HTML/CSS puro con Tailwind CSS per lo stile
- **Mappe**: OpenStreetMap con Leaflet.js per il rendering
- **Selezione Lingua**: JavaScript vanilla per il cambio lingua (EN/IT)

## Struttura URL

- `/o/lat,lon`: Vista OpenStreetMap (`o` sta per OpenStreetMap)
- Possibilità di aggiungere marker dopo le coordinate (vedi esempi)

## Caratteristiche

- Nessuna chiave API richiesta
- Implementazione istantanea
- Leggero e veloce
- Responsive su mobile

## Parte di ZKN-Lab

Questo progetto è ora parte di ZKN-Lab, un laboratorio personale per esperimenti e strumenti web. Mentre il dominio originale coordmap.com non è più attivo, il servizio continua a operare su map.zkn.app con le stesse funzionalità.

## Alternative
Se stai cercando soluzioni di mappatura più avanzate, considera:
- Usare Leaflet.js direttamente
- L'embed ufficiale di OpenStreetMap
- Google Maps embed (richiede chiave API)
- MapTiler
- HERE Maps

## Licenza
Licenza MIT

## Contatti

- Twitter: [@hi1zkn](https://twitter.com/hi1zkn)
- Email: kevin@zkn.app