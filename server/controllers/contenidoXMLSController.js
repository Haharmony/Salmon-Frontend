const ContenidoXMLS = require('../models/contenidoXMLS');

module.exports = {
  subirExcel(req, res) {
    const nombreArchivo = req.file.originalname;
    const rutaArchivo = req.file.path;
    const userId = req.body.userId;
    const matricula_admin = req.body.matricula_admin;

    ContenidoXMLS.subirExcel(nombreArchivo, rutaArchivo, userId, matricula_admin, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al guardar archivo en la base de datos',
          error: err
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Archivo Excel subido exitosamente',
        data: result
      });
    });
  },

  descargarExcel(req, res) {
    const idArchivo = req.query.idArchivo;

    ContenidoXMLS.descargarExcel(idArchivo, res);
  },

  mostrarExcel(req, res){
    ContenidoXMLS.mostrarExcel((err, result) => {
        if (err) {
            console.error('Error al obtener los archivos Excel:', err);
            res.status(500).json({
                success: false,
                message: 'Error al obtener los archivos Excel'
            });
        } else {
            res.status(200).json({
                success: true,
                data: result
            });
        }
    });
},

eliminarExcel(req, res) {
    const idArchivo = req.query.idArchivo;
  
    ContenidoXMLS.eliminarExcel(idArchivo, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al eliminar archivo Excel en la base de datos',
          error: err
        });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Archivo Excel eliminado exitosamente de la base de datos',
        data: result
      });
    });
  }
  
};