const express = require("express");
const app = express();
const { RouterDeber } = require("./routes/deber.js");
app.use("/", RouterDeber);
app.listen(3000, () => {
  console.log("Servicodr escuchando en http://localhost:3000");
});
