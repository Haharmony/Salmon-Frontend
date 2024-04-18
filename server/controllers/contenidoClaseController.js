const ContenidoClase = require('../models/contenidoClase');

module.exports = {
    subirPDF(req, res) {
        const nombreArchivo = req.file.originalname;
        const rutaArchivo = req.file.path;
        const idClase = req.body.id_clase;
        const matriculaClase = req.body.matricula_clase;

        ContenidoClase.subirPDF(nombreArchivo, rutaArchivo, idClase, matriculaClase, (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al guardar archivo en la base de datos',
                    error: err
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Archivo PDF subido exitosamente',
                data: result
            });
        });
    },

    descargarPDF(req, res) {
        const idArchivo = req.query.idArchivo;

        ContenidoClase.descargarPDF(idArchivo, res);
    },
    mostrarTareas(req, res) {
        const matriculaAlumno = req.query.matricula;
    
        ContenidoClase.mostrarTareas(matriculaAlumno, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: 'Error al obtener las tareas de la base de datos',
              error: err
            });
          }
    
          if (!result || result.length === 0) {
            return res.status(404).json({
              success: false,
              message: 'No se encontraron tareas para el alumno proporcionado'
            });
          }
    
          return res.status(200).json({
            success: true,
            message: 'Tareas obtenidas exitosamente',
            data: result
          });
        });
      },

      subirPDFAlumno(req, res) {
        const nombreArchivo = req.file.originalname;
        const rutaArchivo = req.file.path;
        const idClase = req.body.id_clase;
        const matriculaClase = req.body.matricula_clase;

        ContenidoClase.subirPDFAlumno(nombreArchivo, rutaArchivo, idClase, matriculaClase, (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al guardar archivo en la base de datos',
                    error: err
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Archivo PDF subido exitosamente',
                data: result
            });
        });
    },
    descargarPDFAlumno(req, res) {
      const idArchivo = req.query.idArchivo;

      ContenidoClase.descargarPDFAlumno(idArchivo, res);
  },
  mostrarTareasAlumnos(req, res) {
    const matriculaMaestro = req.query.matricula;

    ContenidoClase.mostrarTareasAlumnos(matriculaMaestro, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al obtener las tareas de la base de datos',
          error: err
        });
      }

      if (!result || result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No se encontraron tareas para el alumno proporcionado'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Tareas obtenidas exitosamente',
        data: result
      });
    });
  },
  updateCalificacion (req, res) {
    const idArchivo = req.body.id_archivo;
    const nuevaCalificacion = req.body.nueva_calificacion;

    ContenidoClase.updateCalificacion(idArchivo, nuevaCalificacion, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error al actualizar la calificación en la base de datos',
                error: err
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Calificación actualizada exitosamente',
            data: result
        });
    });
}


};