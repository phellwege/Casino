//this holds cards for players to select a game to play
import React, { useEffect, useRef } from "react";
import './wallet.css';

export default () => {
    return (
        <>
            <div className="walletWrap">
                <div>
                    <h3>Balance</h3>
                    <p>$$$</p>
                </div>
                <div>
                    <p>Buy More Coins</p>
                    <button>Buy</button>
                </div>
            </div>
            <h4>lifetime Winnings</h4>
            <h3>$$$</h3>
        </>
    )
}

