const db = require('../config/config');
const fs = require('fs');

const ContenidoClase = {};

ContenidoClase.subirPDF = (nombreArchivo, rutaArchivo, idClase, matriculaClase, cb) => {
  const contenidoArchivo = fs.readFileSync(rutaArchivo);

  const sql = 'INSERT INTO archivos_pdf (nombre_archivo, contenido_archivo, id_clase, matricula_clase) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombreArchivo, contenidoArchivo, idClase, matriculaClase], (err, result) => {
    if (err) {
      console.error('Error al guardar archivo en la base de datos:', err);
      cb(err, null);
    } else {
      console.log('Archivo PDF guardado en la base de datos');
      cb(null, result);
    }
  });
};

ContenidoClase.descargarPDF = (idArchivo, res) => {
  const sql = 'SELECT nombre_archivo, contenido_archivo FROM archivos_pdf WHERE id_archivo = ?';
  db.query(sql, [idArchivo], (err, result) => {
    if (err) {
      console.error('Error al obtener el archivo de la base de datos:', err);
      res.status(500).json({
        success: false,
        message: 'Error al obtener el archivo de la base de datos'
      });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Archivo no encontrado'
      });
      return;
    }

    const archivo = result[0];
    const nombreArchivo = archivo.nombre_archivo;
    const contenidoArchivo = archivo.contenido_archivo;

    // Configurar el encabezado de la respuesta para indicar que es un archivo PDF
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(nombreArchivo)}"`);
    res.setHeader('Content-Type', 'application/pdf');

    // Enviar el contenido del archivo como respuesta
    res.send(contenidoArchivo);
  });
};

ContenidoClase.mostrarTareas = (matriculaAlumno, cb) => {
    const sql = `
      SELECT ap.nombre_archivo, ap.matricula_clase, ap.id_archivo
      FROM archivos_pdf ap
      INNER JOIN alumnos_clases ac ON ap.matricula_clase = ac.matricula_clase
      INNER JOIN alumnos a ON ac.matricula_alumno = a.matricula
      WHERE a.matricula = ?`;
  
    db.query(sql, [matriculaAlumno], (err, result) => {
      if (err) {
        console.error('Error al obtener las tareas de la base de datos:', err);
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };

  ContenidoClase.subirPDFAlumno = (nombreArchivo, rutaArchivo, idClase, matriculaClase, cb) => {
    const contenidoArchivo = fs.readFileSync(rutaArchivo);
  
    const sql = 'INSERT INTO archivos_pdf_alumnos (nombre_archivo, contenido_archivo, id_clase, matricula_clase) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombreArchivo, contenidoArchivo, idClase, matriculaClase], (err, result) => {
      if (err) {
        console.error('Error al guardar archivo en la base de datos:', err);
        cb(err, null);
      } else {
        console.log('Archivo PDF guardado en la base de datos');
        cb(null, result);
      }
    });
  };
  
  ContenidoClase.descargarPDFAlumno = (idArchivo, res) => {
    const sql = 'SELECT nombre_archivo, contenido_archivo FROM archivos_pdf_alumnos WHERE id_archivo = ?';
    db.query(sql, [idArchivo], (err, result) => {
      if (err) {
        console.error('Error al obtener el archivo de la base de datos:', err);
        res.status(500).json({
          success: false,
          message: 'Error al obtener el archivo de la base de datos'
        });
        return;
      }
  
      if (result.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Archivo no encontrado'
        });
        return;
      }
  
      const archivo = result[0];
      const nombreArchivo = archivo.nombre_archivo;
      const contenidoArchivo = archivo.contenido_archivo;
  
      // Configurar el encabezado de la respuesta para indicar que es un archivo PDF
      res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(nombreArchivo)}"`);
      res.setHeader('Content-Type', 'application/pdf');
  
      // Enviar el contenido del archivo como respuesta
      res.send(contenidoArchivo);
    });
  };

  ContenidoClase.mostrarTareasAlumnos = (matriculaMaestro, cb) => {
    const sql = `
    SELECT apa.nombre_archivo, apa.calificacion, apa.id_archivo, apa.matricula_clase
    FROM archivos_pdf_alumnos apa
    INNER JOIN clases c ON apa.matricula_clase = c.matricula_clase
    INNER JOIN maestros m ON c.matricula_maestro = m.matricula
    WHERE m.matricula = ?`;
  
    db.query(sql, [matriculaMaestro], (err, result) => {
      if (err) {
        console.error('Error al obtener las tareas de la base de datos:', err);
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
};

ContenidoClase.updateCalificacion = (id_archivo, nuevaCalificacion, cb) => {
  const sql = `
    UPDATE archivos_pdf_alumnos
    SET calificacion = ?
    WHERE id_archivo = ?;
  `;
  
  db.query(sql, [nuevaCalificacion, id_archivo], (err, result) => {
    if (err) {
      console.error('Error al actualizar la calificación en la base de datos:', err);
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

  
module.exports = ContenidoClase;
