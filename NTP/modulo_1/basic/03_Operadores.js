// Asignacion
//= 

//Comparacion 
/*
==
===

console.log(2 == 2 );
console.log(2 === '2');
console.log(2=='2');
*/

/*
No es igual --- !=

console.log(2 != 3);
console.log(2 != 2);
*/

/*
<
>
<=
>=
*/

//Operadores de asignacion compuestos

/*
Incremento y asignacion --- += / x = x + y
var numero = 2;
numero -= 3;
console.log(numero);
*/

//Operadores aritmeticos
/*
+
-
*
/
$
**
*/

//Operadores para desestructurar objetos
var persona = {
    nombre: "kevin", 
    apellido: "Guishcashina", 
    edad: 22, 
    viajes: {
        destino1: "Colombia", 
        destino2: "Peru"}};

var {nombre:nombre2, apellido, viajes:{destino1}} = persona;
console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destino1);
