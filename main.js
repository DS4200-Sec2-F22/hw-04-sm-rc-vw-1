// gets all circles
var circles = document.getElementsByTagName("circle");

// goes through circles and adds event handler to each
for (var i = 0; i < circles.length; i++) {
    document.getElementsByTagName("circle")[i].addEventListener("click", function() {
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

    var cx = x_coord / 40;
    var cy = (y_coord - 375) / - 40;

    document.getElementById("demo").innerHTML = x_coord.options[x_coord.selectedIndex].text;
    document.getElementById("demo2").innerHTML = y_coord.options[y_coord.selectedIndex].text;

    document.getElementById("new_point").cx = cx;
    // HOW CAN I MAKE CX AND CY WITH THE ABOVE POINTS

}