
const Feedback=()=>{
    const feed=()=>{
        alert('Feedback Sent!')
    }
    return(
        <div>
            <div class="page-header"> 
            <h1 style={{color:"green",fontFamily:"fantasy"}}><b>E-Entertainment</b><span style={{padding: "4px",color:"black"}} class="glyphicon glyphicon-list-alt"></span></h1>
            </div>
            <p style={{padding:"4px"}}>We'd love to hear back from you</p>
            <label for="Email1msg" class="col-sm-2 control-label">Queries:</label>
           <div class="col-sm-5">
           <textarea class="form-control inputstl" rows="5" ></textarea>
           <br></br>
           <button class="btn btn-danger" onClick={feed}>Submit</button>
           </div>
        </div>
    )
}

export default Feedback;