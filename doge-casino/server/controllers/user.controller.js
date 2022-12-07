const user = require('../models/userModel');
module.exports = {
    index:(request, response) => {
        User.find().sort({name:1})
        .then(data => response.json({results:data}))
        .catch(err => response.json(err.errors));
},
createUser: (request, response) => {
    User.create( request.body )
        .then(data => response.json(data))
        .catch(err => {
            response.status(400).json(err);
        });
        
},

getUser: (request, response) => {
    User.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

getAllUsers: (request, response) => {
    User.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

updateExistingUser: (request, response) => {
    User.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingAuthor => response.json(updateExistingAuthor))
        .catch(err => response.json(err.errors));
},

deleteUser: (request, response) => {
    User.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}