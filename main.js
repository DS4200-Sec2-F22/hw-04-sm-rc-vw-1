// gets all circles
var circles = document.getElementsByTagName("circle");

// goes through circles and adds event handler to each
for (var i = 0; i < circles.length; i++) {
    document.getElementsByTagName("circle")[i].addEventListener("click", function clicker() {
    // adding border
    this.classList.toggle("borderAdd");
    
    // displaying coordinate
    var x = (this.getAttribute('cx')) / 40;
    var y = ((this.getAttribute('cy')) - 375) / -40;
    var pointdisplay = document.getElementById('pointClick');
    var pointtext = document.getElementById('point');
    pointtext.innerHTML = ' (' + x + ', ' + y + ')';
    pointdisplay.style.display = 'block';
    pointtext.style.display = 'block';
  });
}

// get new point
function getPoint() {

    var x_coord = document.getElementById("x_coord");
    var y_coord = document.getElementById("y_coord");

    x_coord = x_coord.options[x_coord.selectedIndex].text;
    y_coord = y_coord.options[y_coord.selectedIndex].text;

    var cx = x_coord * 40;
    var cy = 375 - (y_coord * 40);

    var newP = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newP.setAttribute('cx', cx);
    newP.setAttribute('cy', cy);
    newP.setAttribute('r', 10);
    newP.addEventListener("click", function clicker() {
    // adding border
    this.classList.toggle("borderAdd");
    
    // displaying coordinate
    var x = (this.getAttribute('cx')) / 40;
    var y = ((this.getAttribute('cy')) - 375) / -40;
    var pointdisplay = document.getElementById('pointClick');
    var pointtext = document.getElementById('point');
    pointtext.innerHTML = ' (' + x + ', ' + y + ')';
    pointdisplay.style.display = 'block';
    pointtext.style.display = 'block';
  });

    var svg = document.getElementById('frame');
    svg.appendChild(newP);

}
