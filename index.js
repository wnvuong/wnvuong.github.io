
function openNavbar(navbarId) {
  'use strict';
  var navbar = document.getElementById(navbarId);
  if (navbar) {
    if (navbar.style.maxHeight == "0px") {
      navbar.style.maxHeight = "";

      navbar.style.borderTop = "1px solid #e7e7e7";
    } else {
      navbar.style.maxHeight = "0px";
      setTimeout(function() {
        navbar.style.borderTop = "none";
      }, 600);
    }
    // var classes = navbar.className.split(' ');
    // var collapseClassIndex = classes.indexOf('collapse');
    // if (collapseClassIndex > -1) {
    //   classes.splice(collapseClassIndex, 1);
    //   navbar.className = classes.join(' ');
    // } else {
    //   classes.push('collapse');
    //   navbar.className = classes.join(' ');
    // }
  }
}
