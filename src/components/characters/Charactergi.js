import { useState } from "react";
import "./Charactergi.css";
import characters from './data/data';
import bggi from './charbg/genbg.png'
import genim from './charbg/gilogo.png'


export default function Genshin () {
    const [activeGenshin, setActiveGenshin] = useState(0);

    const tabButtonHandler = (planetNum) => {
        setActiveGenshin(planetNum);
    };

    const tabButtonsgi = () => {
        return (
            <div className="tabButtonsgi">
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
            <div className="genshincon">
                {activeGenshin === 0 && <img alt="" className="genshin" src={characters.zho} /> } 
                {activeGenshin === 1 && <img alt="" className="genshin2" src={characters.nah} /> }
                {activeGenshin === 2 && <img alt="" className="genshin3" src={characters.gan} /> }
                {activeGenshin === 3 && <img alt="" className="genshin4" src={characters.kaz} /> }
                {activeGenshin === 4 && <img alt="" className="genshin5" src={characters.tig} /> }
                {activeGenshin === 5 && <img alt="" className="genshin6" src={characters.yae} /> }
                {activeGenshin === 6 && <img alt="" className="genshin7" src={characters.kae} /> }
            </div>
        );
    };

    const rightDesctiptions = () => {
        return(
            <div className="descriptiongi">
                {activeGenshin=== 0 && (
                    <>
                    <div className="descriptiongi_title">DEHYA</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li0 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Flame-Mane</li0>
                            <li style={{fontSize:'15px'}}>A member of "The Eremites", a loosely-organized merceneray organization. She is brave, powerful, and enjoys an excellent reputation among mercenaries.</li>
                        </ul>
                    </div>
                    </>
                )}

                {activeGenshin === 1 && (
                    <>
                    <div className="descriptiongi_title">WANDERER</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li1 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Balladeer</li1>
                            <li style={{fontSize:'15px'}}>If the measure of humanity is having a heart, then he cannot be deemeed as such. <br></br>If one without a heart experiences joy and sorrow, then he shall be a puppet most alike to humanity.</li>
                        </ul>
                    </div>
                    </>
                )}

                {activeGenshin === 2 && (
                    <>
                    <div className="descriptiongi_title" >LAYLA</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li3 style={{fontWeight:'bold', textTransform: 'uppercase'}}>The Stars' Blessing</li3>
                            <li style={{fontSize:'15px'}}>A Rtawahist student who always looks sleep-deprived. Her dark eye circles have been worsening due to academic stress. Yet no matter how difficult the work at hand, she always manages to make the most brilliant deductions. Could she be writing her thesis in her dreams?</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeGenshin === 3 && (
                    <>
                    <div className="descriptiongi_title" >YAE MIKO</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li4 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Kitsune Lineage</li4>
                            <li style={{fontSize:'15px'}}>The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servant and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels... <br></br>The enigmatic Guuji, with many identities, may never be fully understood by mortals for what she truly is in her heart of hearts.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeGenshin === 4 && (
                    <>
                    <div className="descriptiongi_title" >TIGHNARI</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li5 style={{fontWeight:'bold', textTransform: 'uppercase'}}>Forest Watcher</li5>
                            <li style={{fontSize:'15px'}}>An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeGenshin=== 5 && (
                    <>
                    <div className="descriptiongi_title" >ARATAKI ITTO</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li6 style={{fontWeight:'bold', textTransform: 'uppercase'}}>crimson oni</li6>
                            <li style={{fontSize:'15px'}}>Descendant of the oni, of intrepid spirit and noble heart. Fast as the wind and mighty as thunder.</li>
                        </ul>
                    </div>
                    </>
                )}  

                {activeGenshin === 6 && (
                    <>
                    <div className="descriptiongi_title" >KAEYA</div>
                    <div className="descriptiongi_list">
                        <ul>
                            <li7 style={{fontWeight:'bold', textTransform: 'uppercase'}}>CAVALRY CAPTAIN</li7>
                            <li style={{fontSize:'15px'}}>In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. <br></br> Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...</li>
                        </ul>
                    </div>
                    </>
                )}  
            </div>
        );
    };

    return (
        
        <div className="genshin_section">
            {tabButtonsgi()}
            <div class='diag1'>'</div>
            <div class='btbg1'>'</div>
            <div class='bg'><img src = {bggi}></img></div>
            <div class='genim'><img src = {genim}></img></div>
            <div className="main">
                {leftImages()}
                {rightDesctiptions()}
            </div>
        </div>
        
    );
};