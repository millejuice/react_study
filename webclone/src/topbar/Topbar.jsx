import React from 'react'
import "./topbar.css" 
export default function Topbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
            </ul>
        </div>
        <div className='topRight'>
            <img
            className='topImg'
            src='https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg'
            ></img>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
