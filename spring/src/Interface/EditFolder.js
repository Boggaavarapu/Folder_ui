import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom"
export default function EditFolder() {
    const {id}=useParams()
    let navigate=useNavigate();
  const [users, SetUsers]=useState({
    NewFoldername:""
  })
  useEffect(()=>{
  LoadUser();
  },[])
  const onFormSubmit=async(e)=>{

    e.preventDefault();

    
    await axios.put(`http://localhost:8080/api/updateFolder1/${id}/${users.NewFoldername}`)
    
    
    LoadUser();
    navigate("/");

  }
  const LoadUser=async()=>{
    const result=await axios.get("http://localhost:8080/api/folders")
        SetUsers(result);
  }
  //const {NewFoldername}=users
  return (
    
      <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Edit Folder</h2>
          <form onSubmit={onFormSubmit}>
          <div className='mb-3'>
            <label htmlFor='NewFolderName' className='form-label'>
              NewFolderName
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Enter FolderName'
            name="NewFolderName"
            value={users.NewFoldername}
            onChange={e=>SetUsers({...users,NewFoldername:e.target.value})}
            />
            <br></br>
            <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
        
        </div>

      </div>
    </div>

  )
}
