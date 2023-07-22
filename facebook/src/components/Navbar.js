import React from "react"
import './Navbar.css'
import FaBook from '../assets/fb.png'
import Tabs from './Tabs'


const Navbar = () => {
    return(
    <div className="navbar">
        <div className="navbar-left">
       <img 
       src={FaBook}
       className="fb"
       ></img>
       <input className="fsearch" placeholder="Facebook 검색"></input>
       <button className="search">검색</button>
       </div>
       <div className="navbar-center">
        <Tabs />
       </div>
    </div>
    );
}
export default Navbar;