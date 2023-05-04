import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent()
{
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[lastname,setLastname] = useState('');
    const[education,setEducation] = useState('');
    const[about,setAbout] = useState('');
    const[date,setDate] = useState('');
    const navigate=useNavigate();
function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8085/create',{name,email,lastname,education,about,date})
    .then(res=>{
        console.log(res);
        navigate('/');
    }).catch(err=>console.log(err));
    alert("New Student Added");
}

    return(
<>
        


        
                    <div className="form-container"> 
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Add Details</h2>
                    <div className="mb-2">
<label htmlFor="">Name</label>
<input type="text" placeholder="Enter Name" className="form-control"
onChange={e=>setName(e.target.value)}
/>
                    </div>
                    <div className="mb-2">
<label htmlFor="">Email</label>
<input type="text" placeholder="Enter Email" className="form-control"
onChange={e=>setEmail(e.target.value)}
/>
</div>
<div className="mb-2">
<label htmlFor="">LastName</label>
<input type="text" placeholder="Enter Name" className="form-control"
onChange={e=>setLastname(e.target.value)}
/>
<div className="mb-2">
<label htmlFor="">Date Of Birth</label>
<input type="date" placeholder="Enter Name" className="form-control"
onChange={e=>setDate(e.target.value)}
/>
                    </div>
                    </div>
                    <div className="mb-2">
<label htmlFor="">Education</label>
<input type="text" placeholder="Enter Name" className="form-control"
onChange={e=>setEducation(e.target.value)}
/>
                    </div>
                    <div className="mb-2">
<label htmlFor="">About</label>
<input type="text" placeholder="Enter Name" className="form-control"
onChange={e=>setAbout(e.target.value)}
/>
                    </div>
                    
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        
            </>
    )
}
export default CreateStudent;