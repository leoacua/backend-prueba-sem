'use strict'
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var session = require('express-session');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var router = require('express-promise-router')();
var xl = require('excel4node');
var app = express();
app.use(cors());

// cargar archivo de rutas
var Auth_routes = require('./routes/Auth');

var FarCreaMed_routes = require('./routes/FarCreaMed');
var DatosPer_routes = require('./routes/DatosPerDp');
var DatosUser_routes = require('./routes/DatosUser');
var DatosClien_routes = require('./routes/DatosClien');
var DatosPaciente_routes = require('./routes/DatosPaciente');
var DatoPaciForm_routes = require('./routes/DatoPaciForm');
var ParameFunc_routes = require('./routes/ParameFunc');
var DatosExportar_routes = require('./routes/DatosExportar');
var AuthToken_routes = require('./middlewares/AuthToken');




// Configurar cabeceras y cors
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middlewares



//var AuthToken_routes = require('./middlewares/AuthToken');

app.use('/api',DatosExportar_routes);

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


//rutas

app.use('/api',DatoPaciForm_routes);
app.use(AuthToken_routes);
app.use('/api',DatosPer_routes);
app.use('/api',DatosPaciente_routes);
app.use('/api',FarCreaMed_routes);
app.use('/api',DatosUser_routes);
app.use('/api',DatosClien_routes);
app.use('/api',ParameFunc_routes);
app.use('/api',Auth_routes);
//app.use(AuthToken_routes);



//exportar

module.exports = app;

