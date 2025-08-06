import { useState } from "react";
import "./Characterzen.css";
import characters from './data/data';
import bggi from './charbg/genbg.png'
import zenim from './charbg/zenbg.png'
import zlog from './charbg/zenlo.png'
import zlog1 from './charbg/zzzlogo.png'
import zlogi from './charbg/dfdawd.png'

export default function Zenless () {
    const [activeZenless, setActiveZenless] = useState(0);

    const tabButtonHandler = (planetNum) => {
        setActiveZenless(planetNum);
    };

    const tabButtonszen = () => {
        return (
            <div className="tabButtonszen">
                <button1 onClick={() => tabButtonHandler (0)} type = 'button'></button1>
                <button2 onClick={() => tabButtonHandler (1)} type = 'button'></button2>
                <button3 onClick={() => tabButtonHandler (2)} type = 'button'></button3>
                <button4 onClick={() => tabButtonHandler (3)} type = 'button'></button4>
                <button5 onClick={() => tabButtonHandler (4)} type = 'button'></button5>
            </div>
        );
    };

    const leftImages = () => {
        return (
            <div>
                {activeZenless === 0 && <img alt="" className="zen" src={characters.soukaku} /> } 
                {activeZenless === 1 && <img alt="" className="zen" src={characters.hoshi} /> }
                {activeZenless === 2 && <img alt="" className="zen" src={characters.billy} /> }
                {activeZenless === 3 && <img alt="" className="zen" src={characters.koleda} /> }
                {activeZenless === 4 && <img alt="" className="zen" src={characters.von} /> }
                {activeZenless === 5 && <img alt="" className="zen" src={characters.billy} /> }
                {activeZenless === 6 && <img alt="" className="zen" src={characters.soukaku} /> }
            </div>
        );
    };

    const rightDesctiptions = () => {
        return(
            <div className="descriptionzen">
                {activeZenless=== 0 && (
                    <>
                    <div className="descriptionzen_title">SECTION 6</div>
                    <div className="descriptionzen_list">
                        <ul>
                            
                            <li>SOUKAKU</li>
                        </ul>
                    </div>
                    </>
                )}

                {activeZenless === 1 && (
                    <>
                    <div className="descriptionzen_title">SECTION 6</div>
                    <div className="descriptionzen_list">
                        <ul>
                            
                            <li style={{fontSize:'79px'}}>HOSHI MIYABI</li>
                        </ul>
                    </div>
                    </>
                )}

                {activeZenless === 2 && (
                    <>
                    <div className="descriptionzen_title" >GENTLE HOUSE AKA CUNNING HARES</div>
                    <div className="descriptionzen_list">
                        <ul>
                            <li>BILLY KID</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeZenless === 3 && (
                    <>
                    <div className="descriptionzen_title" >BELOBOG HEAVY INDUSTRIES</div>
                    <div className="descriptionzen_list">
                        <ul>
                            <li>KOLEDA BELOBOG</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeZenless === 4 && (
                    <>
                    <div className="descriptionzen_title" >VICTORIA HOUSEKEEPING CO.</div>
                    <div className="descriptionzen_list">
                        <ul>
                            <li>VON LYCON</li>
                        </ul>
                    </div>
                    </>
                )}    
            </div>
        );
    };

    return (
        
        <div className="zenless_section">
            {tabButtonszen()}
            <div class='diag2'>'</div>
            <div class='btbg2'><a>ZENLESSZONEZEROZENLESSZONEZER</a></div>
            <div class='zlog1'><img src = {zlog}></img></div>
            <div class='zlog2'><img src = {zlogi}></img></div>
            <div class='bg'><img src = {zenim}></img></div>
            <div className="main">
                {leftImages()}
                {rightDesctiptions()}
            </div>
        </div>
        
    );
};