import { useNavigate } from "react-router-dom";
import './Register.css';
import umbre1 from './lnimg/logo.png'
import { GrClose } from 'react-icons/gr';


export default function Registerstay(){
    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault()

        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const confirmation = document.getElementById("confirmation");

        if (password.value === confirmation.value) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password.value);

            navigate("/login");
        } else {
            alert("Passwords do not match");
        }
    }

    const loginHandler = () => {
        navigate("/Login");
    };

    return (
        <div>
            <div class="umbre1"><img src= {umbre1}></img></div>
        <form className="register" onSubmit={e => registerHandler(e)}>
        <div class="btn-login1"><a href="http://localhost:3000/"> <GrClose/></a></div>
            <h2>WELCOME, TRAVELER!</h2>
            <p>PLEASE REGISTER</p>
            <input id="username" required type="text" placeholder="Username" />
            <input id="password" required type="password" placeholder="Password" />
            <input id="confirmation" required type="password" placeholder="Confirm Password" />
            <input type="submit" value="REGISTER" />
            <div className="links">
                <a onClick={loginHandler}>LOGIN</a>
            </div>
        </form>
        </div>
    );
}