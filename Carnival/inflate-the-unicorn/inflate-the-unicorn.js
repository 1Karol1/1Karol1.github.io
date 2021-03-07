  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//Attach unicorn picture
//check wchich unicorn is being clicked
//swap pictures on click 

var unicorn1 = document.getElementById("unicorn1")
var unicorn2 = document.getElementById("unicorn2")
var unicorn3 = document.getElementById("unicorn3")

var inflation1 = 0
var inflation2 = 0
var inflation3 = 0

unicorn1.onclick = clicked
unicorn2.onclick = clicked
unicorn3.onclick = clicked



function clicked(event) {
var unicorn = event.target
  if (unicorn.id == "unicorn1") {
    inflation1++
    unicorn.src = "./images/unicorn-" + inflation1 + ".png"
    if (inflation1 == 3) inflation1 = 0
    if (inflation1 == 0) alert("Unicorn 1 thanks for your efforts")
  }
  if (unicorn.id == "unicorn2") {
    inflation2++
    unicorn.src = "./images/unicorn-" + inflation2 + ".png"
    if (inflation2 == 3) inflation2 = 0
    if (inflation2 == 0) alert("Unicorn 2 thanks for your efforts")
  }
  if (unicorn.id == "unicorn3") {
    inflation3++
    unicorn.src = "./images/unicorn-" + inflation3 + ".png"
    if (inflation3 == 3) inflation3 = 0
    if (inflation3 == 0) alert("Unicorn 3 thanks for your efforts") 
   
  }
  
}


