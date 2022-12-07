const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [ true,"Something must be inputted"],
        minlength: [3, "name must be at least 3 characters"]
    },
    avatar: {
        type: Object,
        required: [ true,""],
        default: '../../client/src/static/doge.PNG'
    },
    walletBalance: {
        type: Number,
        required: [ true, ""],
        default: 0
    }
}, { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);