// this card contains logic and game of blackjack
import {GiPokerHand} from 'react-icons/fa'
import React from 'react';

export default () => {

// let card = [face, value, picture] //52 of these in database
// let face = [clubs, hearts, diamonds, spades]
// let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, Jack, Queen, King, Ace]
// let cardDeck = [
//     // all 52 cards 
//     while(cardDeck.length <= 52) {
//         forEach(face) {
//             cardDeck.push(face) + .push(value)
//         }}return cardDeck
// ]
// let userCard = [userCard.push(Math.random(cardDeck)), userCard.push(Math.random(cardDeck))] //picks two random cards
// let playersPerTable = [dealer, bigBlind, smallBlind, optional1, optional2, optional3, optional4] //fills from left to right 2-7 total

// table => cardDeck => card => players => userCard/wallet/bet => win/lose => recalc wallet/reset cardDeck => 

    return (
        <>
            <div className="blackJackWrap">
                    <GiPokerHand/>
            </div>
        </>
    )
}