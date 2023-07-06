//Destinos

function viajar(destino) {
    if (destino === 'Maracay') {
        console.log('Siga DERECHO');
    } else if (destino === 'Caracas') {
        console.log('Gire a la DERECHAS');
    } else if (destino === 'Valencia') {
        console.log('Gire a la IZQUIERDA');
    } else {
        console.log('Tas Peldio Carnal');
    }
}

viajar('Valencia');