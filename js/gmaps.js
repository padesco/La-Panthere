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

  //Scroll to top button
  //Get the button
  let mybutton = document.getElementById("back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
  scrollFunction();
  };
  
  function scrollFunction() {
  if (
  document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20
  ) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
  }