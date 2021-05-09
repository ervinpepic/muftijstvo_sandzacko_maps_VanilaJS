function initMap() {
    var map = new google.maps.Map(document.getElementById("map-canvas"), {
      zoom: 9,
      center: new google.maps.LatLng(43.0806892, 19.5989368),
      mapId: "YourMapKey",
    });
  
    var infowindow = new google.maps.InfoWindow();
    var marker_icon = {
      url: "static/images/marker_main.svg",
      scaledSize: new google.maps.Size(50, 50),
      labelOrigin: new google.maps.Point(20, -13),
    };
  
    function zoomChange(polygonName) {
      google.maps.event.addListener(map, "zoom_changed", function () {
        if (map.getZoom() > 13) polygonName.setMap(null);
        else polygonName.setMap(map);
      });
    }
  
    var markers = marker_locations.map(function (location) {
      var marker = new google.maps.Marker({
        position: location.LatLng[0],
        icon: marker_icon,
        label: {
          text: location.placeName,
          fontSize: "12pt",
          color: "#000000",
          className: "marker-label-default",
        },
        draggable: true,
        animation: google.maps.Animation.DROP,
      });
  
      //event listener for info windows on   markers, zooming in and out when click X on info window
      google.maps.event.addListener(infowindow, "closeclick", function () {
        map.panTo(this.getPosition());
        map.setZoom(map.getZoom() - 0.5);
      });
      //events lsitener for marker when click on it
      google.maps.event.addListener(marker, "click", function (event) {
        infowindow.setContent(setContent(location));
        infowindow.open(map, marker);
        // map.setCenter(this.getPosition());
        map.panTo(marker.getPosition());
      });
      google.maps.event.addListener(marker, "mouseover", function (event) {
        marker.setIcon({
          url: marker_icon.url,
          scaledSize: new google.maps.Size(100, 100),
          labelOrigin: new google.maps.Point(50, -22),
        });
        function markerLabelHover(label) {
          label = marker.getLabel();
          label.color = "#FFFFFF";
          label.fontSize = "20pt";
          label.className = "marker-label-mouseover";
          return label;
        }
        marker.setLabel(markerLabelHover());
      });
      google.maps.event.addListener(marker, "mouseout", function (event) {
        marker.setIcon({
          url: marker_icon.url,
          scaledSize: marker_icon.scaledSize,
          labelOrigin: new google.maps.Point(20, -13),
        });
        function markerLabelOut(label) {
          label = marker.getLabel();
          label.color = "#000";
          label.fontSize = "12pt";
          label.className = "marker-label-default";
          return label;
        }
        marker.setLabel(markerLabelOut());
      });
      google.maps.event.addListener(map, "click", function () {
        infowindow.close();
        marker.open = false;
        map.setZoom(map.getZoom() - 0.5);
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
      google.maps.event.addListener(marker, "click", function () {
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
      strokeWeight: 1.5,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    pljevljaPolygon.setMap(map);
    zoomChange(pljevljaPolygon);
  
    google.maps.event.addDomListener(window, "load", initMap);
  }
  