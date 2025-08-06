import React from "react";
import './Footer.css';

import logo from './ftimg/logo.png'
import teen from './ftimg/teen.png'
import geni from './ftimg/geni.png'
import hstr from './ftimg/hoyologo.png'
import sr from './ftimg/sr.png'
import zzzftl from './ftimg/zzzlogo.png'
import hi3ftl from './ftimg/hi3logo.png'


export default function Footer(){
    return(

        <nav class = "footer">
            <a class = "logoft"><img src= {logo}></img></a>
            <div class = "about">

                <a>Home</a>
                <a>User Agreement</a>
                <a>About Us</a>
                <a>Terms of Services</a>
                <a>Privacy Policy</a>

            </div>


            <a class = "logoft1">
                <img src= {teen}></img>
                </a>

            <div class = "about2">
            <a>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. <br></br>Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.</a>
            </div>

            <div class = "crdts">
            <a class = "credits">
            <img src= {hstr}></img>
            </a>
            </div>

            

            <div class = "about1">
            <a>COPYRIGHT © COGNOSPHERE. ALL RIGHTS RESERVED. </a>
            </div>
            
        </nav>      
    );
};