import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function UploadFile() {
  const {id}=useParams();
    let navigate=useNavigate();
    const [file,setFile]=useState({
        Personname:""  
    })
    console.log();
    
    const [fileparam,setfileparam]=useState({
      fileparamName:"file1"
    });
    const[image,setimage]=useState();

    function handlefile(e){
      console.log("hello1 "+e.target.files[0])
      console.log("hello2 "+e.target.files) 
      setimage(e.target.files[0]);
    } 
  
    const onSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        console.log(fileparam.fileparamName);
        formData.append("param1",fileparam.fileparamName)
        formData.append("file1",image)
        const res = await axios.post(`http://localhost:8080/api/${id}/${file.Personname}/fileName`,formData,{
          headers:{'Content-Type':'multipart/form-data'}
        })
        if(res)
          navigate(`/open/${id}`) 
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Upload Folder</h2>
          <form onSubmit={(e)=>onSubmit(e)} >
            <div className='mb-3'>
              <label htmlFor='NewFileName' className='form-label' >
                Person Name
              </label>
              <input
              type={"text"}
              className="form-control"
              data-testid="Personname"
              placeholder='Enter Person Name'
              name="Personname"
              value={file.Personname}
              onChange={e=>setFile({...file,Personname:e.target.value})}
              />
              <br></br>
              <input
              type={"file"}
              className="form-control"
              data-testid="testing"
              name="NewFolderName"
              onChange={handlefile}
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
