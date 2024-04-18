const express = require('express'); //libreria necesaria npm i express
const app = express();
const http = require('http'); //libreria necesaria npm i http
const server = http.createServer(app);
const cors = require('cors');//Libreria necesaria npm i cors
const logger = require('morgan'); //Libreria necesaria npm i morgan
const passport = require('passport');
//const fileUpload = require('express-fileupload');
const multer = require('multer');
//const XLSM = require('xlsx');
//const fs = require('fs');

const ipconfig = "192.168.1.89"; //dirección ipv4 de la compu
//const ipconfig ="172.102.0.78"; //direccion school

//const ipconfig = "34.70.85.26";
/*const uploadOpts = {
    useTempFile : true,
    tempFileDir : '/tmp/'
}*/

/*
Importar Rutas
*/
//const ExceluploadRoutes = require('./routes/ExceluploadRoutes');
const userRoutes = require('./routes/userRoutes'); 
const clasesRoutes = require('./routes/clasesRoutes');
const contenidoClaseRoute = require('./routes/contenidoClaseRoute');
const contenidoXMLSRoutes = require('./routes/contenidoXMLSRoutes');
const db = require('./config/config');

//const { fail } = require('assert');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//app.use(fileUpload());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directorio donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Se mantiene el nombre original del archivo
    }
});

const upload = multer({ storage: storage });
const uploadXLMS = multer({ storage: storage });

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port',port);

/*
Llamado de Rutas
*/

//ExceluploadRoutes(app);
userRoutes(app);
clasesRoutes(app);
contenidoClaseRoute(app);
contenidoXMLSRoutes(app);

/*server.listen(3000,function(){
    console.log('Aplicacion de NodeJS ' + process.pid + ' iniciada..... en puerto: ' + port)
});*/

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