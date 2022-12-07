//user view, create or edit of current profile
import React, { useEffect, useRef } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/UserCrud/profile';
import ChoosePup from "../components/UserCrud/choosePup";
import Wallet from '../components/UserCrud/wallet';

export default () => {
    return (
        <>
            <Header/>
                <Profile/>
                <Wallet/>
            <Footer/>
        </>
    )
}

