


let map = L.map('map').setView([19.450048, -70.701911],6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 4);
});

//agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution:'©OpenStreetMap, ©CartoDB',subdomains: 'abcd', maxZoom: 24});


//agregar plugin minimap
var minimap = new L.control.minimap(carto_light,
{
    toggleDisplay: true,
    minimized: false,
    position: "bottomleft"
}).addTo(map);


//agregar escala
new L.control.scale({imperial: false}).addTo(map);

