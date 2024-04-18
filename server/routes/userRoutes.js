const userController = require('../controllers/usersController');

module.exports = (app) => {
    //GET -> obtener datos
    //post -> almacenar datos
    //put -> actualizar datos
    //Delete -> eliminar datos
    app.post('/api/users/create', userController.register);
    app.post('/api/users/login', userController.login);
    app.get('/api/users/directory',userController.directory);
    app.get('/api/users/findByRole', userController.findByRole); // Ruta para buscar usuarios por rol
    app.put('/api/users/update', userController.update);
}