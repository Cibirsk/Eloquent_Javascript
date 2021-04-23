for(i=1;i<=100;i++){
    if(i%3 == 0 && i%5 != 0){
        console.log("Fizz");
    }else if(i%5 == 0 && i%3 != 0){
        console.log("Buzz");
    }else if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}

//solution du livre
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz"; 
  if (n % 5 == 0) output += "Buzz"; //concaténation ou pas de "Fizz" et "Buzz" dans Output
  console.log(output || n); // règle true/false avec || , si true => Fizz et/ou Buzz si false => n
}