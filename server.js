//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Cargar archivos de Rutas
var article_routes = require('./backend/routes/article');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/juniordev'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/juniordev/index.html'));
});

//Rutas
app.use('/', article_routes);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//exportar
module.exports = app;

