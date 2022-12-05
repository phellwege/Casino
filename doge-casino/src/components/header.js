import React from 'react';
import logo from '../static/Logo.PNG'
import './header.css'

export default () => {
    return (
        <>
            <div className="headerWrap">
                <div className="headerLeft">
                    Left
                </div>
                <div className="headerRight">
                    <img src={logo} alt='logo' id='headerLogo'/>
                </div>
            </div>
        </>
    )
}