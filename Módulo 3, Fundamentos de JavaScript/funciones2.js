function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFunction() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
    cuidadoConElConsoleLog('Kristhiang')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
}

function sumaTres(x) {
    return x + 3;
}

var sumaTres = function(x) {
    console.log(x +3);
}