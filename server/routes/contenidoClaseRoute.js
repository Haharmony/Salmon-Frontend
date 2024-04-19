const ContenidoClaseController = require('../controllers/contenidoClaseController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directorio donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Se mantiene el nombre original del archivo
    }
});

const upload = multer({ storage: storage });

module.exports = (app) => {
    app.post('/Salmon-Frontend/api/archivos_pdf/subirPDF', upload.single('pdf'), ContenidoClaseController.subirPDF);
    app.get('/Salmon-Frontend/api/archivos_pdf/descargarPDF', ContenidoClaseController.descargarPDF);
    app.get('/Salmon-Frontend/api/archivos_pdf/mostrarTareas', ContenidoClaseController.mostrarTareas);
    app.post('/Salmon-Frontend/api/archivos_pdf_alumnos/subirPDFAlumno', upload.single('pdf'), ContenidoClaseController.subirPDFAlumno);
    app.get('/Salmon-Frontend/api/archivos_pdf_alumnos/descargarPDFAlumno', ContenidoClaseController.descargarPDFAlumno);
    app.get('/Salmon-Frontend/api/archivos_pdf_alumnos/mostrarTareasAlumnos', ContenidoClaseController.mostrarTareasAlumnos);
    app.put('/Salmon-Frontend/api/archivos_pdf_alumnos/updateCalificacion', ContenidoClaseController.updateCalificacion);

};
