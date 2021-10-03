const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');


// middle para proteger las rutas
// const auth = require('../middleware/auth');

module.exports = function() {
    
    // Inicio
    router.get('/', indexController.index );
    
    return router;
}