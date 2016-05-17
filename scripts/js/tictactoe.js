var blockIdentifier = ".block";
var xGoes = true;

$(blockIdentifier).click(function(event) {
  console.log(event);

  if (event.currentTarget.innerHTML.trim() === "") {
    if (xGoes) {
      event.currentTarget.appendChild(getX());
      xGoes = !xGoes;
    } else {
      event.currentTarget.appendChild(getO());
    }
  }

});

function getX() {
  var x = document.createElement("div");
  x.className = "marker x";
  x.innerHTML = "<div class=\"left\"></div><div class=\"right\"></div>";
  return x;
}

function getO() {
  var o = document.createElement("div");
  o.className = "marker o";
  o.innerHTML = "<div class=\"circle\"></div>";
  return o;
}
