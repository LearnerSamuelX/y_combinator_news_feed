import React, { useState,useEffect, Component} from 'react';
import axios from 'axios';
import '../styles/newsItem.css'

function NewsItem(props){

    const [idNum, setIdNum] = useState([props.idNum]);
    const [content,setContent] = useState([])
    const [comments,setComment] = useState("comment")
    const [refreshSwitch,setRefreshSwitch]=useState(0);

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
            setContent(response.data)
            setRefreshSwitch(1)

        }).then(()=>{
            if(content.kids){
                setComment(content.kids)
                console.log("haha:"+content)
            }else{
                setComment([])
            }
        })
      
    },[refreshSwitch])


    if(comments==="comment"){
        return (
            <div>
                Loading
            </div>
        )
    }else{
        return(
            <div className="newsItem-container">
    
                <div className="news_title">
                    {content.title}
                </div>
                <div className="author_name">
                    By {content.by}
                </div>
                <div className="comments">
                    {comments.length} comments
                </div>
            </div>
        )
    }
}

export default NewsItem