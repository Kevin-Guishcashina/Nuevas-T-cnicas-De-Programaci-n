/*
     PROMESAS
*/
//Estructura de promesas - declarativas
function promesa(bandera){
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);
        } else {
             setTimeout(() => {
                reject("La operacion fallo");
            }, 3000);     
        }
        
    })
}

//Estructura de solucion de promesas
/*promesa(false)
    .then((resultado) => {
        console.log("Respuesta positiva: "+resultado);
    })
    .catch((error) => {
        console.log("Error: "+error);
    })*/

    //Promesa expresiva

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);
        } else {
             setTimeout(() => {
                reject("La operacion fallo");
            }, 3000);     
        }
})

segundaPromesa(true)
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })

// Endadenamiento promesa

promesa(true) // peticion de clientes
    .then((respuesta) => { //respuesta de lista de clientes
        console.log(respuesta); 
        return segundaPromesa(true); //simula las compras que a hecho el cliente
    })
    .then((respuesta) => { // respuesta de la segunda promesa
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    })
