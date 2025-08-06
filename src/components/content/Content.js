import React from "react";
import './Content.css';
import gp from './ctimg/gp.png'
import ps5 from './ctimg/ps5.png'
import win from './ctimg/win.png'
import bg from './ctimg/banimg.png'



export default function Content(){
    return(
        <nav class = "content">
            <div class = "welcome" id="home">
                <a>WE'RE FLYING<br></br>WITH YOU IN OUR HEARTS</a> 
            </div>
            <div class = "box">
                <img src= {gp}></img>
                <img src= {ps5}></img>
                <img src= {win}></img>
            </div>

            <div class = "ban">
            <img src= {bg}></img>
            </div>
        </nav>      
    );
};