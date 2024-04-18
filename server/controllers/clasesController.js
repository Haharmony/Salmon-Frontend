const Clases = require('../models/clases');

module.exports = {
    ClasesAlumno(req, res) {
        const matricula = req.query.matricula;
        
        Clases.getClaseAlumno(matricula, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al obtener la información de las clases del alumno',
                    error: err
                });
            }

            if (!data || data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron clases para la matrícula del alumno proporcionada'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Información de las clases del alumno obtenida exitosamente',
                data: data
            });
        });
    },
    ClasesMaestro(req, res) {
        const matricula = req.query.matricula;
        
        Clases.getClaseMaestro(matricula, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al obtener la lista de clases del maestro',
                    error: err
                });
            }

            if (!data || data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron clases para la matrícula del maestro proporcionada'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Lista de clases del maestro obtenida exitosamente',
                data: data
            });
        });
    },
    createClaseMaestro(req, res) {
        const claseData = req.body;

        Clases.createClaseMaestro(claseData, (err, insertId) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al crear la clase',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Clase creada exitosamente',
                claseId: insertId
            });
        });
    },

    insertarAlumnoClase(req, res) {
        const alumnoClaseData = req.body;

        Clases.insertarAlumnoClase(alumnoClaseData, (err, insertId) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al crear la asociación alumno-clase',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Asociación alumno-clase creada exitosamente',
                alumnoClaseId: insertId
            });
        });
    },

    generarLink(req,res){
        const linkData = req.body;
        Clases.insertZoom(linkData,(err, insertId)=>{
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al guardar link',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Link creada exitosamente',
                alumnoClaseId: insertId
            });
        });
    },
    getUltimoLinkZoom(req, res) {
        const matriculaAlumno = req.query.matriculaAlumno;
        
        Clases.getUltimoLinkZoom(matriculaAlumno, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al obtener el último enlace de Zoom',
                    error: err
                });
            }

            if (!data || data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron enlaces de Zoom para el estudiante proporcionado'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Último enlace de Zoom obtenido exitosamente',
                data: data
            });
        });
    }
};