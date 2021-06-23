// como se hacia antes
function Rectangulo(base, altura){
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
}

var rectangulo = new Rectangulo(6,8);

console.log(rectangulo.calcularArea()); 
console.log(rectangulo.base);

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

var rectangulo2 = new Rectangulo2(4,2);
console.log(rectangulo2.calcularArea());

/* TAREA
Clase Persona
implementar getters, setter y realizar una implementacion
implementar metodos estaticos - Clase Punto, funcion distancia
Construir clase Persona y estudiante, extender(extens) Estidnate con Persona
*/

/* 
        DEBER 
*/
