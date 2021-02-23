function setContent(location) {
  return (
    "<div class='infowindow'>" +
    "<h3>" +
    location.placeName +
    "</h3>" +
    "<p>" +
    location.specInfo +
    "</p>" +
    location.img +
    "</div>"
  );
}