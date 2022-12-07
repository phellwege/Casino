import React from 'react';
import logo from '../static/Logo.PNG'
import './header.css'

export default () => {
    return (
        <>
            <div className="headerWrap">
                <div className="headerLeft">
                    <ul>
                        <li>
                            <h3>
                                <a href='/gameSelector'>Select a Game</a>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <a href='/userProfile'>Profile</a>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <a href='/'>this</a>
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className="headerRight">
                    <a href='/'>
                        <img src={logo} alt='logo' id='headerLogo'/>
                    </a>
                </div>
            </div>
        </>
    )
}