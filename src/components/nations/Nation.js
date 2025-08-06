import React from "react";
import './Nation.css';
import mons from './mons.jpg';
import liy from './liy.jpg';
import inazu from './inazu.jpg';
import sum from './sum.jpg';


export default function Nations(){
    return(
        <>
        <div className="cardn" >
        <a class="ginations">
        <a>MONDSTADT</a><img src= {mons}></img>
        </a>


        <a class="ginations">
        <a>LIYUE</a><img src= {liy}></img>   
        </a>
        

        <a class="ginations">
            <a>INAZUMA</a><img src= {inazu}></img>
            
        </a>
        

        <a class="ginations">
        <a>SUMERU</a><img src= {sum}></img>
        </a>
        
        </div>
        </>
    )
}