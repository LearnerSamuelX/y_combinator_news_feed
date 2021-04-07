import React, { useState,useEffect, Component} from 'react';
import axios from 'axios';

function Comments(){

    const [comments,setComment] = useState([])
    useEffect(()=>{
        
    },[])

    return(
        <div className="comment">
            {/* 
                name: Tom
                Content: "I don't understand."
             */}
        </div>
    )
}


export default Comments