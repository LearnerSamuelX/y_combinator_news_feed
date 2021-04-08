import React, { useState,useEffect} from 'react';
import CommentList from './singleComment';

function Comments(props){

    const clicked = props.clicked
    const comment_ids = props.kids_ids; //comments ids
    const [comments,setComment] = useState([])
    useEffect(()=>{
        if(clicked===1){
            setComment(comment_ids)
        }else(
            setComment([])
        )
    },[clicked])

    if(comments.length===0){
        return(
            <div className="noShow">
            </div>
        )
    }else{
        return(
            <div>
                 {
                     comments.map((i)=>{
                         return( <CommentList kids={i}/>)
                     })
                 }
            </div>
        )
    }
}


export default Comments