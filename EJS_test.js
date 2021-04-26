/*function compteur() {
    let count = 0;
  
    return function() {
        return count++;
    };
}

let plusUn = compteur();
let plusUnBis = compteur();

alert(plusUn()); //0 
alert(plusUn()); //1
alert(plusUnBis()); //0
alert(plusUn()); //2
alert(plusUnBis()); //1  */

function creerFonction() {
  var nom = "Mozilla";
  function afficheNom() {
    console.log(nom);
  }
  return afficheNom;
}

var maFonction = creerFonction();
maFonction();