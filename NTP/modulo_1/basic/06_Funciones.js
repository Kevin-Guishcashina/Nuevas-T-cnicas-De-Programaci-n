/*
Funciones DECLARATIVAS
*/
// RETORNO DE VALORS
function saludar() {
  return "Hola soy Kevin";
}
//FUNCIONES VOID
function saludar2() {
  console.log("Hola soy Kevin");
}

//FUNCIONES CON PARAMETROS
function saludarConParametros(nombre, apellido) {
  return `Hola soy ${nombre} ${apellido}`;
}
//FUNCIONES CON PARAMETROS POR DEFECTO
function saludoConProfesion(
  nombre = "Persona",
  profesion = "Analista de Sistemas"
) {
  return `Hola ${nombre} mi profesion es ${profesion}`;
}
/*
console.log(saludoConProfesion("Kevin", "Desarrollador de Software"));


console.log(saludarConParametros("Kevin", "Guishcashina"));

var resultado = saludar();
console.log(resultado);
console.log(saludar());
saludar2();
*/

/* 
         FUCIONES EXPRESIVAS
*/
//
var saludoConEda = function (nombre, edad) {
  return `Hola soy ${nombre} y tengo ${edad} año(s)`;
};
//console.log(saludoConEda("Kevin", 22));

/*
       ARROW FUNCTIONS - FUNCIONES FECHA
*/

var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`;

var suma = (num1, num2) => num1 + num2;
//console.log(saludoConApellido("kevin", "Guishcashina"));
console.log(suma(2, 3));

/* 
    FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES
*/

function saludoConFunciones(nombre, cb) {
  return cb(nombre);
}

var miSaludo = saludoConFunciones("Kevin", function (nombre) {
  return `Hola soy ${nombre}`;
});

var miSaludo2 = saludoConFunciones("Kevin", (nombre) => `Hola soy ${nombre}`);
console.log(miSaludo2);

/*
setTimeout(() =>{
    console.log("Hola mundo");
}, 3000);

setInterval(() => {
    console.log("Hola mundo");
}, 2000);
*/