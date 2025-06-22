import React from 'react'
import logo from './LOGO.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useRef } from 'react'
export default function Navbar() {
    const refer = useRef(null)
    return (
        <div style={{zIndex:99999}} className=' sticky-top'>
            {/* <nav  className=" navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"white"}}> */}
            <nav style={{borderBottom:"2px solid #ea4c2d6e",backgroundColor:"white"}}  className=" navbar navbar-expand-lg bg-body-tertiary">
                <div   className="container-fluid">
                   <Link className="navbar-brand" onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0 }) }} to="/">
                        <img src={logo} height={'43.5'} />
                    </Link>
                    <button className="navbar-toggler border-0" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span style={{color:"#ea4c2d"}} className="navbar-toggler-icon"></span> */}
                        {/* <i  style={{color:"#ea4c2d"}} class="fa-solid fa-bars fa-xl"></i> */}
                        <i  style={{color:"#ea4c2d"}}  class="fa-solid fa-bars fa-xl"></i>
                    </button>
                    <div  className="collapse navbar-collapse my-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 ">
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" href="#">Hockey</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" href="#">Hockey News</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" href="#">Hockey Matches</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" href="#">Hockey Live Scores</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link fw-bold" href="#">Hockey Players</a>
                            </li>
                          
                            <li className="nav-item dropdown">
                                <a  className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item fw-bold" href="#">About Us</a></li>
                                    <li><a className="dropdown-item fw-bold" href="#">Disclaimer</a></li>
                                    <li><a className="dropdown-item fw-bold" href="#">Terms & conditions</a></li>
                                    <li><a className="dropdown-item fw-bold" href="#">Privacy Policy</a></li>
                                </ul>
                            </li>
                        
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
         
        </div>
    )
}