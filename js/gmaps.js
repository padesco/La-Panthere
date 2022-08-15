// Gmaps
// Initialize and add the map
function initMap() {
    // The location of laPanthere
    const laPanthere = { lat: 45.76968807047258, lng: 4.830674599999999 };
    // The map, centered at laPanthere
  
    const map = new google.maps.Map(document.getElementById("map"),  {
      streetViewControl: false,
      zoom: 15,
      center: laPanthere,
    });
    // The marker, positioned at laPanthere
    const marker = new google.maps.Marker({
      position: laPanthere,
      map: map,
    });
  }

  window.initMap = initMap;
