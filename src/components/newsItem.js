import React, { useState,useEffect, Component} from 'react';
import axios from 'axios';
import '../styles/newsItem.css'

function NewsItem(props){

    const [idNum, setIdNum] = useState([props.idNum]);

    useEffect(()=>{
        console.log('Newsitem component loaded.')
        let options = {
            url:"https://hacker-news.firebaseio.com/v0/item/"+idNum+".json?print=pretty",
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        axios(options).then((response)=>{
            console.log(response.data)
        })
    },[])

    return(
        <div className="newsItem-container">
            News Item Container
            {props.idNum}
        </div>
    )
}

export default NewsItem