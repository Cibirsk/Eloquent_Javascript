//console.log("test retourR\nRligne");

let myBoard="";
for(let i=0;i<8;i++){
    if(i%2 == 0){
        myBoard += " ";
    }else{
        myBoard += "#";
    }
}
console.log(myBoard);