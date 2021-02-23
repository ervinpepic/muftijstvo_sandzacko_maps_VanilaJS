// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let labelIndex = 12;

function initMap() {
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    { name: "Styled Map" }
  );

  const mesihat = { lat: 43.13774819675678, lng: 20.518276265162196 };
  const mapa = new google.maps.Map(document.getElementById("map"), {
    // mapId: '5bfe3f5c26ab0efb',
    center: mesihat,
    zoom: 20,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Muftijstvo Sandzacko</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Muftijstvo</b>, Sandzacko <b>Novi pazar</b>, je " +
    "</p>" +
    '<p>Attribution: Muftijstvo, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited januar 10, 2021).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // const image = "https://hassped.com/muftijstvosandzacko/wp-content/uploads/2020/11/Asset-3.svg";
  var image = {
    url:
      "https://hassped.com/muftijstvosandzacko/wp-content/uploads/2020/11/Asset-3.svg",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25),
  };

  const marker = new google.maps.Marker({
    position: mesihat,
    map: mapa,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: "Zgrada Mesihata i Muftijstva Sandzackog",
    icon: image,
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

// <!-- src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTa06204yEqHVhp3jOga_A8PbnGb8Bow4&map_ids=5bfe3f5c26ab0efb&callback=initMap" -->
// <!-- src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTa06204yEqHVhp3jOga_A8PbnGb8Bow4&callback=initMap" -->

let map;

function initMap() {
  mesihat = { lat: 43.13774819675678, lng: 20.518276265162196 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: mesihat,
    zoom: 10,
  });

  let markerMesihat = new google.maps.Marker({
    position: mesihat,
    map: map,
    title: "Mesihat IZ u Srbiji",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  });

  google.maps.event.addListener(markerMesihat, "click", function () {
    map.panTo(this.getPosition());
    map.setZoom(14);
  });
}

let responsiveZoom = window.innerWidth < 768 ? 6.75 : 7.75;

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) responsiveZoom = 6.75;
  else if (window.innerWidth > 768) responsiveZoom = 7.75;
  map.setZoom(responsiveZoom);
});

function addMarker() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString =
      '<div id="content"><h1>' +
      markersOnMap[i].placeName +
      "</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>";

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InforObj[0] = infowindow;
    });
    // marker.addListener('mouseover', function () {
    //     closeOtherInfo();
    //     infowindow.open(marker.get('map'), marker);
    //     InforObj[0] = infowindow;
    // });
    // marker.addListener('mouseout', function () {
    //     closeOtherInfo();
    //     infowindow.close();
    //     InforObj[0] = infowindow;
    // });
  }
}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: centerCords,
  });
  addMarker();
}

let map;
let InforObj = [];
let centerCords = {
  lat: 43.13774819675678,
  lng: 20.518276265162196,
};

function addMarker() {
  for (let i = 0; i < markersOnMap.length; i++) {
    let contentString = markersOnMap[i].specInfo + markersOnMap[i].img;
    const marker = markersOnMap.map((location) => {
      return new google.maps.Marker({
        position: location.LatLng[0],
        map: map,
      });

      // icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });

    google.maps.event.addListener(marker, "click", function (closeOtherInfo) {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InforObj[0] = infowindow;
    });
  }
}
function closeOtherInfo() {
  if (InforObj.length > 0) {
    // detach the info window from the marker undocumented in google API
    InforObj[0].set("marker", null);
    // close it
    InforObj[0].close();
    // blank the array
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerCords,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  addMarker();
  new MarkerClusterer(map, addMarker(), {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
function initMap() {
  const infowindow = location_s.map((info) => {
    return new google.maps.InfoWindow({
      content: info.specInfo,
    });
  });
  const markers = location_s.map((location, i) => {
    return new google.maps.Marker({
      position: location.LatLng[0],
      label: labele[i % labele.length],
    });
  });

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: 43.14337766369762,
      lng: 20.51931346940336,
    },
  });
  // new MarkerClusterer(map, markers, {
  //   imagePath:
  //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  // });
  console.log(infowindow);
  console.log(markers);
}

var map;
var InforObj = [];
var centerCords = {
  lat: 43.13774819675678,
  lng: 20.518276265162196,
};

// window.onload = function () {
//   initMap();
// };

// marker.addListener('mouseover', function () {
//     closeOtherInfo();
//     infowindow.open(marker.get('map'), marker);
//     InforObj[0] = infowindow;
// });
// marker.addListener('mouseout', function () {
//     closeOtherInfo();
//     infowindow.close();
//     InforObj[0] = infowindow;
// });

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: centerCords,
  });
  for (var i = 0; i < location_s.length; i++) {
    var contentString =
      "<h3>" +
      location_s[i].placeName +
      "</h3>" +
      "<p>" +
      location_s[i].specInfo +
      "</p>";

    const marker = new google.maps.Marker({
      position: location_s[i].LatLng[0],
      map: map,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InforObj[0] = infowindow;
    });
  }
  // new MarkerClusterer(map, marker, {
  //   imagePath:
  //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  // });
}
const infowindow = location_s.map((info) => {
  return new google.maps.InfoWindow({
    content: info.specInfo,
  });
});
const markers = location_s.map((location, i) => {
  return new google.maps.Marker({
    position: location.LatLng[0],
    label: labele[i % labele.length],
  });
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: -15.7942357,
      lng: -47.8821945,
    },
  });
  var infoWin = new google.maps.InfoWindow();
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    var marker = new google.maps.Marker({
      position: location,
    });
    google.maps.event.addListener(marker, "click", function (evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    });
    return marker;
  });

  // markerCluster.setMarkers(markers);
  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
var locations = [
  {
    lat: -19.9286,
    lng: -43.93888,
    info: "marker 1",
  },
  {
    lat: -19.85758,
    lng: -43.9668,
    info: "marker 2",
  },
  {
    lat: -18.24587,
    lng: -43.59613,
    info: "marker 3",
  },
  {
    lat: -20.46427,
    lng: -45.42629,
    info: "marker 4",
  },
  {
    lat: -20.37817,
    lng: -43.41641,
    info: "marker 5",
  },
  {
    lat: -20.09749,
    lng: -43.48831,
    info: "marker 6",
  },
  {
    lat: -21.13594,
    lng: -44.26132,
    info: "marker 7",
  },
];

google.maps.event.addDomListener(window, "load", initMap);
google.maps.event.addListener(marker, "click", function () {
  if (!marker.open) {
    infowindow.open(map, marker);
    marker.open = true;
  } else {
    infowindow.close();
    map.setZoom(15);
    marker.open = false;
  }
  google.maps.event.addListener(map, "click", function () {
    infowindow.close();
    map.setZoom(15);
    marker.open = false;
  });
});