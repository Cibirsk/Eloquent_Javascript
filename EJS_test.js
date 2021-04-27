function outerFunction(){
  let outVar= "Stephane";
  function innerFunction(){
    let innerVar= outVar + "Sinclar";
    console.log(innerVar);
  }
  return innerFunction;
}

let myVariable = outerFunction();
myVariable();