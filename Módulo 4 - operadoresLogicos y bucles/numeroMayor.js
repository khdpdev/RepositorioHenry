let numeros = [129, 87, 98, 128, 783]
let numeroMax = 0
let tamaño = numeros.length

for(let i = 0; i < tamaño; i++) {
    if(numeroMax < numeros[i]) {
        numeroMax = numeros[i];
    }
}

console.log(numeroMax)