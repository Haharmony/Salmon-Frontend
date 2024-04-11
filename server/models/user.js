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
                created_at,
                update_at 
            )
            VALUES(?,?,?,?,?,?,?,?)
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
        contraseña
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
        contraseña
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
/*User.Login = async (req,res)=>{

};*/
module.exports = User;