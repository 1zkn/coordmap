let urlCoord = window.location.search
if(urlCoord.includes("?coord=")){
    urlCoord = urlCoord.replace("?coord=", "")
}else{
    console.log("error")
}
const separatedCoord = urlCoord.split(',')
console.log(separatedCoord)
const mapCoord = {
    lat: separatedCoord[0],
    long: separatedCoord[1],
    zoom: 10
}
console.log(mapCoord)

const map = L.map('map').setView([mapCoord.lat, mapCoord.long], mapCoord.zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Coordmap.com api'
        }).addTo(map);
let marker = L.marker([mapCoord.lat, mapCoord.long]).addTo(map);
marker.bindPopup(`<p>latitudine: ${mapCoord.lat} <br>longitudine: ${mapCoord.long}</p>`).openPopup();
