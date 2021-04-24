//console.log("test retourR\nRligne");

let myBoard="";
for(let i=0;i<64;i++){
    if(i%2 == 0  &&  i%9 != 0){
        myBoard += " ";
    }else if(i%2 != 0  &&  i%9 != 0){
        myBoard += "#";
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
%9  modulo 9
!   non modulo 0

*/