// como se hacia antes
function Rectangulo(base, altura){
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
}

var rectangulo = new Rectangulo(6,8);

//console.log(rectangulo.calcularArea());
//console.log(rectangulo.base);

// Declaracion de clases
class Rectangulo2 {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

//var rectangulo2 = new Rectangulo2(4,2);
//console.log(rectangulo2.calcularArea());

/* TAREA
Clase Persona
implementar getters, setter y realizar una implementacion
implementar metodos estaticos - Clase Punto, funcion distancia
Construir clase Persona y estudiante, extender(extens) Estidnate con Persona
*/

/*
        DEBER
*/
// 1) CREAR CLASE PERSONA
/*class Persona {
    constructor(nombre, apellido,edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludo(){
        return "Hola mi nombre es: "+this.nombre+" "+ this.apellido+" y tengo "+ this.edad +" años";
    }
}*/
/*var persona = new Persona("Kevin","Guishcashina",22);
console.log(persona.saludo());*/

//2) IMPLEMENTAR GETTERS, SETTERN Y REALIZAR UNA IMPLEMENTACION
/*class Persona {
    constructor(nombre, apellido,edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    set establecerNombre(nombre)
    {
        this.nombre = nombre;
    }

    get regresarNombre ()
    {
        return this.nombre;
    }

    set establecerApellido(apellido)
    {
        this.apellido = apellido;
    }

    get regresarApellido ()
    {
        return this.apellido;
    }
    
    set establecerEdad(edad)
    {
        this.edad = edad;
    }

    get regresaEdad ()
    {
        return this.edad;
    }
    saludo(){
        return "Hola mi nombre es "+this.nombre+" "+ this.apellido+" y tengo "+ this.edad +" años";
    }
}
var persona = new Persona("Luis","Garcia",10);
persona.saludo();
persona.establecerEdad = 23;
persona.establecerNombre = "Kevin";
persona.establecerApellido = "Guishcashina";
console.log("Hola mi nombre es "+persona.regresarNombre+" "+persona.regresarApellido+ " y tengo "+persona.regresaEdad+ " años.");
*/

//IMPLEMENTACION METODOS ESTATICOS - CLASE PUNTO, FUNCION DISTANCIA
// 1. METODOS ESTATICOS
/*class Fecha {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  static hoy() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var ano = fecha.getFullYear();
    return new Fecha(dia, mes, ano);
  }
}
var fecha = new Fecha(10,08,2021);
console.log(Fecha.hoy());*/

//CLASE PUNTO Y LA FUNCION DISTANCIA
/*class Punto {
  constructor ( x , y ){
    this.x = x;
    this.y = y;
  }

  static distancia ( a , b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt ( dx * dx + dy * dy );
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log (Punto.distancia(p1, p2));*/

//Construir clase Persona y estudiante, extender(extens) Estidnate con Persona
//CONSTRUIR CLASE PERSONA Y ESTUDIANTE, EXTENDER(EXTENDS) ESTUDIANTE CON PERSONA
class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    present(){
        return 'Hola mi nombre es: '+this.nombre;
    }
}
class Estudiante extends Persona {
    constructor(nombre, carrera, materia){
        super(nombre);
        this.carrera = carrera;
        this.materia = materia;
    }
    Presentacion2(){
        return this.present()+ ' y Estudio ' + this.carrera + ' la materia de '+this.materia;
    }
}
var persona = new Persona("Kevin");
var estudiante = new Estudiante("kevin", "Analisis de sistemas", "Nuevas tecnicas de programacion");
//console.log(estudiante.present())
console.log(estudiante.Presentacion2());

