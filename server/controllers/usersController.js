const User = require('../models/user');
const bcrypt = require('bcryptjs');

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


        if(contraseñaValida){
            const data = {
                id: myUser.id,
                nombre: myUser.nombre,
                apellido: myUser.apellido,
                email: myUser.email,
                telefono: myUser.telefono,
                imagen: myUser.imagen
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
    }

}