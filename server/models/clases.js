
const db = require('../config/config');

const Clases = {};

Clases.getClaseAlumno = (matricula, result) => {
    const sql = `
        SELECT 
        id_alumno,
        id_clase,
        nombre_alumno,
        apellido_alumno,
        matricula_clase,
        matricula_alumno
        FROM alumnos_clases
        WHERE matricula_alumno = ?;
    `;
    db.query(sql, [matricula], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Clases.getClaseMaestro = (matricula, result) => {
    const sql = `
        SELECT *
        FROM clases
        WHERE matricula_maestro = ?;
    `;
    db.query(sql, [matricula], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Clases.createClaseMaestro = (claseData, result) => {
    const {nombre_clase, descripcion, matricula_maestro,matricula_clase } = claseData;
    const sql = `
        INSERT INTO clases (nombre_clase, descripcion, matricula_maestro, matricula_clase )
        VALUES (?,?, ?, ?);
    `;
    db.query(
        sql, 
        [nombre_clase, descripcion, matricula_maestro,matricula_clase], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log('Clase creada con éxito');
            result(null, res.insertId);
        }
    });
};

Clases.insertarAlumnoClase = (alumnoClaseData, result) => {
    const { matricula_alumno, matricula_clase } = alumnoClaseData;
    const sql = `
        INSERT INTO alumnos_clases (matricula_alumno, matricula_clase)
        VALUES (?, ?);
    `;
    db.query(sql, [matricula_alumno, matricula_clase], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log('Asociación alumno-clase creada con éxito');
            result(null, res.insertId);
        }
    });
};

Clases.insertZoom = (linkData, result)=>{
    const{url, matricula_clase} = linkData;
    const sql = `
        INSERT INTO zoom (url, matricula_clase)
        VALUES(?,?);
    `;
    db.query(
        sql, 
        [url, matricula_clase], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log('Link Guardado');
            result(null, res.insertId);
        }
    });
};

Clases.getUltimoLinkZoom =  (matriculaAlumno, result) => {
    const query = `
        SELECT ac.matricula_clase, z.url
        FROM (
            SELECT ac.matricula_clase, MAX(z.id_url) AS max_id
            FROM alumnos_clases ac
            INNER JOIN zoom z ON ac.matricula_clase = z.matricula_clase
            WHERE ac.matricula_alumno = ?
            GROUP BY ac.matricula_clase
        ) AS latest_link
        INNER JOIN zoom z ON latest_link.max_id = z.id_url
        INNER JOIN alumnos_clases ac ON z.matricula_clase = ac.matricula_clase
        WHERE ac.matricula_alumno = ?;
    `;
    db.query(query, [matriculaAlumno, matriculaAlumno], (error, results, fields) => {
        if (error) {
            console.log('Error: ', error);
            result(error, null);
        } else {
            result(null, results);
        }
    });
};

module.exports = Clases;