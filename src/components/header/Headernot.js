import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondNav from './SecondNav/SecondNav';
import './Header.css'
import umb from './hdimg/logo.png'
import { FiLogOut } from 'react-icons/fi';
import { HashLink as Link } from "react-router-hash-link";


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
            <div className='nav_item'><a>HOME</a></div>
            <div className='nav_item'><a>NEWS</a></div>
            <div className='nav_item'><a>TOP-UP</a></div>
            <div className='nav_item'><a>CHARACTERS</a></div>
            <div className='nav_item'><a>NATIONS</a></div>
            
            </div>
            {isShowSecondNav && activeNav !== -1 && <SecondNav activeNav={activeNav}/>}
            {isLoggedIn === "true" ?
                <div className='logout_button'><a onClick={logoutHandler} onMouseEnter={() => handleMouseEnter(-1)} style={{fontSize:"18px"}}><FiLogOut/></a></div>    
            :
            <div className='login_button'><a  style={{ color: 'black' }} onClick={loginHandler}  onMouseEnter={() => handleMouseEnter(-1) }>LOGIN</a>
            </div> 
                   
            }
        </nav>
    );
}