//CREACION DEL ROUTER
//traemos el paquete
const { Router } = require('express');
const data = require('../data.json');
const { DataValidator } = require('../middleware/DataValidator');
const { User } = require('../lib/Schema/User');
//Inicializamos Router
const router = Router()

//Creacion e los endpoint
router
  .get("/", (req, res) => {
    res.send("Hola mundo con expres");
  })
  .get("/users", (req, res) => {
    res.json({
      msg: "Lista de usuarios",
      body: data,
    });
  })
  .get("/saludo", DataValidator("query", User), (req, res) => {
    const { query } = req;
    res.json({
      saludo: `Hola soy ${query.nombre} ${query.apellido}`,
    });
  })
  .get("/saludo/:nombre", (req, res) => {
    const {
      params: { nombre },
    } = req;
    res.json({
      nombre: nombre,
    });
  });

// Exportamos las rutas
module.exports.RouterIndex = router;
//module.exports.OtraCosa = "Kevin";


/*
module = {
    exports: {
        RouterIndex: router
    }
}
*/
