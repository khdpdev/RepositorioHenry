//and
function mayorYMenorYPar(num) {
    if(num > 4 && num < 9 && num % 2=== 0) {
        console.log(true);
    } else console.log(false);
}

mayorYMenorYPar(8);
mayorYMenorYPar(6);

//or

function operadorOr(str) {
    if(str === 'Kaleb' || str.length > 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

operadorOr('Kaleb');
operadorOr('Kalheb');
operadorOr('JavaScript');

//Not

function negacion(permiso) {
    if(negacion) {
        console.log('Tienes permiso');
    }
}

negacion(true)
negacion(false)