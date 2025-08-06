import React from "react";
import "./Charsechsr.css"
import { GiDiamonds } from 'react-icons/gi';
import { BsFillXDiamondFill } from 'react-icons/bs';
import sechi3l from './charbg/hi3logo.png'
import secgil from './charbg/gilogo.png'
import seczzzl from './charbg/zzzlogo.png'
import sechstrl from './charbg/hstr.png'

export default function Charsec(){
    return(
        <nav class = "sechsr">
            <div class = "hsrpg">`</div>
            <a class = "gryscl" href="http://localhost:3000/chars" ><img src = {sechi3l}></img></a>
            <a class = "gryscl" href="http://localhost:3000/gichars" ><img src = {secgil}></img></a>
            <a class = "gryscl" href="http://localhost:3000/zenchars"><img src = {seczzzl}></img> </a>
            <a class = "hstrl" href="http://localhost:3000/starchars"><img src = {sechstrl}></img></a>


            {/*<div class = "des"><img src= {des}></img></div>*/}
        </nav>     
        
    );
};

