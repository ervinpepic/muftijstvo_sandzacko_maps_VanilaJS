function setContent(location) {
  return (
    "<div class='infowindow'>" +
    "<h3 class='h3'>" +
    location.placeName +
    "</h3>" +
    "<p class='lead'>" +
    location.specInfo +
    "</p>" +
    location.img +
    "</div>"
  );
}