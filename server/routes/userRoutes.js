const userController = require('../controllers/usersController');

module.exports = (app) => {
    //GET -> obtener datos
    //post -> almacenar datos
    //put -> actualizar datos
    //Delete -> eliminar datos
    app.post('/Salmon-Frontend/api/users/create', userController.register);
    app.post('/Salmon-Frontend/api/users/login', userController.login);
    app.get('/Salmon-Frontend/api/users/directory',userController.directory);
    app.get('/Salmon-Frontend/api/users/findByRole', userController.findByRole); // Ruta para buscar usuarios por rol
    app.put('/Salmon-Frontend/api/users/update', userController.update);
}