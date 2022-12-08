const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [ true,"Something must be inputted"],
        minlength: [3, "name must be at least 3 characters"]
    },
    avatar: {
        type: object,
        required: [ true,""],
        default: '../../client/src/static/doge.PNG'
    },
    balance: {
        type: Number,
        required: [ true, ""],
        default: 0
    },
    bio: {
        type: String,
        required: [ true, ""],
        default: 'write your own bio here',
        minlength: [5, 'bio must be at least 5 characters']
    }
}, { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);