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

app.get("/saludo", (req, res) => {
    // rep.query
    //console.log(req.query);
    //obtenemos la query del objeto request
    /*
    //otra forma
    
    primera forma
    const { 
        query: { nombre, apellido }, 
    } = req;*/
const {query} = req;
    //segunda forma
    //const nombre = req.query.nombre
    //const apellido = req.query.apellido

    res.json({
        saludo: `Hola soy ${query.nombre} ${query.apellido}`,
    });
});

//para parametro con /:
app.get('/saludo/:nombre', (req, res)=>{
    const { params: { nombre } } = req
    //const nombre = req.params.nombre
    //console.log(req.params);
    res.json({
        nombre: nombre
    })
})
app.listen(3000, () => {
    console.log("Servicodr escuchando en http://localhost:3000");
})