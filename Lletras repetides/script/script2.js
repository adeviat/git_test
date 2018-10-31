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
