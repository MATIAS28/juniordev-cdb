//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();

//Cargar archivos de Rutas
var article_routes = require('./backend/routes/article');

//Rutas
app.use('/api', article_routes);

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/juniordev'));

app.use('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/juniordev/index.html'));
});

//DB conection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Matmun:Mocorillo123@kobdb-ybabt.mongodb.net/KOBdb?retryWrites=true&w=majority", { connectWithNoPrimary: true, useNewUrlParser: true })
                .then(() => {
                  console.log('Conectado a la base de datos');
                })
                .catch(err => console.log(err));

// Start the app by listening on the default Heroku port
var port = 9000;
app.listen(port);

//exportar
module.exports = app;

