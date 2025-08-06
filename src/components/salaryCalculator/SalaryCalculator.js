import React, { useState } from 'react';
import "./SalaryCalculator.css";
import one from './img/49.png'
import two from './img/299.png'
import three from './img/799.png'
import four from './img/1790.png'
import five from './img/2990.png'
import six from './img/4990.png'
import tplogo from './img/logo.png'
import { RiVisaLine } from 'react-icons/ri';
import { RiPaypalFill } from 'react-icons/ri';
import { RiMastercardFill } from 'react-icons/ri';



const SalaryCalculator = () => {
    const [amount, setAmount] = useState ("");
    const [price, setPrice] = useState ("");
    const [hourlyPay, setHourlyPay] = useState ("");

    const calculatePay = () => {
        let hourPayValue = "";

        if (!amount || !price){
            hourPayValue = "Please Fill Out All Fields";
        }
        else if (amount < 0 || price < 0){
            hourPayValue = "Invalid Input!";
        }
        else if (price != 49 & price !=  299 & price !=  799 & price !=  1790 & price !=  2990 & price !=  4990){
            hourPayValue = "Invalid! Try Again.";
        }
        else {
            hourPayValue = (amount * price).toFixed(2);
        }
        setHourlyPay(hourPayValue)
    };

    return (
        <div className='calculator-container'>

<div className='top-up'></div>
        <div className='tpimg'>
            <div className='tpinfo'>
                <img src={one}></img>
                <a>Oneric Shard x60</a>
                <br></br>
                <a>Bonus x60 </a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 49</a>
            </div>

            <div className='tpinfo'>
                <img src={two}></img>
                <a>Oneric Shard x300</a>
                <br></br>
                <a>Bonus x60</a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 299</a>
            </div>
            </div>
            
            <div className='tpimg1'>
            <div className='tpinfo'>
                <img src={three}></img>
                <a>Oneric Shard x980</a>
                <br></br>
                <a>Bonus x980</a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 799</a>
            </div>
            <div className='tpinfo'>
                <img src={four}></img>
                <a>Oneric Shard x1980</a>
                <br></br>
                <a>Bonus x1980</a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 1,790</a>
            </div>
            </div>

            <div className='tpimg2'>
            <div className='tpinfo'>
                <img src={five}></img>
                <a>Oneric Shard x3280</a>
                <br></br>
                <a>Bonus x3280</a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 2,990</a>
            </div>
            <div className='tpinfo'>
                <img src={six}></img>
                <a>Oneric Shard x6480</a>
                <br></br>
                <a>Bonus x6480</a>
                <br></br>
                <a style={{fontWeight:"bold", fontSize:"18px"}}>₱ 4,990</a>
            </div>
            </div>

            <div className='calculator'>
                <div className='tplogo'><img src={tplogo}></img></div>
                <h2>TOP-UP UMBREON</h2>
                <div className='input-group'>
                    <label htmlFor="salary-input" style={{textTransform:"uppercase"}}>Express Supply Pass (QTY) </label>
                    <input type='number' id='salary-input' value={amount} onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="work-days-input">AMOUNT</label>
                    <input type='number' id='work-days-input' value={price} onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>
                <div className='button-group'>
                    <button onClick={calculatePay}>PURCHASE</button>
                </div>
                <div className='dcard'>
                    <a><RiVisaLine/></a>
                    <a><RiPaypalFill/></a>
                    <a><RiMastercardFill/></a>
                </div>

                <div className='output-group'>
                    <p>TOTAL: {hourlyPay}</p>
                </div>
            </div>
        </div>
    );
};

export default SalaryCalculator;