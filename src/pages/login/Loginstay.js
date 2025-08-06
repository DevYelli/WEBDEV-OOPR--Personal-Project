import { useNavigate } from "react-router-dom";
import './Login.css';
import { useState } from "react";
import { GrClose } from 'react-icons/gr';
import umbre from './lnimg/logo.png'

export default function Loginstay() {
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const registeredUsername = localStorage.getItem("username");
        const registeredPassword = localStorage.getItem("password");

        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (username.value === registeredUsername && password.value === registeredPassword) {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/home");
        } else {
            alert("Username or Password is Incorrect");
            
        }
    }

    const registerHandler = () => {
        navigate("/register")
    };
     
    return (
        <div>
            <div class="umbre"><img src= {umbre}></img></div>
        <form className="login" onSubmit={e => loginHandler(e)}>
        <div class="btn-login"><a href="http://localhost:3000/"> <GrClose/></a></div>
            <h2>WELCOME, TRAVELER!</h2>
            <p>PLEASE LOG IN</p>
            <input id="username" required type="text" placeholder="User Name" />
            <input id="password" required type="password" placeholder="Password" />
            <input type="submit" value="LOG IN" />
            <div className='links'>
                <a onClick={registerHandler}>REGISTER NOW</a>
            </div>
        </form>  
        </div>  
    );
}