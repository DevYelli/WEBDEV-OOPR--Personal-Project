import React, {useState, useEffect} from "react";
import './Loading.css';
import loadgif from './loading.gif';
import { preLoaderAnim } from "../animations";


function Loading() {
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        preLoaderAnim()
    },[])

    useEffect (() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 4000)
    },[])

    return (
        <div className="preloader">
            {loading ?(
                <img src={loadgif}></img>
            ) : (<></>)
            }
        </div>
    )
}

export default Loading