//Operadores de comparacion

console.log(4 < 9);
console.log(2 > 3);
console.log(8 >= 7);
console.log(4 <= 4);
console.log(17 == 17);
console.log(3 == 4);

//Igualdad vs igualdad estricta

console.log(3 == 3);
console.log(3 === 3);
console.log(3 == '3');
console.log(3 === '3');
console.log('3' == 3);
console.log('3' === 3);

//Asignacion y asociatividad

var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);
console.log(c);