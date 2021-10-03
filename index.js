const express = require('express');
const bodyParser = require('body-parser');

// Importar las rutas
const index = require('./routes/index');

// Puerto de escucha del servidor
const port = '5001';

// crear el servidor
const app = express();
// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rutas de la app
app.use('/', index());

// carpeta publica
app.use(express.static('public'));

// puerto
app.listen(port);