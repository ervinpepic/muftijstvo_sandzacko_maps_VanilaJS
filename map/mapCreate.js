function initMap() {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 9,
    center: new google.maps.LatLng(43.0806892,19.5989368),
    mapId: "5bfe3f5c26ab0efb",
  });
  
  var infowindow = new google.maps.InfoWindow();
  //add markers to the map
  function zoomChange(polygonName) {
    google.maps.event.addListener(map, "zoom_changed", function() {
      if (map.getZoom() > 13) polygonName.setMap(null);
      else polygonName.setMap(map);
    });
  }

  var markers = marker_locations.map(function (location) {
    var marker = new google.maps.Marker({
      position: location.LatLng[0],
      label: {
        text: location.placeName,
        color: "white",
        className: "marker-label"
      },
      icon: {
        url: "static/images/marker_main.svg",
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(50, 50),
        labelOrigin: new google.maps.Point(-1, -1)
      },
      draggable: true,
      animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(infowindow, "closeclick", function () {
      map.panTo(this.getPosition());
      map.setZoom(map.getZoom()- 0.5);
    });
    
    //event listener for markers
    google.maps.event.addListener(marker, "click", function (event) {
      infowindow.setContent(setContent(location));
      infowindow.open(map, marker);
      map.setCenter(this.getPosition());
    });
    google.maps.event.addListener(marker, "mouseover", function (event) {
      marker.setIcon({
        url: "static/images/marker_main.svg",
        scaledSize: new google.maps.Size(100, 100),
      });
      var label = this.getLabel();
      label.color = "blue";
      this.setLabel(label);
    });
    google.maps.event.addListener(marker, "mouseout", function (event) {
      marker.setIcon({
        url: "static/images/marker_main.svg",
        scaledSize: new google.maps.Size(50, 50),
      });
      var label = this.getLabel();
      label.color = "black";
      this.setLabel(label);
    });
    google.maps.event.addListener(map, "click", function () {
      infowindow.close();
      marker.open = false;
      map.setZoom(map.getZoom()- 0.5);
    });

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
        }, 1000); // current maps duration of one bounce (v3.13)
      }
    }
    google.maps.event.addListener(marker, "click", function (event) {
      toggleBounce();
    });

    return marker;
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  var noviPazarPolygon = new google.maps.Polygon({
    paths: noviPazarDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  noviPazarPolygon.setMap(map);
  zoomChange(noviPazarPolygon);

  var tutinPolygon = new google.maps.Polygon({
    paths: tutinDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  tutinPolygon.setMap(map);
  zoomChange(tutinPolygon);


  var sjenicaPolygon = new google.maps.Polygon({
    paths: sjenicaDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  sjenicaPolygon.setMap(map);
  zoomChange(sjenicaPolygon);

  var prijepoljePolygon = new google.maps.Polygon({
    paths: prijepoljeDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  prijepoljePolygon.setMap(map);
  zoomChange(prijepoljePolygon);

  var novaVarosPolygon = new google.maps.Polygon({
    paths: novaVarosDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  novaVarosPolygon.setMap(map);
  zoomChange(novaVarosPolygon);

  var pribojPolygon = new google.maps.Polygon({
    paths: pribojDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  pribojPolygon.setMap(map);
  zoomChange(pribojPolygon);

  var rozajePolygon = new google.maps.Polygon({
    paths: rozajeDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  rozajePolygon.setMap(map);
  zoomChange(rozajePolygon);

  var beranePolygon = new google.maps.Polygon({
    paths: beraneDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  beranePolygon.setMap(map);
  zoomChange(beranePolygon);

  var andrijevicaPolygon = new google.maps.Polygon({
    paths: andrijevicaDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  andrijevicaPolygon.setMap(map);
  zoomChange(andrijevicaPolygon);

  var bijeloPoljePolygon = new google.maps.Polygon({
    paths: bijeloPoljeDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bijeloPoljePolygon.setMap(map);
  zoomChange(bijeloPoljePolygon);

  var plavPolygon = new google.maps.Polygon({
    paths: plavDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  plavPolygon.setMap(map);
  zoomChange(plavPolygon);

  var pljevljaPolygon = new google.maps.Polygon({
    paths: pljevljaDelimiter,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  pljevljaPolygon.setMap(map);
  zoomChange(pljevljaPolygon);

  
  google.maps.event.addDomListener(window, "load", initMap);
}