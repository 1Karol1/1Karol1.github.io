  document.addEventListener("DOMContentLoaded", startGame);

  document.addEventListener("contextmenu", checkForWin);

  document.addEventListener("click", checkForWin);



var board = { cells: [] };

function createBoard() {
for (r = 0; r < 5; r++) {
for (c = 0; c < 5; c++) {
board.cells.push({
        isMine: Math.random() >= 0.75,
        row: r,
        col: c,
        hidden: true,
        
      });
    }
  }
}

createBoard ();
function startGame () {for (let i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
}
  
  lib.initBoard()
}


function checkForWin () {
  for (var i=0; i<board.cells.length; i++) {
   if (board.cells[i].isMine && !board.cells[i].isMarked){
      return 
    } else if (!board.cells[i].isMine && board.cells[i].hidden){
      return 
    } 
  }
  
    lib.displayMessage('Hammer Time!')
    document.getElementById('time').play()
  }

  

function countSurroundingMines (cell) {
  let count = 0; getSurroundingCells(cell.row, cell.col).forEach((e) => {if (e.isMine) count++;
	});
	return count;
    }
 
function reset () {  
      location = location  
    }; 
function hammer (){ 
      document.getElementById("hammer").play();
    }
    