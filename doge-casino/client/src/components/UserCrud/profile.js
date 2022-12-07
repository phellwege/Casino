//this holds cards for players to select a game to play
import React, { useEffect, useRef } from "react";
import LightBox from '../../components/lightBox';
import './profile.css'

export default (props) => {
    const lightBoxShow = () => {
        const x = document.getElementsByClassName('lightBoxWrap')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
}
const {active}=props;

    return (
        <>
            <div className="profileWrapper">
                <h2>UserName</h2>
                <div className="profileDivs">
                    <div onClick={lightBoxShow}>
                        Profile Pic
                    </div>
                    <LightBox/>
                    <div>
                        Bio
                    </div>
                </div>
            </div>
        </>
    )
}

