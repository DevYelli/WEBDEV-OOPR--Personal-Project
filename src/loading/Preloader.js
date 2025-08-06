import React from "react";
import './Preloader.css';
import loadgif from './loading.gif';
import { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])

    return (
        <div className="preloader">
            <img src={loadgif}></img>
        </div>
    )
}

export default Preloader