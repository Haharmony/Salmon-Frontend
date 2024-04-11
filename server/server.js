const express = require('express'); //libreria necesaria npm i express
const app = express();
const http = require('http'); //libreria necesaria npm i http
const server = http.createServer(app);
const cors = require('cors');//Libreria necesaria npm i cors
const logger = require('morgan'); //Libreria necesaria npm i morgan
const ipconfig = "192.168.1.113"; //dirección ipv4 de la compu



/*
Importar Rutas
*/
const userRoutes = require('./routes/userRoutes'); 

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port',port);

/*
Llamado de Rutas
*/

userRoutes(app);

server.listen(3000, ipconfig || 'localhost',function(){
    console.log('Aplicacion de NodeJS ' + process.pid + ' iniciada..... en puerto: ' + port)
});
app.get('/',(req, res)=>{
    res.send('Ruta raiz del backend')
});
app.get('/Test',(req, res)=>{
    res.send('Esta es la ruta test')
});

//ERROR HANDLER
app.use((err,req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

//200 - ES UNA RESPUESTA EXITOSA
//404 - URL NO EXISTE
//500 - ERROR INTERNO DEL SERVIDOR 