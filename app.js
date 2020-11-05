'use strict'

// Cargar módulos de NODE para crear servidor
var express = require('express'); // Framework para Node
var bodyParser = require('body-parser'); // convierte lo que recibe en JSON nativo de Node

// Ejecutar express ( http )
var app = express();

// Cargar ficheros de rutas

// Cargar middlewares ( seguridad )
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Activar CORS para recibir peticiones del Front

// Añadir prefijos a las rutas

// Ruta o metodo de prueba la api REST
app.get('/probando', (req, res) => {
    
    return res.status(200).send({
        curso: 'Curso',
        autor: 'Moya',
        url: 'moya.es'
    }); 

});
// Exportar módulo para poder usarlo fuera
module.exports = app;