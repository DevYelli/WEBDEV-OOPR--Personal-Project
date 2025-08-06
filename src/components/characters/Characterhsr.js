import { useState } from "react";
import "./Characterhsr.css";
import characters from './data/data';
import bggi from './charbg/genbg.png'
import honsar from './charbg/hsrbg.png'
import headl from './charbg/hsrhd.png'

export default function Honkaisr () {
    const [activeHonkaisr, setActiveHonkaisr] = useState(0);

    const tabButtonHandler = (planetNum) => {
        setActiveHonkaisr(planetNum);
    };

    const tabButtonshsr = () => {
        return (
            <div className="tabButtonshsr">
                <button1 onClick={() => tabButtonHandler (0)} type = 'button'></button1>
                <br></br><br></br><br></br>
                <button2 onClick={() => tabButtonHandler (1)} type = 'button'></button2>
                <br></br><br></br><br></br>
                <button3 onClick={() => tabButtonHandler (2)} type = 'button'></button3>
                <br></br><br></br><br></br>
                <button4 onClick={() => tabButtonHandler (3)} type = 'button'></button4>
                <br></br><br></br><br></br>
                <button5 onClick={() => tabButtonHandler (4)} type = 'button'></button5>
                <br></br><br></br><br></br>
                <button6 onClick={() => tabButtonHandler (5)} type = 'button'></button6>
                <br></br><br></br><br></br>
                <button7 onClick={() => tabButtonHandler (6)} type = 'button'></button7>
                <br></br><br></br><br></br>
                <button8 onClick={() => tabButtonHandler (7)} type = 'button'></button8>
            </div>
        );
    };

    const leftImages = () => {
        return (
            <div>
                {activeHonkaisr === 0 && <img alt="" className="honstr" src={characters.danheng} /> } 
                {activeHonkaisr === 1 && <img alt="" className="honstr" src={characters.march} /> }
                {activeHonkaisr === 2 && <img alt="" className="honstr" src={characters.himeko} /> }
                {activeHonkaisr === 3 && <img alt="" className="honstr" src={characters.welt} /> }

                {activeHonkaisr === 4 && <img alt="" className="honstr1" src={characters.jing} /> } 
                {activeHonkaisr === 5 && <img alt="" className="honstr1" src={characters.qingque} /> }
                {activeHonkaisr === 6 && <img alt="" className="honstr1" src={characters.bailu} /> }
                {activeHonkaisr === 7 && <img alt="" className="honstr1 " src={characters.yanqing} /> }
            </div>
        );
    };

    const rightDesctiptions = () => {
        return(
            <div className="descriptionhsr">
                {activeHonkaisr=== 0 && (
                    <>
                    <div className="descriptionhsr_title">DAN HENG</div>
                    <div className="descriptionhsr_list">
                        <ul>
                        <li style={{textTransform: 'uppercase'}}>Path: The Hunt</li>
                    <div className="descriptionhsr_info">
                        <a>A cold and reserved young man who wields a spear known as Cloud-Piercer.</a>
                        <a><br></br>He acts as the Express's guard on its long trailblazing expedition. <br></br> Dan Heng never talks much about his past. <br></br>In fact, he joined the Express Crew to escape from it. <br></br>But, can the Express really help him outrun his past?</a>
                        <a></a>
                    </div>
                        </ul>
                    </div>
                    </>
                )}

                {activeHonkaisr === 1 && (
                    <>
                    <div className="descriptionhsr_title">MARCH 7TH</div>
                    <div className="descriptionhsr_list">
                        <ul>
                            <li style={{textTransform: 'uppercase'}}>Path: The Preservation</li>
                        <div className="descriptionhsr_info">
                            <a>A spirited, quirky young girl who is into all the things girls her age should be interested in, for example, taking photos. She was awakened from a piece of drifting eternal ice only to find out that she knows nothing about herself or her past. While initially in low spirits due to her lack of identity, she decided to name herself after the date she came into this new life. And thus, on that day March 7th was born.</a>
                        </div>
                        </ul>
                    </div>
                    </>
                )}

                {activeHonkaisr === 2 && (
                    <>
                    <div className="descriptionhsr_title" >HIMEKO</div>
                    <div className="descriptionhsr_list">
                        <ul>
                        <li style={{textTransform: 'uppercase'}}>Path: The Erudition</li>
                        <div className="descriptionhsr_info">
                        <a>An adventurous scientist who encountered the Astral Express as a child when it got stranded in her home world.</a>
                        <a>Years later, Himeko finally repaired the train and began her journey to the stars, but she realized that this was only the beginning. On her trailblazing journey, she would need many more companions...</a>
                        <a><br></br>And while they may have different destinations, they all the same starry sky.</a>
                        </div>
                        </ul>
                    </div>
                    </>
                )}  

                {activeHonkaisr === 3 && (
                    <>
                    <div className="descriptionhsr_title" >WELT</div>
                    <div className="descriptionhsr_list">
                        <ul>
                        <li style={{textTransform: 'uppercase'}}>Path: The Nihility</li>
                        <div className="descriptionhsr_info">
                        <a>The wise and experienced former Anti-Entropy Sovereign who inherits the name of the world Welt. He has saved Earth from annihilation time and time again.<br></br></a>
                        <a>After the incident with St. Fountain came to a close, Welt had no choice but to venture with the initiator of the incident to the other side of the portal.</a>
                        <a><br></br>Perhaps even he did not expect the new journey nor companions that awaited him there.</a>
                        </div>
                        </ul>
                    </div>
                    </>
                )}  

                {activeHonkaisr === 4 && (
                    <>
                    <div className="descriptionhsr_title1" >JING YUAN</div> 
                        <div className="descriptionhsr_info1">
                            <a>A Cloud Knight general who commands <br></br>the Xianzhou Luofu is more meticulous <br></br>than seemingly meets the eye. <br></br> <br></br></a>
                            <a>Type: Electro</a>
                        </div>                         
                    </>
                )}

                {activeHonkaisr === 5 && (
                    <>
                    <div className="descriptionhsr_title1" >QINGQUE</div>
                    <div className="descriptionhsr_info1">
                            <a>"When there's nothing else left to do, <br></br>why not bury your head in a book or <br></br>play cards? What more could I ask for?"<br></br> <br></br></a>
                            <a>Type: Diviner</a>
                        </div>  
                    </>
                )} 
                {activeHonkaisr === 6 && (
                    <>
                    <div className="descriptionhsr_title1" >BAILU</div>
                    <div className="descriptionhsr_info1">
                            <a>"As long as they're cured, that's all that<br></br>matters, right?"<br></br> <br></br></a>
                            <a>Type: Electro</a>
                        </div>  
                    </>
                )}
                {activeHonkaisr === 7 && (
                    <>
                    <div className="descriptionhsr_title1" >YANQING</div>
                    <div className="descriptionhsr_info1">
                            <a>The spirited lieutenant of the Xianzhou <br></br>Luofu, and also its most proficient <br></br>swordsman.<br></br> <br></br></a>
                            <a>Type: Cryo</a>
                        </div>  
                    </>
                )}       
            </div>
        );
    };

    return (
        
        <div className="honstar_section">
            {tabButtonshsr()}
            <div class='diag3'>'</div>
            <div class='btbg3'><img src = {headl}></img></div>
            <div class='bg'><img src = {honsar}></img></div>
            <div className="main">
                {leftImages()}
                {rightDesctiptions()}
            </div>
        </div>
        
    );
};