/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByName("nav").style.top = "0";
  } else {
    document.getElementsByName("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}