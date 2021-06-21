/*
ARREGLOS
*/
//CONCAT
var numeros = [1,2,3,4,5];
var nuevoNumeros = numeros.concat([6,7,8,9,0])
//console.log(numeros);
//console.log(nuevoNumeros)

//  JOIN
var nombre = ["k","e","v","i","n"]
//console.log(nombre.join(""));

//   SLICE
//console.log(nombre.slice(2));

//   INDEX OF
//console.log(nombre.indexOf("e"));

//  LAST INDEX OF
//console.log(nombre.lastIndexOf("e"));

//   REVERSE
//console.log(nombre.reverse());

//    SORT
var numerosDesorenados = [4,8,5,6,3,8,5,9];
//console.log(numerosDesorenados.sort());

//   SHIFT
//console.log(numerosDesorenados.shift());

//   POP
//console.log(numerosDesorenados.pop());

//   PUSH
numerosDesorenados.push(1012);
//console.log(numerosDesorenados);

var pares = [2,4,6,8,10];
//console.log(pares.map((elemento) => elemento+1));

//                DEBER CONSULTAR FUNCIONES DE ARREGLOS

// 1) INCLUDES
/*
var valores = [1,2,3];
console.log(valores.includes(2));
*/

// 2) FILTER
/*
var valores = [1,2,3,4,5]
var valores2 = valores.filter(num => num > 3 );
console.log(valores2);
console.log(valores);
*/

// 3) REDUCE
/*
var valores = [1,2,3,4,5,6];
var suma = valores.reduce((total, value) => total + value, 0 );
console.log(suma)
*/

// 4) DELETE
/*
var valores = [1,2,3,4,5,6];
console.log('Hay: '+valores.length+ ' valores');
*/

// 5) UNSHIFT

var meses = ["Enero", "Febrero", "Marzo", "Abril"];
meses.unshift("Primer elemento");
console.log(meses);