var posicionUno = 1;
var posicionDos = 2;
var posicionTres = 3;
var intento;

while (hundimiento == false) {
    intento = prompt("posición, apunten, fuego! (ingresa una de las posisiciones del tablero) :");
    if (intento < 0 || intento > 6) {
        alert("Porfavor ingresa un número válido!");
    } else {
        intentos = intentos +1;

switch (golpes()){
    case 0: 
    intento = posicionUno;
    break;
    case 1: 
    intento = posicionDos;
    break;
    case 2: 
    intento = posicionTres;
    break;
}

alert("golpe!");
golpes = golpes +1;
document.getElementById("demo").innerHTML = "X";

function ganar () {
    if (golpes == 3){
            hundimiento = true;
            alert("Has hundido mi nave!");
        }

    }


var resultados = "Has utilizado: " + intentos + " para hundir mi flota de naves " + "Tu puntaje final ha sido " + (3/intentos);
alert (resultados);
