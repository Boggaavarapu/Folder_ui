import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OpenData() {
    const {id1}=useParams()
    const {id}=useParams()
    //const {id2}=useParams()
    const[fdata,setfdata]=useState({
      contentType: '',
      content: null,
    })
    useEffect(()=>{
      retrivedata1();
    },[])
    const retrivedata1=async()=>
    {
      fetch(`http://localhost:8080/api/${id1}/${id}`)
          .then(response => response.json())
          .then(data => { setfdata({...fdata, contentType: data.ftype, content: data.file})})
    }
  return (
    <div>
        
        {/* <button onClick={()=>retrivedata1()}>button</button>  */}
        {fdata.contentType === 'text/plain' && <p>{window.atob(fdata.content)}</p>}
        {fdata.contentType === 'image/png' && <img src={`data:image/png;base64,${fdata.content}`} alt="Output"/>}
    </div>
  )
}
