const express = require('express');

// Importar las rutas
const index = require('./routes/index');

// Puerto de escucha del servidor
const port = '5001';

// crear el servidor
const app = express();

// Rutas de la app
app.use('/', index());

// carpeta publica
app.use(express.static('public'));

// puerto
app.listen(port);