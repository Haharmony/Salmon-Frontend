const ContenidoXMLSController = require('../controllers/contenidoXMLSController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadsXMLS/'); // Cambio de la carpeta de destino
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Se mantiene el nombre original del archivo
    }
});

const upload = multer({ storage: storage });

module.exports = (app) => {
    app.post('/Salmon-Frontend/api/archivosXMLS/subirExcel', upload.single('excelFile'), ContenidoXMLSController.subirExcel);
    app.get('/Salmon-Frontend/api/archivosXMLS/descargarExcel', ContenidoXMLSController.descargarExcel);
    app.get('/Salmon-Frontend/api/archivosXMLS/mostrarExcel', ContenidoXMLSController.mostrarExcel);
    app.delete('/Salmon-Frontend/api/archivosXMLS/eliminarExcel', ContenidoXMLSController.eliminarExcel);
};