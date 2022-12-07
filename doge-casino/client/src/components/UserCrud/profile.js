//this holds cards for players to select a game to play
import React, { useEffect, useRef } from "react";
import LightBox from '../../components/lightBox';
import Avatar from '../../static/doge.PNG'
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
                    <div className="profileTopLeft">
                        <img src={Avatar} className="profileAvatar" onClick={lightBoxShow}/>
                    </div>
                    <LightBox/>
                    <div className="profileTopRight">
                        <h4>Bio</h4>
                        <p>here is where a bio will go</p>
                        <div>
                            Edit
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

