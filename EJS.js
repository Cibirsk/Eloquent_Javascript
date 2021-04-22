function sumNbr(nbr){
    let count= nbr;
    let total;
    while(count>0){
        total += count;
        count--;
    }
    return total;
}

console.log(sumNbr(10));