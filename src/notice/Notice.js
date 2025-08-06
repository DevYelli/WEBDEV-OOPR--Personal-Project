import './Notice.css';
import React from 'react'
import Marquee from 'react-fast-marquee';
import notbg1 from './notimg/HOME (1).png';
import nothsr from './notimg/hsrnot.jpg';
import notgi from './notimg/ginot.jpg';
import notzzz from './notimg/zzznot.png';
import nothi3 from './notimg/hi3not.png';

const Notice =() => {
    return (
        <nav >
            <div className='notbg'> <img src={notbg1}></img> </div>

        <div className='newsimg'>
            <img src={nothsr}></img>
            <img src={notgi}></img>
            <img src={notzzz}></img>
            <img src={nothi3}></img>
        </div>

        <a className='nthsrinfo'>Honkai: Star Rail Jing Yuan Trailer - "Heaven and Earth <br></br> as a Chessboard" <br></br><br></br><br></br><br></br> A masterful chess player is not bound by limitations. <br></br>They shall treat the earth as the board, and the stars as <br></br>chess pieces. All movements and alternations are simply <br></br>a part of their plan.</a>
        <a className='ntginfo'>Genshin Impact Version 3.7 Preview <br></br><br></br> <br></br> <br></br> <br></br>  The Version 3.7 "Duel! The Summoners' Summit!" <br></br> Preview page is here!</a>
        <a className='ntzzzinfo'>Did You Know! <br></br> <br></br><br></br><br></br><br></br>There are some imaginative guys in the editorial team <br></br> who are good at crafts. <br></br> <br></br> Everyone should take a look!</a>
        <a className='nthi3info'>Ai-chan Newsflash:<br></br> New S-rank Battlesuit Dreamweaver Debuts <br></br><br></br><br></br><br></br> v6.6 Woven from Last Snow is coming soon! <br></br>Misteln Schariac's new S-rank battlesuit Dreamweaver <br></br>will also be released! <br></br> <br></br>Read on to learn more!</a>

        <div className='announcement'>
            <Marquee speed={60} gradient={false}>
            <div className='announcement-text text1'>
                <span style={{textTransform: 'uppercase'}}>Did You Know!</span>
                <span style={{textTransform: 'uppercase'}}>Honkai: Star Rail Jing Yuan Trailer - "Heaven and Earth </span>
            </div>
            <div className='announcement-text text2'>
                <span style={{textTransform: 'uppercase'}}>Genshin Impact Version 3.7 Preview </span>
                <span style={{textTransform: 'uppercase'}}>New S-rank Battlesuit Dreamweaver Debuts!</span>
            </div>
            </Marquee>
        </div>
        </nav>
    )
}

export default Notice