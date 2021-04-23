function loopTriangle(caract){
    let affiche=caract;
    for(let i=0;i<7;i++){
            console.log(affiche);
            affiche= affiche + caract;
    }
}

loopTriangle("#");

//solution du livre
for (let line = "1"; line.length < 8; line += "1")
  console.log(line);