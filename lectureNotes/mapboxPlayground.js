const mapboxToken = 'pk.eyJ1IjoicmVsb3J0MzUiLCJhIjoiY2twcG9kdmMwMjlzMzMxbnk2a3IxbTM3eiJ9.QXAAIgqF4AJgT2TAURwGsw';
 mapboxgl.accessToken = mapboxToken;

 var map = new mapboxgl.Map( {
	 container: 'map',
 	style: 'mapbox://styles/mapbox/satellite-streets-v11',
	 center: [-97.1081, 32.7357],
	 zoom: 12
 });

 let marker = setMarker([-135.7460400, 35.4957600]);
 addMapEvent(marker);
 let geocoder = setGeocoder();

addGeocoderToMap(geocoder);
// console.log(addGeocoderEvent(geocoder));
// setPopup("This is my popup! Woo!");

 function setGeocoder(){
 	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	})
 }
function addGeocoderToMap(geocoder){
 	map.addControl(geocoder);
}

function addGeocoderEvent(geocoder){
 	geocoder.on("result", function(event){
 		marker.setLngLat(event.result);
		console.log(event);
		 return event.result.place_name;
	})

}
// setPopup(addGeocoderEvent(geocoder));
 function setMarker(point) {
 	return new mapboxgl.Marker().setLngLat(point).addTo(map)
 }
function addMapEvent(marker) {
 	map.on('click', function (event) {
 		marker.setLngLat(event.lngLat).addTo(map);
	})
}

function setPopup(textDetails){
 	let popup = new mapboxgl.Popup()
		.setHTML(`<p>${textDetails}</p>`)
		.addTo(map);

 	marker.setPopup(popup);
}