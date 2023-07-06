//Concatenar 'Hola Mundo! Bendiciones.

var saludo = 'Hola ';
var cosa = 'Mundo';
var signo = '!';
var palabra = ' Bendiciones';

console.log(saludo + cosa + signo + palabra);

//Suma

var a = 9;
var b = 129;
var c = 982;
var d = (a + b) * c;

console.log(d);

function semaforo(color) {
    if (color === 'verde') {
        console.log('Sigue');
    } else if (color === 'amarillo') {
        console.log('Detente, prrrroooo!');
    } else if (color === 'rojo') {
        console.log('No te muevas, el mickity');
    } else {
        console.log('Qué haces con tu vida, prrroooo?');
    }
}
semaforo('rojo');


//Mayor de edad

function mayorDeEdad(number) {
    if (number >= 18) {
        console.log('Eres mayor, brou, pasateee!');
    } else {
        console.log('Eres un pedazo de menor, virgen, anda a dormir!');
    }
}

mayorDeEdad(13);

function suma(a, b) {
    suma = a + b;
    console.log(suma);
}

suma(13, 2);