function initMap() {
  // Coordonnées du centre de la carte (par exemple, Paris)
  var myLatLng = { lat: 48.8504151, lng: 2.3850686 };

  // Options de la carte
  var mapOptions = {
    center: myLatLng,
    zoom: 12, // Niveau de zoom
  };

  // Création de la carte
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Marqueur sur la carte (par exemple, position du club)
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Paris",
  });
}

window.addEventListener("load", initMap);

function openGoogleMapsDirections(cityName) {
    // Remplacer les espaces par des '+' pour l'URL
    var formattedCityName = cityName.replace(/\s/g, '+');
  
    // Construire l'URL avec le nom de la ville
    var mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + formattedCityName;
  
    // Ouvrir la page Google Maps dans une nouvelle fenêtre
    window.open(mapsUrl, "_blank");
  }
