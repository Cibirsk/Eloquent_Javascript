let chessboard="";
for(let j=0;j<4;j++){
    for(let i=0;i<4;i++){
        chessboard += "  #";
    }
    chessboard += "\n";

    for(let i=0;i<4;i++){
        chessboard += "#  ";
    }
    chessboard += "\n";
}
console.log(chessboard);


//solution du livre
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) { //point clef: faire le modulo sur l'addition des 2 boucles
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);