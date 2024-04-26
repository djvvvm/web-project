var prevScrollpos = window.pageYOffset;
var threshold = 35; // Adjust this value based on how far you want to scroll before the header appears or disappears

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && prevScrollpos - currentScrollPos > threshold) {
    document.getElementById("header").style.top = "0";
  } else if (currentScrollPos > prevScrollpos && currentScrollPos - prevScrollpos > threshold) {
    document.getElementById("header").style.top = "-200px"; // Adjust the value here to hide the header completely
  }

  // Ensure the header is always positioned at the top of the viewport
  if (currentScrollPos === 0) {
    document.getElementById("header").style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}
