import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondNav from './SecondNav/SecondNav';
import './Header.css'
import umb from './hdimg/logo.png'
import { FiLogOut } from 'react-icons/fi';
import { HashLink as Link } from "react-router-hash-link";
import { GoLinkExternal } from 'react-icons/go';


export default function Header() {
    const [isShowSecondNav, setIsShowSecondNav ] = useState(false);
    const [activeNav, setActiveNav ] = useState(-1);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const homeHandler = () => {
        navigate("/")
    };

    const loginHandler = () => {
        navigate("/login")
    };

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", "false")
        navigate("/login")
    };

    const handleMouseEnter = (activeNavIndex) => {
        setIsShowSecondNav(true);
        setActiveNav(activeNavIndex);
    };

    const handleMouseLeave = () => {
        setIsShowSecondNav(false);
        setActiveNav(-1);
    };

    return (
        <nav className='header' onMouseLeave={handleMouseLeave}>
            <div className='logoname' onClick={homeHandler} onMouseEnter={()=> handleMouseEnter(-1)}><a>UMBREON</a></div>
           <div className='logo' onClick={homeHandler} onMouseEnter={() => handleMouseEnter(-1)}>
            <a href = "#" class = "logo"><img src= {umb}></img></a>
            </div>
           <div className='nav_items'>
            <div className='nav_item'><a href='http://localhost:3000/home'>HOME</a></div>
            <div className='nav_item'><a href='http://localhost:3000/news'>NEWS</a></div>
            <div className='nav_item'><a href='http://localhost:3000/topup' target='_blank'><GoLinkExternal/>TOP-UP</a></div>
            <div className='nav_item' onMouseEnter={() => handleMouseEnter(1)}><Link to="#characters" smooth>CHARACTERS</Link></div>
            <div className='nav_item' onMouseEnter={() => handleMouseEnter(2)}><a href='http://localhost:3000/worlds' target='_blank'>NATIONS</a></div>
            
            </div>
            {isShowSecondNav && activeNav !== -1 && <SecondNav activeNav={activeNav}/>}
            {isLoggedIn === "true" ?
                <div className='logout_button'><a onClick={logoutHandler} onMouseEnter={() => handleMouseEnter(-1)} style={{fontSize:"18px"}}><FiLogOut/></a></div>    
            :
            <div className='login_button'><a onClick={loginHandler}  onMouseEnter={() => handleMouseEnter(-1)}>LOGIN</a>
            </div> 
                   
            }
        </nav>
    );
}