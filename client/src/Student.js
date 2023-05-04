import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";
function Student()
{
const [student,setStudent]=useState([])

    useEffect(()=>{
axios.get('http://localhost:8085/')
.then(res=>setStudent(res.data))
.catch(err=>console.log(err))
    },[])


   const handleDelete=async(id)=>{
try{
    await axios.delete('http://localhost:8085/student/'+id)
    window.location.reload()
}
catch(err){
console.log(err);
}
    }
    return(

<div className='d-flex vh-100  justify-content-center align-items-center'>
<div className='w-55  rounded p-3' >
{/* <Link to="/create" className="btn btn-success">Add+</Link> */}
<Link to="/create" >
<button type="button" className="glowing-btn-add">
                <span className='glowing-txt'>A<span className='faulty-letter'>D</span>D+</span>
     </button>
</Link>
<div className="tbl-header">
<table >
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>LastName</th>
<th>Education</th>
<th>About</th>
<th>DateOfBirth</th>
<th>Action</th>
</tr>
</thead>
</table>
</div>
<div className="tbl-content">
    <table cellPadding="0" cellsSpacing="0" border="0">
<tbody>
{
    student.map((data,i)=>(
        <tr key={i}>
            <td>{data.Name}</td>
            <td>{data.email}</td>
            <td>{data.Lastname}</td>
            <td>{data.Education}</td>
            <td>{data.About}</td>
            <td>{data.DOB}</td>
            <td>
                {/* <Link to={`update/${data.ID}`} className="btn btn-primary">Update</Link> */}
                <Link to={`update/${data.ID}`} >
                <button type="button" className="glowing-btn-update">
                <span className='glowing-txt'>U<span className='faulty-letter'>P</span>DATE</span>
     </button>
                </Link>
                {/* <button className="btn btn-danger ms-2" onClick={e=>handleDelete(data.ID)}>Delete</button> */}
                <button className="glowing-btn" onClick={e=>handleDelete(data.ID)}><span className='glowing-txt'>D<span className='faulty-letter'>E</span>LETE</span></button>
            </td>
        </tr>
    ))
}
</tbody>
</table>
</div>
</div>
</div>
    )
}
export default Student;