import React, { useState,useEffect} from 'react';
import axios from 'axios';

function CommentList (props){
    //the props here are the kids id
    //so that we can use the text later
    const [commentID, setCommentID] = useState(props.kids)
    const [commentText,setCommentText] = useState("")

    function textRendering(){
        return commentText
    }

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
            setCommentText(response.data.text)
        })
    },[])

    return(
        <div className="single_comment">
            <div dangerouslySetInnerHTML={{ __html: commentText }}></div>
        </div>
    )
}

export default CommentList