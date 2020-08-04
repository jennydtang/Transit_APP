var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseFloat(busLocations[0].LATITUDE),
      lng: parseFloat(busLocations[0].LONGITUDE),
    },
    zoom: 15,
    scrollwheel: false,
  });
  var contentString = "<h1>Bus #</h1>" + "<h2>" + busLocations + "</h2>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // Add Bus marker
  var image = { url: "busicon.png", scaledSize: new google.maps.Size(50, 50) };

  for (i = 0; i < busLocations.length; i++) {
    var marker = new google.maps.Marker({
      position: {
        lat: parseFloat(busLocations[i].LATITUDE),
        lng: parseFloat(busLocations[i].LONGITUDE),
      },
      map: map,
      icon: image,
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
