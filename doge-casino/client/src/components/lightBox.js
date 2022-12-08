import React, { useEffect, useState } from 'react';
import './lightbox.css';
import {MdClose} from 'react-icons/md';
import ChoosePup from "./UserCrud/choosePup";

export default (props) => {
        
    const lightBoxShow = () => {
        const x = document.getElementsByClassName('lightBoxWrap')[0];
        if(x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
}
const {active}=props;

    return (
        <div className="lightBoxWrap">
            <div className="lightBoxBox">
                <MdClose size={30} id='closeIcon' onClick={lightBoxShow}/>
                <div className="lightBoxContainer">
                    <ChoosePup/>
                </div>
            </div>
        </div>
    )
}