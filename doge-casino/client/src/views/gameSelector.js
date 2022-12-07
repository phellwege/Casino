//this holds cards for players to select a game to play
import React, { useEffect, useRef } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import SelectAGame from "../components/selectAGame";

export default () => {
    return (
        <>
            <Header/>
                <div>
                    <SelectAGame/>
                </div>
            <Footer/>
        </>
    )
}

