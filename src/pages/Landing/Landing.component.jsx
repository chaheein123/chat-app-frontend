import React, { useState } from 'react';
import './Landing.styles.scss';
import { SignIn } from "../../components/SignIn/SignIn.component";

export const Landing = () => {

    return (
        <div className="Landing">

            <div className="navbar">
                {/* <img src="ichatLogo.png" /> */}
                <div className="navbar-items"><p>Why ichat?</p></div>
                <div className="navbar-items"><p>Solutions</p></div>
                <div className="navbar-items"><p>Resources</p></div>
                <div className="navbar-items"><p>Pricing</p></div>
                <div className="navbar-items"><p>Contacts</p></div>
            </div>

            <div className="Landing-background-pic">
                <SignIn />
            </div>










        </div>
    )

};