import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'
    >
        <div className='headerTitles'>
            HomePage
            <span className='headerTitleSm'> React JSX</span>
            <span className='headerTitleLg'> Blog</span>
        </div>
        <img src='https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        className='headerImg'
        ></img>
    </div>
  )
}
