// contact map
const contactMap = L.map("mapid", {
	center: L.latLng(51.505, 20),
	zoom: 2,
});
L.tileLayer(
	"https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=cLeWbOzWKlkaf15XVgd4",
	{
		attribution:
			'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	}
).addTo(contactMap);

const marker = L.marker([52, 21]).addTo(contactMap);
