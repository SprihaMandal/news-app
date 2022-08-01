import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Subscriber(){
    const [topic, setTopic] = useState(null);

    const [data,setData]=useState([])
    const getNews=()=>{
        console.log(topic);
        let link="https://newsapi.org/v2/everything?q="+topic+"&sortBy=publishedAt&apiKey=66d6b3f36d04430682919102d5847585";
        axios.get(link)
        .then((response)=>{
           setData(response.data.articles)
           console.log(localStorage.getItem('topic'))
           console.log(link)
        })
    }

    return(
        <div>
            <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
           <h3> Hello {localStorage.getItem('username')} <span class="glyphicon glyphicon-user"></span></h3>
           <Link to='/about'><a href="#" class="btn btn-info btn-small">
          <span class="glyphicon glyphicon-off"></span> Logout </a></Link>
          <hr></hr>
           <p>Welcome to subscriber portal. Now stream exclusive content,go ahead and search any topic you want.</p>
           <div>
                <label>Topic: </label>
                <input type="text" value={topic} onChange={(event)=>setTopic(event.target.value)} />
            </div>
           <br></br>
           <button class="btn btn-success" onClick={getNews}>GO</button >
            <div className="container">
                <div className="row">
                    {
                        data.map((value)=>{
                            return(
                        <div className="col">
                        <div className="card" style={{width: "25rem"}}>
                        <img src={value.urlToImage} className="card-img-top" alt=".."/>
                        <div class="card-body">
                            <h5 class="card-title">{value.title}</h5>
                            <p class="card-text">{value.description}</p>
                        </div>
                        </div>
                       </div>
                            );
                        })
                    }
                </div>
            </div>


        </div>
        
    )
}