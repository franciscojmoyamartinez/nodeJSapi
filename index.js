'use strict'

var mongoose = require('mongoose');
var app = require('./app'); // Cargamos el módulo app
var port = 3900; // Puerto que vamos a utilizar

mongoose.set('useFindAndModify', false); // desactivar antiguos métodos 
mongoose.Promise = global.Promise;

// Conexión a BD
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true}).then(() => {
    console.log("la conexión a la base de datos se ha realizado muy bien");

    // Crear servidor y escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo http://localhost:'+port);
    });
});