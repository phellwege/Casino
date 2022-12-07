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
                    <ul>
                        <li>
                            <h4>10</h4>
                            <p>USD cost</p>
                            <button>Buy</button>
                        </li>
                        <li>
                            <h4>100</h4>
                            <p>USD cost</p>
                            <button>Buy</button>
                        </li>
                        <li>
                            <h4>1,000</h4>
                            <p>USD cost</p>
                            <button>Buy</button>
                        </li>
                    </ul>
                </div>
            </div>
            <h4>lifetime Winnings</h4>
            <h3>$$$</h3>
        </>
    )
}

