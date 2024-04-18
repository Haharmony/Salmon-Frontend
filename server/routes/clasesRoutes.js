const ClaseController = require('../controllers/clasesController');

module.exports = (app) => {
    app.get('/api/alumnos_clases/ClasesAlumno', ClaseController.ClasesAlumno);
    app.get('/api/clases/ClasesMaestro', ClaseController.ClasesMaestro);
    app.post('/api/clases/createClaseMaestro', ClaseController.createClaseMaestro);
    app.post('/api/alumnos_clases/insertarAlumnoClase', ClaseController.insertarAlumnoClase);
    app.post('/api/zoom/generarLink', ClaseController.generarLink);
    app.get('/api/zoom/getUltimoLinkZoom', ClaseController.getUltimoLinkZoom);
};