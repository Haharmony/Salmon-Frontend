const db = require('../config/config');
const bcrypt = require('bcryptjs'); //libreria necesaria encriptado de constraseñas npm i bcryptjs

const User = {};

User.create = async (user, result) =>{

   const hash = await bcrypt.hash(user.contraseña,10);
    const sql = `
        INSERT INTO 
            users(
                email,
                nombre,
                apellido,
                telefono,
                imagen,
                contraseña,
                rol,
                matricula,
                created_at,
                update_at 
            )
            VALUES(?,?,?,?,?,?,?,?,?,?)
    `;

    db.query
    (
        sql,
        [
            user.email,
            user.nombre,
            user.apellido,
            user.telefono,
            user.imagen,
            hash,
            user.rol,
            user.matricula,
            new Date(),
            new Date()
        ],
        (err, res)=>{
             if(err){
                console.log('Error: ', err);
                result(err, null);
             }
             else{
                console.log('ID del nuevo usuario: ', res.insertId);
                result(null, res.insertId);
             }
        }        
    )
};

User.findById = (id, result)=>{

    const sql  = `
    SELECT
        id,
        email,
        nombre,
        apellido,
        imagen,
        contraseña,
        rol,
        matricula
    FROM
         users
    WHERE
    id = ? 
    `;

    db.query(
        sql,
        [id],
        (err, user)=>{
            if(err){
               console.log('Error: ', err);
               result(err, null);
            }
            else{
               console.log('Usuario obtenido: ', user[0]);
               result(null, user[0]);
            }
        }
    )
    
};


User.findByEmail = (email, result)=>{

    const sql  = `
    SELECT
        id,
        email,
        nombre,
        apellido,
        imagen,
        contraseña,
        rol,
        matricula
    FROM
         users
    WHERE
    email = ? 
    `;

    db.query(
        sql,
        [email],
        (err, user)=>{
            if(err){
               console.log('Error: ', err);
               result(err, null);
            }
            else{
               console.log('Usuario obtenido: ', user[0]);
               result(null, user[0]);
            }
        }
    )
    
};

User.directory = (req, result)=>{

    const sql = `
        SELECT
        email,
        nombre,
        apellido,
        rol,
        contraseña,
        matricula
    FROM
         users
    `;
    db.query(sql, (err, users) => {
        if(err){
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log('Usuarios obtenidos: ', users);
            result(null, users);
        }
    });
};


User.findByRol = (rol, result)=>{
    const sql  = `
    SELECT
        id,
        email,
        nombre,
        apellido,
        imagen,
        contraseña,
        matricula,
        telefono
    FROM
         users
    WHERE
    rol = ? 
    `;
    db.query(
        sql,
        [rol],
        (err, users)=>{
            if(err){
               console.log('Error: ', err);
               result(err, null);
            }
            else{
               console.log('Usuario obtenido: ', users);
               result(null, users);
            }
        }
    )
};
User.update = async (id, updatedUserData, result) => {
    const hash = await bcrypt.hash(updatedUserData.contraseña,10);
    const sql = `
    UPDATE users
    SET 
        email = ?,
        nombre = ?,
        apellido = ?,
        telefono = ?,
        imagen = ?,
        contraseña=?,
        matricula = ?,
        tiene_certificado

    WHERE id = ?
`;
   
    db.query(
        sql,
        [
            updatedUserData.email,
            updatedUserData.nombre,
            updatedUserData.apellido,
            updatedUserData.telefono,
            updatedUserData.imagen,
            hash,
            updatedUserData.matricula,
            updatedUserData.tiene_certificado,
           
            id
        ],
        (err, res) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null);
            } else {
                console.log('Usuario actualizado');
                result(null, res.affectedRows); // Devuelve el número de filas afectadas
            }
        }
    );
};

module.exports = User;