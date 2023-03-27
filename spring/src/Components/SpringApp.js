import React from 'react'
import './Stylesheet.css'
import {Link} from "react-router-dom"
export default function SpringApp() {
  return (
    <div className='header1'>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1>Spring Boot Application </h1>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            

            </div>

        </div>
        <Link className='btn btn-outline-light' to="/AddFolder">Add Folder</Link>
        </nav>
        
    </div>
  )
}
