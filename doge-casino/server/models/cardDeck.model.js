const mongoose = require('mongoose');
const CardDeckSchema = new mongoose.Schema({
    card: { 
        type: object,
        required: true,
        minlength: [3, "name must be at least 3 characters"]
    }
}, { timestamps: false });
module.exports.CardDeck = mongoose.model('CardDeck', CardDeckSchema);