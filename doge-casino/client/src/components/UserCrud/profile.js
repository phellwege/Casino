//this holds cards for players to select a game to play
import React, { useEffect, useRef } from "react";
import './profile.css'

export default () => {
    return (
        <>
            <div className="profileWrapper">
                <h2>UserName</h2>
                <div className="profileDivs">
                    <div>
                        Profile Pic
                    </div>
                    <div>
                        Bio
                    </div>
                </div>
            </div>
        </>
    )
}

