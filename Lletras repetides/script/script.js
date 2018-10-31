/* Exercisi Fase 1 i Fase 2 */
let myName = ["A","n","d","r","e", "s", "3"];
var elements = myName.length;
var vocales = ["a", "e", "i", "o", "u"];

function lletres (){

    var i;
   
    for (i=0; i < elements; i++) {
        if (vocales.indexOf(myName[i].toLowerCase())!=-1){
            console.log (myName[i] + " es una vocal"); 
        } else if  (isNaN (myName[i])){
            console.log (myName[i] + " es una consonante");
        }else console.log (myName[i] + " los nombres de las personas no contienen números!");
}
}

lletres();

/* Exercisi Fase 3 */

var myMap = new Map()

myName.forEach(function(letter) {
	if (myMap.has(letter)) {
        myMap.set(letter, myMap.get(letter) + 1)
  } else {
    myMap.set(letter, 1)
  }
});

console.log(myMap); 


/* Exercisi Fase 4 */


let mySurname = ["D", "e", "v", "i", "a"];
var myFullName = [];
myFullName.push(...myName, " ", ...mySurname);
console.log(myFullName);


