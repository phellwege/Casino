//this shows currently selected game that the player wants to play
import React, { useEffect, useRef } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import ChoosePup from "../components/UserCrud/choosePup";

export default () => {
    return (
        <>
            <Header/>
                <ChoosePup/>
            <Footer/>
        </>
    )
}

