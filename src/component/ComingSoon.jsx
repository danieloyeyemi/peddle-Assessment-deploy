import React from 'react'
import './ComingSoon.css'
import { FiYoutube } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import pic from '../asset/MetricLogo.png'
// import { Link } from 'react-router-dom'

function ComingSoon() {
  return (
    <>
      <div className='background'>
        <div className='circle1 '></div>
        <div className='circle2'></div>
        <div className='circle3'></div>

        <nav className="navbar navbar-light pt-4 px-5 bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand ms-4"><img src={pic} alt="" style={{ width: '95px', height: '70px' }} /></a>
            <div className='d-flex'>
              <button className='btn btn-transparent  '><NavLink className=' text-decoration-none text-white mx-3' to={'/about'}>ABOUT US</NavLink></button>
              <button className='btn btn-transparent  '><NavLink className=' text-decoration-none text-white mx-3' to={'/blog'}>BLOG</NavLink></button>
              <button className="btn text-white rounded-pill  mx-3 contact" type="submit">Contact Us</button>
            </div>
          </div>
        </nav>
        <section className='pt-5'>
          <center>
            <div className='heading text-white' >
              <p className='headText pt-5'> SOMETHING AWESOME IS <br /> COMING SOON</p>
              <p >Your all-in-one affiliate marketing software track, automate and optimize your campaigns.</p>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <div className='count'>
                <h3 className='number mt-2'>7</h3>
                <div >Days</div>
              </div>
              <div className='count'>
                <h3 className='number mt-2'>24</h3>
                <div>Hours</div>
              </div>
              <div className='count'>
                <h3 className='number mt-2'>54</h3>
                <div>Minutes</div>
              </div>
              <div className='count'>
                <h3 className='number mt-2'>11</h3>
                <div>Seconds</div>
              </div>
            </div>
          </center>
          <div className='name d-flex mt-5'>
            <div className='mx-auto d-flex'>
              <div className='firstname me-5 text'  >
                <p className='fn ms-2' >First Name</p>
                <hr className='hr bg-light' />
              </div>
              <div className='lastname ms-2 text' >
                <p className='fn ms-3'>Last Name</p>
                <hr className='hr bg-light' />

              </div>
            </div>
          </div>
          <div className='box d-flex rounded-pill bg-white mx-auto mt-5'>
            <input className='inp px-5' type="text" placeholder='Enter your email address...' /><div className='join rounded-pill text-white'><p className='jon px-3'>JOIN OUR WAITING LIST</p></div>
          </div>

        </section>

        <center>
          <div className='pt-5'>
            <div className='icons-white mt-5 pt-5'>
              <FiYoutube className='mx-2 ' size={35} />
              <AiFillFacebook className='mx-2' size={30} />
              <AiFillLinkedin className='mx-2' size={33} />
              <BsInstagram className='mx-2' size={30} />
              <AiFillTwitterSquare className='mx-2' size={33} />
            </div>
            <div className='link mt-3'>
              <a className='px-3 text-decoration-none textbottom' href="">Terms of services</a>
              <a className='px-3 text-decoration-none textbottom' href="">Privacy Policy</a>
            </div>
            <p className='textbottom mt-2'>Copyright 2021 @ Peddle Technology. All Rights Reserved</p>
            <div className='bottom'></div>
          </div>
        </center>

      </div>
    </>
  )
}

export default ComingSoon