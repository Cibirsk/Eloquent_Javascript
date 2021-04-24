let myBoard="";
let impLine="";
let pairLine="";
let mySize = prompt("size: ");

for(let i=0;i<mySize;i++){
    if(i%2 == 0){
        pairLine += "  ";
    }else{
        pairLine += "#";
    }
}
pairLine += "\n";

for(let i=0;i<mySize;i++){
    if(i%2 == 0){
        impLine += "#";
    }else{
        impLine += "  ";
    }
}
impLine += "\n";

for(let i=0;i<mySize;i++){
    if(i%2 == 0){
        myBoard += pairLine;
    }else{
        myBoard += impLine;
    }
}

console.log(myBoard);

/*

0#0#0#0#\n#0#0#0#0\n0#0#0#0#\n

0
!
0
!
0
!
0
!   non modulo 0
%9  modulo 9   (retour ligne et sauter une boucle)
!   non modulo 0

*/