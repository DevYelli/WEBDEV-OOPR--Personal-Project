import React from "react";
import './Loginbg.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import play from './play.png'
import ReactAudioPlayer from "react-audio-player";
 
export default function Loginbg(){
    return(
        <nav className="loginbg">
            <a>
                <div className="hi3vid">
                    <img src="t3bg.jpg" alt="background" />
                </div>
            </a>
            <div><img src= {play}></img></div>
            <div class='plicon'><a href= "http://localhost:3000/login"><AiFillPlayCircle/></a></div>
        </nav>      
    );
};