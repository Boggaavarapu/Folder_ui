import React from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
export default function OpenFolder() {
    const {id}=useParams()
    const [data,setdata]=useState([])
  
    const deletefld=async(id1)=>
    { 
        await axios.delete(`http://localhost:8080/api/delete/${id}/${id1}`)
        loadUser()
    }

    const loadUser=async()=>
    {
        const results=await axios.get(`http://localhost:8080/api/${id}`)
        setdata(results.data);
    }
    const retrivedata=async()=>
    {
        const results=await axios.get(`http://localhost:8080/api/${id}`)
        setdata(results.data);
    }
    useEffect(()=>{
        retrivedata()
  },[])
  return (
    <div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <h1 className='name1'>Spring Boot Application </h1>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                

                    </div>

                </div>
                <Link className='btn btn-outline-light' to={`/uploadFile/${id}`}>upload File</Link>
            </nav>
            
        </div>
        <table align='center'>
            <tr>
                <th>File id</th>
                <th>File Name</th>  
            </tr>
            {data.map(data=>
                <tr data-testid="file_count">
                    <td>
                        {data.id}
                    </td>
                    <td>
                        {data.fname}
                    </td>
                    <td>
                        <Link className='btn btn-primary mx-2'  to={`/openData/${id}/${data.id}`}>open</Link>
                        <Link className='btn btn-primary mx-2' to={`/editFile/${id}/${data.id}`}>Edit</Link>
                        <button className='btn btn-danger mx-2' onClick={()=>deletefld(data.id)}>Delete</button>
                    </td>
                </tr>
            )} 
        </table>
        
    </div>
  )
}
