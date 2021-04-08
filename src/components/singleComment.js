import React, { useState,useEffect} from 'react';
import axios from 'axios';

function CommentList (props){
    //the props here are the kids id
    //so that we can use the text later
    const [commentID, setCommentID] = useState(props.kids)
    const [commentText,setCommentText] = useState([])

    useEffect(()=>{
        let options = {
            url:"https://hacker-news.firebaseio.com/v0/item/"+commentID+".json?print=pretty",
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        
        axios(options).then((response)=>{
            console.log(response.data.kids)
            setCommentText(response.data)
        })

    },[])

    if(commentText.kids!==undefined){
        return(
            <div className="single_comment">
                <div dangerouslySetInnerHTML={{ __html: "-- "+commentText.text }}></div>
                {commentText.kids.map((i)=>{
                    return <CommentList kids={i}/>
                })}
            </div>
        )
    }else{
        return(
            <div className="single_comment">
                <div dangerouslySetInnerHTML={{ __html: commentText.text }}></div>
            </div>
        )
    }
   
}

export default CommentList