import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Admin(){
    const [data,setData]=useState([])
    const getAllApplicants=()=>{
        axios.get("http://localhost:8080/api/applicants")
        .then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    }
    const [subs,setSubs]=useState([])
    const getSubscriber=()=>{
        axios.get('http://localhost:8080/api/subscriber')
        .then((response)=>{
            setSubs(response.data)
            console.log(response.data)
        })

    }
    return(
        <div>
       <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
           <h4>Admin Portal</h4>
           <h5>Welcome {localStorage.getItem('username')} <span class='glyphicon glyphicon-eye-open'></span></h5>
           <Link to='/about'><a href="#" class="btn btn-info btn-small">
          <span class="glyphicon glyphicon-off"></span> Logout </a></Link>
           <hr></hr>
           <button class="btn btn-danger" onClick={getAllApplicants}>Fetch Applicants</button>
           <hr></hr>
           <table class="table table-bordered">
        {
            data.map((value)=>{
                return(
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.college}</td>
                        </tr>
                    
                );
            })
        }
        </table>

        <button class="btn btn-danger" onClick={getSubscriber}>Fetch Subscribers</button>
        <hr></hr>
        <table class="table table-bordered">
            {
                subs.map((val)=>{
                    return(
                        <tr>
                            <td>{val.mail}</td>
                            <td>{val.username}</td>
                        </tr>
                    );
                })
            }
        </table>


        </div>
        
    )
}