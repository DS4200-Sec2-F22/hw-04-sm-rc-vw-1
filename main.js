// ADD BORDER TO CIRCLES WHEN CLICKED
// gets all circles
var circles = document.getElementsByTagName("circle");

// goes through circles and adds event handler to each
for (var i = 0; i < circles.length; i++) {
    document.getElementsByTagName("circle")[i].addEventListener("click", function() {
    // adding border
    this.classList.toggle("borderAdd");
    
    // displaying coordinate
    var x = (this.getAttribute('cx')) / 40;
    var y = ((this.getAttribute('cy'))- 370) / -40;
    var pointdisplay = document.getElementById('pointClick');
    var pointtext = document.getElementById('point');
    pointtext.innerHTML = ' (' + x + ', ' + y + ')';
    pointdisplay.style.display = 'block';
    pointtext.style.display = 'block';
  });
}