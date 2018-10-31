let myName = ["A","n","d","r","e", "s"];
let mySurname = ["D", "e", "v", "i", "a"];
var myFullName = [];
myFullName.push(...myName, " ", ...mySurname);
console.log(myFullName);