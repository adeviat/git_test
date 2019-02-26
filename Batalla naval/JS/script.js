var posicion1 = 1;
var posicion2 = 2;
var posicion3 = 3;
var intento;
var golpes = 0;
var intentos = 0;
var hundimiento = false;

while (hundimiento == false) {
    intento = prompt("posición, apunten, fuego! (ingresa una de las posisiciones del tablero) :");
    if (intento < 0 || intento > 6) {
        alert("Porfavor ingresa un número válido!");
    } else {
        intentos = intentos +1;

    if (intento == posicion1) {
        alert("golpe!");
        golpes = golpes +1;
        document.getElementById("demo").innerHTML = "X";
    }

    if (intento == posicion2) {
            alert("golpe!");
            golpes = golpes +1;
            document.getElementById("demo1").innerHTML = "X";
    }

    if (intento == posicion3) {
        alert("golpe!");
        golpes = golpes +1;
        document.getElementById("demo2").innerHTML = "X";


        if (golpes == 3) {
            hundimiento = true;
            alert("Has hundido mi nave!");
        }

    } else {
        alert("Fallaste!");
    }
    }
}

var resultados = "Has utilizado: " + intentos + " para hundir mi flota de naves " + "Tu puntaje final ha sido " + (3/intentos);
alert (resultados);