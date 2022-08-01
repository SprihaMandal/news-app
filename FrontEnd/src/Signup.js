import React, { useState } from 'react';
import axios from 'axios';
export default function Jobs(){

    const [mail, setMail] = useState('');
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
 
    function onChangeMail(e) {
      setMail(e.target.value)
    }
    function onChangeUsername(e) {
      setUsername(e.target.value)
    }
    function onChangePassword(e) {
      setPassword(e.target.value)
    }

    const submitProfile =()=>{
        console.log(mail+username+password);
        let applier= {mail: mail,username: username,password: password};
        console.log('json form->'+JSON.stringify(applier));
        axios.post('http://localhost:8080/api/subscriber',applier);
        alert('signed up successfuly');
    }

    return(
        <div>
            <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
           <div class="form-group">
                <label for="exampleInputEmail1">E-Mail</label>
                <input class="form-control" type="text" placeholder="janedoe12@gmail.com" value={mail} onChange={onChangeMail} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input class="form-control" type="text" placeholder="Jane Dow" value={username} onChange={onChangeUsername} />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input class="form-control" type="password"  value={password} onChange={onChangePassword} />
            </div>
        

            <button class="btn btn-primary" onClick={submitProfile}>Sign me up</button>
        </div>
        
    )
}


