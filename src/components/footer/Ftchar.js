import React from "react";
import './Ftchar.css';

import logo from './ftimg/logo.png'
import teen from './ftimg/teen.png'
import geni from './ftimg/geni.png'
import hstr from './ftimg/hoyologo.png'
import sr from './ftimg/sr.png'
import zzzftl from './ftimg/zzzlogo.png'
import hi3ftl from './ftimg/hi3logo.png'

export default function Ftchar(){
    return(

        <nav class = "ft1">
            <a class = "lgt1"><img src= {logo}></img></a>
            <div class = "abts1">

                <a>Home</a>
                <a>User Agreement</a>
                <a>About Us</a>
                <a>Terms of Services</a>
                <a>Privacy Policy</a>

            </div>


            <a class = "lgt2">
                <img src= {teen}></img>
                </a>

            <div class = "abts3">
            <a>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc. <br></br>Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.</a>
            </div>

            <div class = "crdtz1">
            <a class = "creditz1">
            <img src= {hstr}></img>
            </a>
            </div>

            

            <div class = "abts2">
            <a>COPYRIGHT © COGNOSPHERE. ALL RIGHTS RESERVED. </a>
            </div>
            
        </nav>      
    );
};