import React, { useState } from 'react';
import axios from 'axios';
export default function Jobs(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege]= useState('');
 
    function onChangeName(e) {
        setName(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangeCollege(e) {
        setCollege(e.target.value)
    }

    const submitProfile =()=>{
        console.log(name+email+college);
        let applier= {name: name,email: email,college: college};
        console.log('json form->'+JSON.stringify(applier));
        axios.post('http://localhost:8080/api/applicants',applier);
        alert('Applied Successfuly');
    }

    const applyJob =()=>{
        alert("Preference selected");
    }

    const [data,setData]=useState([])
    const getJobs=()=>{
        axios.get("http://localhost:8080/api/jobs")
        .then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    }
    return(
        <div>
          <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
           <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input class="form-control" type="text" placeholder="Jane Doe" value={name} onChange={onChangeName} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input class="form-control" type="text" placeholder="janedoe12@gmail.com" value={email} onChange={onChangeEmail} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">College</label>
                <input class="form-control" type="text" placeholder="Yale University" value={college} onChange={onChangeCollege} />
            </div>
         <button type="button" class="btn btn-warning" onClick={getJobs}>SEE ALL AVAILABLE POSITIONS</button>
         <hr></hr>
         <div className="container">
                <div className="row">
                    {
                        data.map((value)=>{
                            return(
                        <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Position: {value.jobDesc}</h5>
                            <p class="card-text">Openings: {value.opening}
                            <br></br>Salary: {value.salary} p.a</p>
                            <button class="btn btn-primary" onClick={applyJob}>Select</button>
                        </div>
                        </div>
                       </div>
                            );
                        })
                    }
                </div>
            </div>
            <button class="btn btn-danger" onClick={submitProfile}>Apply</button>
        </div>
        
    )
}


