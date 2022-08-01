import { Link } from 'react-router-dom';
import React, { useState } from "react";
 
 
const Adminlogin = () => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'));
    }
 
    function getData() {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'))
    }

    return (
        <>
            <div>
            <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
                <p>Login Form</p>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input class="form-control" type="text" placeholder="Enter registered username" value={username} onChange={onChangeUsername} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" placeholder="Password" value={password} onChange={onChangePassword} />
                        </div>
                        <Link to='/Admin'>
                        <button type="button" class="btn btn-success" onClick={getData}>Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};
 
export default Adminlogin