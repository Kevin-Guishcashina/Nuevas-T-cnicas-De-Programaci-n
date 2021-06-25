//Requiero el paquete express
const express = require('express');

// genero una aplicacion express
const app = express();

//EndPoint
// pide el pack y el colback

// ROUTERS
const { RouterIndex } = require('./routes/index');
// Como utilizamos
app.use("/", RouterIndex)
//app.use("/user", RouterIndex)
//app.use("/user/data", RouterIndex)
//app.use(RouterIndex)
/* 
    lo que va ser es concatenar 
    "/" + "/" = "//" => "/"
    "/" + "/saludo" = "//saludo" => "/saludo"
    "/" + "/saludo/:nombre" = "//saludo/:nomber" => "/saludo/:nombre"

        EJEMPLO 
    app.use("/user", RouterIndex)
    "/user" + "/saludo" = "/user/saludo"
        EJEMPLO 
    app.use("/user/data", RouterIndex)
    "/user/data" + "/saludo" = "/user/data/saludo"
    */
app.listen(3000, () => {
    console.log("Servicodr escuchando en http://localhost:3000");
})