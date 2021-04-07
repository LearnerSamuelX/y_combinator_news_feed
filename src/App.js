import './App.css';

import React, { useState,useEffect} from 'react';
import axios from 'axios';
import NewsItem from './components/newsItem'

function App() {

  const [idNums, setIdNums] = useState([]);

  useEffect(() => {
      console.log("Page Loading Starts")
      let options = {
        url:"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
        method:"GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
      axios(options).then((response)=>{

        //top 10 stories
        let top_10_id = response.data.slice(0,10)
        console.log(top_10_id)
        setIdNums(top_10_id)

      }).then(()=>{
        console.log("Page Loading Ended")
      })
  },[]);

  return (
    <div className="App">
      Hackernews 
      {
        idNums.map((i)=>{
          return (
            <NewsItem idNum={i}/>
          )
        })
      }
    </div>
  );
}

export default App;
