import React from 'react'
import './footer.css'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-section-padding'>
            <div className='footer-links'>
                <div className='footer-links-div'>
                    <h4>For Business</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                </div>
                <div className='footer-links-div'>
                    <h4>Resouces</h4>
                    <a href='/resource'>
                        <p>Resource Center</p>
                    </a>
                </div>
                <div className='footer-links-div'>
                    <h4>Company</h4>
                    <a href='/company'>
                        <p>Contact</p>
                    </a>
                </div>
                <div className='footer-links-div'>
                    <h4>Comming Soon</h4>
                    <div className='socialmedia'>
                        <p><BsFacebook /></p>
                        <p><AiOutlineTwitter /></p>
                        <p><BsLinkedin/></p>
                        <p><AiFillInstagram /></p>
                    </div>
                </div>
            </div>
            <br />

            <div className='footer-below'>
                <div className='footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className='footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer