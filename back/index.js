const { leerPosts, escribirPosts } = require("./funciones"); //importamos funciones

const cors = require("cors"); // importamos cors

const express = require("express"); //importamos express
const app = express(); //instanciamos express

const fs = require("fs"); // importamos fs
const port = 3000; //definimos puerto

app.listen(port, () => console.log("Servidor escuchando en puerto 3000")); // levantamos servidor

app.use(express.json()); //midleware
app.use(cors()); //uso de cors

