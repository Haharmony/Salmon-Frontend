const ClaseController = require('../controllers/clasesController');

module.exports = (app) => {
    app.get('/Salmon-Frontend/api/alumnos_clases/ClasesAlumno', ClaseController.ClasesAlumno);
    app.get('/Salmon-Frontend/api/clases/ClasesMaestro', ClaseController.ClasesMaestro);
    app.post('/Salmon-Frontend/api/clases/createClaseMaestro', ClaseController.createClaseMaestro);
    app.post('/Salmon-Frontend/api/alumnos_clases/insertarAlumnoClase', ClaseController.insertarAlumnoClase);
    app.post('/Salmon-Frontend/api/zoom/generarLink', ClaseController.generarLink);
    app.get('/Salmon-Frontend/api/zoom/getUltimoLinkZoom', ClaseController.getUltimoLinkZoom);
};