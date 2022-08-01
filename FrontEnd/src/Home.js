import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Homepage(){
    function subs(){
        localStorage.setItem('personid', '1');
    }
    function adm(){
        localStorage.setItem('personid','2');
    }
    const [data,setData]=useState([])
    const getNews=()=>{
        const link="https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=66d6b3f36d04430682919102d5847585";
        //const link="http://localhost:8100/currency-converter/from/USD/to/INR/quantity/100";
        axios.get(link)
        .then((response)=>{
          setData(response.data.articles)
          console.log(localStorage.getItem('topic'))
          console.log(link)
        //   setData(response.data)
        //   console.log(response.data)
        })
    }
  
    return(
        <div>
            <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
            <h2>Roam the world through this website and know everything <span class="glyphicon glyphicon-book"></span></h2>
        
           <p>For 50 years, we have been winning, we bring best crisp news for you. We bring deepest news, hidden famous news.
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>           
           <hr></hr>
           <dl class="row">
           <dt class="col-sm-3">Not subscribed yet?</dt>
           <dd class="col-sm-9"><Link to='/Signup'><button class="btn btn-primary" type="button">Sign Up</button></Link></dd>
           <dt class="col-sm-3">Already a subscriber!</dt>
           <dd class="col-sm-9"><Link to='/Login'><button class="btn btn-primary" type="button" onClick={subs}>Subscriber Login</button></Link></dd>
           <dt class="col-sm-3">Are you a admin?</dt>
           <dd class="col-sm-9"><Link to='/Adminlogin'><button class="btn btn-primary" type="button" onClick={adm}>Admin Login</button></Link></dd>
           </dl> 
            
            <div>
            <button class="btn btn-dark" onClick={getNews}>Read Content</button ><span style={{padding: "4px"}}></span><span class="glyphicon glyphicon-hand-down"></span>
            </div>
            <hr></hr>
            <div className="container">
                <div className="row">
                    {
                        data.map((value)=>{
                            return(
                        <div className="col">
                        <div className="card" style={{width: "30rem"}}>
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

export default Homepage;