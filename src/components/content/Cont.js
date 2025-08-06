import React from "react";
import './Cont.css';
import honim from './ctimg/hi3.png'
import genim from './ctimg/gi.png'
import zenze from './ctimg/zenze.png'
import honstar from './ctimg/hons.png'

import multi from './ctimg/multi.png'
import gamp from './ctimg/gamp.png'
import char from './ctimg/char.png'

import gold from './ctimg/gold.png'
import gold1 from './ctimg/gold1.png'
import blck from './ctimg/blck.png'

import danh from './ctimg/danh.png'
import msev from './ctimg/mseven.png'
import hime from './ctimg/hime.png'
import welt from './ctimg/welt.png'

import kia from './ctimg/ilb.png'

import { GiDiamonds } from 'react-icons/gi';

export default function Content(){
    return(
        <nav class = "verse" >
            <div className = "cont1">
            <a href="http://localhost:3000/chars" ><img src= {honim}></img></a>
            <a href="http://localhost:3000/gichars" ><img src= {genim}></img></a>
            <a href="http://localhost:3000/zenchars"><img src= {zenze}></img></a>
            <a href="http://localhost:3000/starchars"><img src= {honstar}></img></a>
            
            <a class = "hi3" href="http://localhost:3000/chars">HONKAI IMPACT 3</a>
            <a class = "gi" href="http://localhost:3000/gichars">GENSHIN IMPACT</a>
            <a class = "zzz" href="http://localhost:3000/zenchars">ZENLESS ZERO ZONE</a>
            <a class = "hsr" href="http://localhost:3000/starchars">HONKAI: STAR RAIL</a>
            </div>
            <div class = "cont">                 
            <img src= {multi}></img>
            </div>

            <div class = "tl1">                 
            <img src= {gold}></img>
            </div>

            <div class = "tl3" >                 
            <img src= {blck}></img>
            </div>

            <div class = "tl">                 
            <img src= {gold1}></img>
            </div>

            <div class = "gpinfo">
                <a style={{textTransform: 'uppercase'}}>An Epic Fantasy Adventure</a>
            </div>

            <div class = "gpinfo1">
                <a style={{textTransform: 'uppercase'}}>Your World to Discover</a>
            </div>

            <div class = "gpinfo2">
                <a style={{textTransform: 'uppercase'}}>Travel Alone or Battle Together</a>
            </div>

            <div class = "gpinfo3">
                <a style={{textTransform: 'uppercase'}}>Build Your Dream Team</a>
            </div>


            <div class = "diamhm">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm1">
                <a><GiDiamonds/></a>
           
            </div>

            <div class = "diamhm2">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm3">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm4">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm5">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm6">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm7">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm8">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm9">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm1">
                <a><GiDiamonds/></a>
           
            </div>

            <div class = "diamhm2">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm3">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm4">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm5">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm6">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm7">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm8">
                <a><GiDiamonds/></a>
            </div>

            <div class = "diamhm9">
                <a><GiDiamonds/></a>
            </div>

            


            
            
            <div class="rai" id="gameplay">
            <img src= {kia}></img>
            </div>

            <div class = "cont3">                 
            <img src= {char}></img>
            </div>
            
            <div class ="chars1" id="characters">
                <img src= {danh} ></img>
                <img src= {msev}></img>
                <img src= {hime}></img>
                <img src= {welt}></img>

            <a class = "dh" >DAN HENG</a>
            <a class = "ms">MARCH 7TH</a>
            <a class = "hm">HIMEKO</a>
            <a class = "wt">WELT</a>
            
            </div>

        </nav>      
    );
};