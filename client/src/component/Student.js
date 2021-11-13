import React from 'react';
import axios from 'axios';
import './new.css';


const Student = ()=>{
    const [name, setName] = React.useState('');
    const [standard, setStandard] = React.useState('');
    const [rollNo,setRollNo] = React.useState([]);

    const onsubmitHandler = async ()=>{
        const result = await axios.post("http://localhost:4000/crestd",{name,standard,rollNo});
        if(!result)alert("something went wrong");
    }

    return(
        
           
        <form>
            <h4 className="register"> Final Result Sheet </h4>
        
            <div className="form-group">
                <label className="frm">StudentName:</label>
                <input type="text" className="form-control" placeholder="Enter Student Name "onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label className="frm">StudentRegNo:</label>
                <input type="number" className="form-control" placeholder="Enter Student Registration Number"onChange={(e)=>setRollNo(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label className="frm">StudentClass:</label>
                <input type="text" className="form-control" placeholder="Enter student Class " onChange={(e)=>setStandard(e.target.value)}></input>
            </div>
            
            <button id="submit" type="submit" className="btn btn-primary" onClick={onsubmitHandler}>Save</button>
        </form>
        
        
    )
}

export default Student;