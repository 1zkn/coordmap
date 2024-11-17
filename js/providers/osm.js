//
//  OpenStreetMap
//


//Funzione per inizializzare la mappa
export default function launchMap(coords) {
  addElements();
  const mapCoord = {
    lat: coords.lat,
    long: coords.long,
    zoom: 10,
  };
  const map = initializeMap(mapCoord);
}

function addElements() {
  document.title = "map.zkn.app CoordMap - OpenStreetMap";
}

function initializeMap(config = mapCoord) {
  const map = L.map("map").setView([config.lat, config.long], config.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | map.zkn.app api',
  }).addTo(map);
  let marker = L.marker([config.lat, config.long]).addTo(map);
  marker
    .bindPopup(
      `<p>latitude: ${config.lat} <br>longitude: ${config.long}</p>`
    )
    .openPopup();

  return map;
}
