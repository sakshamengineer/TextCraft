import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.toggle} navbar-${props.toggle}`}>
                <div className="container-fluid">
                    <Link className="mx-3 navbar-brand" to='/TextCraft'>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/TextCraft'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>{props.abtxt}</Link>
                            </li>
                        </ul>
                        <div className='mx-3'>
                        <input type="color"  onChange = {props.clrchange} className="form-control form-control-color" id="exampleColorInput" value={props.val1} title="Choose your color" style={{border: '1px solid black', borderRadius:'50%', width:'40px'}}></input>
                        </div>
                        <div className={`form-check form-switch text-${props.toggle === 'dark'?'light':'dark'}`}>
                            <input className="form-check-input" onClick = {props.enable} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar