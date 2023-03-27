import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom"
export default function EditFile() {
    const {id1}=useParams()
    const {id}=useParams()
    let navigate=useNavigate();
  const [users, SetUsers]=useState({
    NewFileName:""
  })
  // useEffect(()=>{
  // LoadUser();
  // })
  const onFormSubmit=async(e)=>{

    e.preventDefault();

    console.log(users.NewFileName);
    await axios.put(`http://localhost:8080/api/${id}/${users.NewFileName}`)
    
    
   // LoadUser();
    navigate(`/open/${id1}`);

  }
  const LoadUser=async()=>{
    await axios.get(`http://localhost:8080/api/${id1}/${id}`)
  }
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'> Edit Folder</h2>
        <form onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='NewFolderName' className='form-label'>
            New File Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder='Enter FolderName'
          name="NewFolderName"
          value={users.NewFileName}
          onChange={e=>SetUsers({...users,NewFileName:e.target.value})}
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
