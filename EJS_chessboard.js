/*
let myBoard="";
for(let i=0;i<80;i++){
    if(i%2 == 0  &&  i%9 != 0){
        myBoard += "  ";
    }else if(i%2 != 0  &&  i%9 != 0){
        myBoard += "#";
    }else if(i%9 == 0){
        myBoard += "\n";
        i++;
    }
} */

let myBoard="";
let impBoard="";
let pairBoard="";




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