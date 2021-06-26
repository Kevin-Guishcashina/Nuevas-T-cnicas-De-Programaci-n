const { Router, response } = require("express");
const data = require("../data.json");
const router = Router();

router
  .get("/users", (req, res) => {
    res.json({
      msg: "LISTA DE USUARIOS ",
      body: data.map((person) => {
        person.first_name = person.first_name.toUpperCase();
        person.last_name = person.last_name.toUpperCase();
        return person;
      }),
    });
  })
  .get("/users-query", (req, res) => {
    const { query } = req;
    res.json({
      msg: "CONSULTA POR QUERY - ID ",
      body: data.filter((rest) => {
          if (!req.query.id) {
              return data
          }else{
       return rest.id == req.query.id;
          }
      }),
    });
  })
  .get("/users-params/:apellido", (req, res) => {
    const { params: { apellido } } = req;
    var correo = data.filter(traer => traer.last_name == apellido).map(result => {
     return result.email; 
    })
    var verificar = false;
    data.forEach(element => {
        if (apellido === element.last_name) {
            verificar = true;
        } 
    });
    if (verificar === true) {
        res.json({
          msg: "CONSULTA POR APELLIDO",
          body: [
            {
              email: correo,
            },
          ],
        });
    } else {
      res.json({
        msg: "No se encontro el apellido solicitado",
        body: [],
      });
    }
    
  });

module.exports.RouterDeber = router;
