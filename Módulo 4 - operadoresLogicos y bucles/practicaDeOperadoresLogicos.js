// Escribe una función que reciba dos números y 
// determine si el primero es mayor que el segundo. Debe retornar un valor booleano:

function numMayor(num1, num2) {
    if (num1 > num2)
    console.log(true);
    else {
        console.log(false);
    }
}

numMayor(19, 8);

// Crea una función que reciba tres números y verifique si al menos uno de ellos es negativo. 
// Debe retornar un valor booleano:

function numNegativo(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

numNegativo(-1, -4, -9);

// Escribe una función que tome un número como parámetro y determine si es par. 
// Debe retornar un valor booleano.

function esPar(num) {
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

esPar(4);

// Crea una función que reciba un número y compruebe si es divisible tanto por 3 como por 5.
// Debe retornar un valor booleano.

function operadorAnd(num){
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

operadorAnd(45);

// Escribe una función que tome un número entero positivo y verifique si es un número primo. 
// Debe retornar un valor booleano.

function numPrimo(num) {
    if (num <= 1) {
        console.log(false);
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(false);
        }
    } 
    console.log(true);
}

numPrimo(4);

// Crea una función que reciba un carácter y determine si es una letra mayúscula. 
// Debe retornar un valor booleano.



//Crea una función que tome dos strings y verifique si tienen la misma longitud. 
// Debe retornar un valor booleano

function mismaLongitud(string1, string2) {
    if (string1.length === string2.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

mismaLongitud('MirnaP', 'Mirna');