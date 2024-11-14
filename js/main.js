import launchOpenStreetM from "./providers/osm.js";

console.log(window.location.pathname);
if (window.location.pathname == "/") {
  window.location.href = "/docs.html";
}

const getUrlPath = window.location.pathname;
const splitedPath = getUrlPath.split("/").slice(1);
console.log(splitedPath);

if (splitedPath[1]) {
  const coords = splitedPath[1].split(",");
  if (!isNaN(coords[0]) && !isNaN(coords[1])) {
    const coordsValue = { lat: coords[0], long: coords[1] };
    launchPage(coordsValue, getProviderFromIdentifier(splitedPath[0]));
  }
}


function getProviderFromIdentifier(identifier) {
  const providers = {
    o: "openstreetmap",
    g: "google",
  };
  return providers[identifier];
}

function launchPage(coords, provider){
  const mapCoord = {
    lat: coords.lat,
    long: coords.long,
    zoom: 10,
  };
  switch (provider) {
    case 'openstreetmap':
      launchOpenStreetM(mapCoord);
      break;
  
    default:
      break;
  }
}