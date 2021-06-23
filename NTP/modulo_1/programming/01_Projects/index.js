//Requiero el paquete express
const express = require('express');

// genero una aplicacion express
const app = express();

//EndPoint
// pide el pack y el colback
app.get('/', (req, res) => {
    //send envia texto plano
    res.send("Hola mundo ExpressJs");
});

app.listen(3000, () => {
    console.log("Servicodr escuchando en http://localhost:3000");
})