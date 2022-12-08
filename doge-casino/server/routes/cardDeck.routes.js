const CardDeckController = require('../controllers/cardDeck.controller');
module.exports = function(app){
    app.get('/api', CardDeckController.index);
    app.get('/api/cardDecks', CardDeckController.getAllCardDecks);
    app.post('/api/cardDeck', CardDeckController.createCardDeck);
    app.put("/api/cardDeck/:id/edit", CardDeckController.updateExistingCardDeck);
    app.delete('/api/cardDeck/delete/:id', CardDeckController.deleteCardDeck);
    app.get('/api/cardDecks/:id', CardDeckController.getCardDeck);
}