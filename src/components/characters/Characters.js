import { useState } from "react";
import "./Characters.css";
import characters from './data/data';
import hi3 from './charbg/hi3logo.png'
import bg from './charbg/hi3.png'


export default function Planets () {
    const [activePlanet, setActivePlanet] = useState(0);

    const tabButtonHandler = (planetNum) => {
        setActivePlanet(planetNum);
    };

    const tabButtons = () => {
        return (
            <div className="tabButtons">
                <button1 onClick={() => tabButtonHandler (0)} type = 'button'></button1>
                <button2 onClick={() => tabButtonHandler (1)} type = 'button'></button2>
                <button3 onClick={() => tabButtonHandler (2)} type = 'button'></button3>
                <button4 onClick={() => tabButtonHandler (3)} type = 'button'></button4>
                <button5 onClick={() => tabButtonHandler (4)} type = 'button'></button5>
                <button6 onClick={() => tabButtonHandler (5)} type = 'button'></button6>
                <button7 onClick={() => tabButtonHandler (6)} type = 'button'></button7>
            </div>
        );
    };

    const leftImages = () => {
        return (
            <div>
                {activePlanet === 0 && <img alt="" className="planet" src={characters.kiana} /> } 
                {activePlanet === 1 && <img alt="" className="planet" src={characters.rai} /> }
                {activePlanet === 2 && <img alt="" className="planet" src={characters.see} /> }
                {activePlanet === 3 && <img alt="" className="planet" src={characters.roz} /> }
                {activePlanet === 4 && <img alt="" className="planet" src={characters.dur} /> }
                {activePlanet === 5 && <img alt="" className="planet" src={characters.the} /> }
                {activePlanet === 6 && <img alt="" className="planet" src={characters.rit} /> }
            </div>
        );
    };

    const rightDesctiptions = () => {
        return(
            <div className="description">
                {activePlanet === 0 && (
                    <>
                    <div className="description_title">KIANA KASLANA</div>
                    <div className="description_list">
                        <ul>
                            <li0 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Herrscher of Flamescion</li0>
                            <li style={{fontSize:'15px'}}>K-423, also called Kiana Kaslana, is the heroine and the initial character in the game "Honkai Impact 3rd". <br></br> <br></br>She is the adoptive daughter of Siegfried Kaslana, alongside being a vessel for the 2nd Herrscher — Herrscher of the Void. After the events of Chapter 25, she awakens as the Herrscher of Flamescion.</li>
                        </ul>
                    </div>
                    </>
                )}

                {activePlanet === 1 && (
                    <>
                    <div className="description_title">RAIDEN MEI</div>
                    <div className="description_list">
                        <ul>
                            <li1 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Herrscher of Thunder</li1>
                            <li style={{fontSize:'15px'}}>She's the daughter of Raiden Ryoma, the CEO of Massive Electric Corp, making her an heiress. <br></br> <br></br>  Raiden Mei is an A-rank Valkyrja and the Herrscher of Thunder that awakened in Nagazora City, Japan. She is the natural 3rd Herrscher of the Current Era and a member of the St. Freya team.</li>
                        </ul>
                    </div>
                    </>
                )}

                {activePlanet === 2 && (
                    <>
                    <div className="description_title" >SEELE VOLLEREI</div>
                    <div className="description_list">
                        <ul>
                            <li3 style={{fontWeight:'bold', textTransform: 'uppercase'}}>STYGIAN NYMPH</li3>
                            <li style={{fontSize:'15px'}}>Seele Vollerei herself is a gentle, sweet, kind, and caring girl, although being rather weak, as she was unable to stand up for herself or for Bronya when both were being bullied by Sin Mal.  <br></br> <br></br> With a Honkai mark, she is inherently highly adaptable to Honkai and exhibits greater ability to manipulate the Honkai than others.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activePlanet === 3 && (
                    <>
                    <div className="description_title" >ROZALIYA OLENYEVA</div>
                    <div className="description_list">
                        <ul>
                            <li4 style={{fontWeight:'bold', textTransform: 'uppercase'}}>STYGIAN NYMPH</li4>
                            <li style={{fontSize:'15px'}}>Rozaliya is a very energetic and outgoing girl. She's prone to exaggerating her experiences, and creating false recounts of them.<br></br> <br></br> Rozaliya is very caring towards her friends as well, but her tendency to butt into situations, as well as her airheaded behavior tends to get them rather annoyed with her. In trying to help, she unintentionally causes trouble.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activePlanet === 4 && (
                    <>
                    <div className="description_title" >DURANDAL</div>
                    <div className="description_list">
                        <ul>
                            <li5 style={{fontWeight:'bold', textTransform: 'uppercase'}}>PALATINUS EQUINOX</li5>
                            <li style={{fontSize:'15px'}}>Durandal was shown to be mature, quick at making decisions, and a little hot-headed when she was 12.<br></br> <br></br> Durandal is very serious about her work as a high-ranking officer and Valkyrja within the Schicksal organization. Her nickname, Durandal, is the name of a sword she and Rita met four years ago in Quantum Sea. The sword's previous owner was Rowland, a paladin of Charlemagne.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activePlanet === 5 && (
                    <>
                    <div className="description_title" >THERESA APOCALYPSE</div>
                    <div className="description_list">
                        <ul>
                            <li6 style={{fontWeight:'bold', textTransform: 'uppercase'}}>TWILIGHT PALADIN</li6>
                            <li style={{fontSize:'15px'}}>She has a similar personality and attitude as Kallen, which made Otto originally believe she could truly be her reincarnation. She is kind and cares about the well-being of others, though she can be also stubborn. <br></br> <br></br>A-310 was born in 1972 in an attempt by Otto Apocalypse to revive Kallen Kaslana. She was created by using the genes of a Honkai Beast Vishnu and Kallen's DNA.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activePlanet === 6 && (
                    <>
                    <div className="description_title" >RITA ROSSWEISSE</div>
                    <div className="description_list">
                        <ul>
                            <li7 style={{fontWeight:'bold', textTransform: 'uppercase'}}>SPINA ASTERA</li7>
                            <li style={{fontSize:'15px'}}>Rita Rossweisse is an S-Rank Valkyrie, lieutenant of the Immortal Blades, the most powerful Valkyrie Squad of Schicksal. She's the adjutant and an important friend of the Valkyrie Durandal.<br></br> <br></br> Nevertheless, Rita is a kind person who will always save lives whenever she can despite her more violent method in solving problems.</li>
                        </ul>
                    </div>
                    </>
                )}  
            </div>
        );
    };

    return (
        
        <div className="planets_section">
            {tabButtons()}
            <div class='diag'>'</div>
            <div class='btbg'>'</div>
            
            <div class='bg'><img src = {bg}></img></div>
            <div class='hi3logo'><img src={hi3}></img>
            </div>
            <div className="main">
                {leftImages()}
                {rightDesctiptions()}
            </div>
        </div>
        
    );
};