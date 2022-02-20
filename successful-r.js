let test = document.getElementById("test");

test.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "purple";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
