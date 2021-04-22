function sumNbr(nbr){
    let count= nbr;
    let total=0;
    while(count>0){
        total += count;
        count--;
    }
    return total;
}

console.log(sumNbr(15));