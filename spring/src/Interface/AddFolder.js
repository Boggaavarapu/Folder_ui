import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
export default function AddFolder() {
  let navigate=useNavigate();
  const [users, SetUsers]=useState({
    Foldername:""
  })
  
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/folderName/"+Foldername)
    navigate("/");
  }
 
  const {Foldername}=users
  return (
    
    <div className='container'>
      <div className='row'>
        
        <div className='col-md-6 offset md-3 border rounded p-4 mt-2 shadow'>
          
          <h2 className='text-center m-4'> Add Folder</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='FolderName' className='form-label'>
              FolderName
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Enter FolderName'
            name="FolderName"
            value={Foldername}
            onChange={e=>SetUsers({...users,Foldername:e.target.value})}
            />
            <br></br>
            <button type="submit" className='btn btn-primary'>Submit</button>
            {/* <button onclick={myFunction} className='btn btn-danger'>cancel</button> */}
            </div>
          </form>
        
        </div>

      </div>
    </div>
  )
}
