const value = document.querySelector("#value");
const radius = document.querySelector("#radius");

value.textContent = radius.value;

var map = L.map("map").setView([29.652, -82.325], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([29.652, -82.325])
    .addTo(map)
    .bindPopup("University of Florida<br>Go Gators!")
    .openPopup();

var circle = L.circle(marker.getLatLng(), {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: radius.value * 1609.344,
}).addTo(map);

radius.addEventListener("input", (e) => {
    value.textContent = e.target.value;
    circle.setRadius(e.target.value * 1609.344);
});

map.on("click", function (e) {
    marker.setLatLng(e.latlng);
    circle.setLatLng(e.latlng);
});
