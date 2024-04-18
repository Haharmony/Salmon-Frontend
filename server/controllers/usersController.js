const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {

    register(req, res){

        const user = req.body; // Se capturan los datos que envie el cliente
        User.create(user, (err, data)=>{

            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error registrando al usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Se registro al usuario',
                data: data //El ID del nuevo usuario que se registro
            });
        });
    },

login(req, res){

    const email = req.body.email;
    const contraseña = req.body.contraseña;

    User.findByEmail(email, async (err, myUser)=>{

        if(err){
            return res.status(501).json({
                success: false,
                message: 'Hubo un error registrando al usuario',
                error: err
            });
        }
        if(!myUser){
            return res.status(401).json({ //Error 401 es que el cliente no tiene autorizacion
                success: false,
                message: 'El email no fue encontrado'
            });
        }

        const contraseñaValida = await bcrypt.compare(contraseña, myUser.contraseña);
        let contraseñaDef = false;
        if(contraseña==myUser.contraseña){
            contraseñaDef = true;
        };

        if(contraseñaValida || contraseñaDef){
            const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey,{});
            const data = {
                id: myUser.id,
                nombre: myUser.nombre,
                apellido: myUser.apellido,
                email: myUser.email,
                telefono: myUser.telefono,
                imagen: myUser.imagen,
                rol: myUser.rol,
                matricula: myUser.matricula,
                session_token: `JWT ${token}`
            }
            return res.status(201).json({
                success: true,
                message: 'El usuario fue autenticado ',
                data: data //El ID del nuevo usuario que se registro
            });
        }
        else{
            
                return res.status(401).json({ //Error 401 es que el cliente no tiene autorizacion
                    success: false,
                    message: 'Contraseña incorrecta'
                });
            
        }
        
    });
    },
    directory(req, res){
        User.directory(req, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar usuarios',
                    error: err
                });
            }
    
            if (!data || data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron usuarios'
                });
            }
    
            return res.status(200).json({
                success: true,
                message: 'Usuarios encontrados exitosamente',
                data: data
            });
        });
    },
    findByRole(req, res) {
        const rol = req.query.rol; // Obtenemos el rol desde los parámetros de la URL
        User.findByRol(rol, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar usuarios por rol',
                    error: err
                });
            }

            if (!data || data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron usuarios con ese rol'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Usuarios encontrados por rol exitosamente',
                data: data
            });
        });
    },
    update(req, res) {
        const userId = req.body.id; // Obtener el ID del usuario de los parámetros de la URL
        const updatedUserData = req.body; // Obtener los datos actualizados del usuario del cuerpo de la solicitud

        User.update(userId, updatedUserData, (err, rowsAffected) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al actualizar el usuario',
                    error: err
                });
            }

            if (rowsAffected === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontró el usuario para actualizar'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Usuario actualizado exitosamente'
            });
        });
    }
}

