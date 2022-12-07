const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Username: { 
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
module.exports.Author = mongoose.model('Author', AuthorSchema);