import React, { useState } from 'react';
export default function Dashboard(){
    return(
        <div>
           <h1>E-entertainment</h1>
           <h2>Hi</h2>
           <h3>{localStorage.getItem('username')}</h3>
        </div>
        
    )
}