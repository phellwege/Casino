import React, { useEffect, useState } from 'react';
import './lightbox.css';
import {MdClose} from 'react-icons/md';
import ChoosePup from "./UserCrud/choosePup";

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
        <div className="lightBoxWrap">
            <div className="lightBoxBox">
                <MdClose id='closeIcon' onClick={lightBoxShow} alt='close icon' size={30}/>
                <div className="lightBoxContainer">
                    <ChoosePup/>
                    <div className='lightBoxText'>
                        <h4 id='lightboxReturn' onClick={lightBoxShow}>Return</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}