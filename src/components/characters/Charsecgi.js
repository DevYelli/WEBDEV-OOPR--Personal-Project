import React from "react";
import "./Charsecgi.css"
import { GiDiamonds } from 'react-icons/gi';
import { BsFillXDiamondFill } from 'react-icons/bs';
import sechi3l from './charbg/hi3logo.png'
import secgil from './charbg/gilogo.png'
import seczzzl from './charbg/zzzlogo.png'
import sechstrl from './charbg/hstr.png'

export default function Charsec(){
    return(
        <nav class = "secgi">
            <div class = "gipg">`</div>
            <a class = "gryscl1" href="http://localhost:3000/chars" ><img src = {sechi3l}></img></a>
            <a class = "hstrl1" href="http://localhost:3000/gichars" ><img src = {secgil}></img></a>
            <a class = "gryscl1" href="http://localhost:3000/zenchars"><img src = {seczzzl}></img> </a>
            <a class = "gryscl1" href="http://localhost:3000/starchars"><img src = {sechstrl}></img></a>


            {/*<div class = "des"><img src= {des}></img></div>*/}
        </nav>     
        
    );
};

