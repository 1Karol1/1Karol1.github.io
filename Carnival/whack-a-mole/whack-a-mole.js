  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//assign picture to the cell 
//randomize cells
//on click change position
//set timer
var squares = document.getElementsByTagName("TD")

var randomIndex = Math.floor(Math.random() * 25);
var randomSquare = squares[randomIndex]

var mole = document.createElement('img');
mole.id = "mole"
mole.src= "./mole.PNG"
randomSquare.appendChild(mole);

mole.onclick = guacaMole
function sound() {
  document.getElementById("sound").play()
}
function guacaMole() {
  randomIndex = Math.floor(Math.random()*squares.length)
  randomSquare = squares[randomIndex]
  randomSquare.appendChild(mole);
  sound()

}

