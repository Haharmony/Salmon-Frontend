const db = require('../config/config');
const fs = require('fs');

const ContenidoXMLS = {};

ContenidoXMLS.subirExcel = (nombreArchivo, rutaArchivo, userId,matricula_admin, cb) => {
  const contenidoArchivo = fs.readFileSync(rutaArchivo);

  const sql = 'INSERT INTO archivosExcel (usuario_id, nombre_archivo, contenido_archivo,matricula_admin) VALUES (?, ?, ?, ?)';
  db.query(sql, [userId, nombreArchivo, contenidoArchivo,matricula_admin], (err, result) => {
    if (err) {
      console.error('Error al guardar archivo en la base de datos:', err);
      cb(err, null);
    } else {
      console.log('Archivo Excel guardado en la base de datos');
      cb(null, result);
    }
  });
};

ContenidoXMLS.descargarExcel = (idArchivo, res) => {
  const sql = 'SELECT nombre_archivo, contenido_archivo, matricula_admin FROM archivosExcel WHERE id = ?';
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

    // Configurar el encabezado de la respuesta para indicar que es un archivo Excel
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(nombreArchivo)}"`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    // Enviar el contenido del archivo como respuesta
    res.send(contenidoArchivo);
  });
};

ContenidoXMLS.mostrarExcel = (cb) => {
    const sql = `
    SELECT id, usuario_id, nombre_archivo, ruta_archivo, matricula_admin, fecha_hora_subida
    FROM archivosExcel;
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al obtener los archivos Excel de la base de datos:', err);
            cb(err, null);
        } else {
            console.log('Archivos Excel obtenidos de la base de datos');
            cb(null, result);
        }
    });
};

ContenidoXMLS.eliminarExcel = (idArchivo, cb) => {
    const sql = 'DELETE FROM archivosExcel WHERE id = ?';
    db.query(sql, [idArchivo], (err, result) => {
      if (err) {
        console.error('Error al eliminar archivo Excel:', err);
        cb(err, null);
      } else {
        console.log('Archivo Excel eliminado de la base de datos');
        cb(null, result);
      }
    });
  };

module.exports = ContenidoXMLS;