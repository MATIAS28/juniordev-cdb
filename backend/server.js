//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Cargar archivos de Rutas
var article_routes = require('./routes/article');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/juniordev'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/juniordev/index.html'));
});

//Conexion a la base de datos
var port = process.env.PORT || 3700;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Matmun:Mocorillo123@kobdb-ybabt.mongodb.net/KOBdb?retryWrites=true&w=majority", { connectWithNoPrimary: true, useNewUrlParser: true })
                .then(() => {
                  console.log('Conectado a la base de datos');
                  /*Creacion del servidor*/
                  app.listen(port, () => {
                    console.log('servidor corriendo correctamente en <localhost: 3700/>');
                  });
                })
                .catch(err => console.log(err));


//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//Rutas
app.use('/', article_routes);


//exportar
module.exports = app;
