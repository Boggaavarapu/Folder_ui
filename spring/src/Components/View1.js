import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import './Stylesheet.css'
import axios from 'axios'
function View1() {
    const [data,setdata]=useState([])
    //setdata({id:props.id,folderName:props.folderName})
    const retrivedata=async()=>{
        const results=await axios.get("http://localhost:8080/api/folders")
        setdata(results.data);
    }
    useEffect(()=>{
        retrivedata()
    },[])  
    const deletefld=async(id)=>{ 
        await axios.delete(`http://localhost:8080/api/delete/${id}`)
        console.log("deleted");
        retrivedata();
    }
  return (
    <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1>Spring Boot Application </h1>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            

            </div>

        </div>
        <Link className='btn btn-outline-light' to="/AddFolder">Add Folder</Link>
        </nav>
        
        <table align='center' data-testid="file">
            <thead>
            <tr>
                <th>Folder Symbol</th>
                <th>Folder Name</th> 
                
            </tr>
            </thead>
            <tbody>
            {data.map(data=>
                <tr data-testid="xyz_count">
                    <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                    </td>
                    <td>
                    {data.folderName}
                    </td>
                    <td>
                    <Link className='btn btn-primary mx-2' 
                    to={`/open/${data.id}`}
                    >open</Link>
                    <Link className='btn btn-primary mx-2'
                    to={`/edit/${data.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2' onClick={()=>deletefld(data.id)}>Delete</button>
                    </td>
                </tr>
            )} 
            </tbody>
        </table>
        
    </div>
  )
}
export default View1;
