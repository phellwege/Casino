const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.get('/api', UserController.index);
    app.get('/api/authors', UserController.getAllUsers);
    app.post('/api/author', UserController.createUser);
    app.put("/api/author/:id/edit", UserController.updateExistingUser);
    app.delete('/api/author/delete/:id', UserController.deleteUser);
    app.get('/api/authors/:id', UserController.getUser);
}