import React from 'react'
import './About.css'
import pic from '../asset/MetricLogo.png'
import { BsArrowRight } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='backgrnd'>
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
        <div id='circle'></div>
        <div id='boxtop'><div id='box'></div></div>

        <div className='about d-flex text-light'>
          <hr className='HR me-2' />
          <p id='ab'>ABOUT US</p>
        </div>
        <div id='built'>
          <div className='Built text-light build'>Built for SaaS  </div>
          <p className='Bui text-light'>and E-commerce</p>
        </div>

        <div className='words text-white'>Our tools are easy to set up and use with a user <br />friendly dashboard that enables you to set up, <br />launch, automate and manage multi-affiliate <br />campaigns in 5 minutes.</div>

        <div className='metric mx-auto text-white'>Metricks was developed because just like  you, we needed a product that could give us <b> good value</b>.</div>

        <div className='why'>
          <div className='text-white ms-2'>01</div>
          <div className='d-flex text-white'>
            <hr className='HR me-3' />
            <p>WHY US?</p>
          </div>
        </div>
        <div className='note text-white'>
          we pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
        </div>

        <div className='box2'>
          <div className='small'></div>
          <div className='big'></div>
          <div id='group'>
            <div className='text-white ms-2'>02</div>
            <div className='d-flex text-white'>
              <hr className='HR me-3' />
              <p>GROWING WITH YOU</p>
            </div>
            <p className='text-white lev'>Leveraging the best technology, we have developed an all-in-one affiliate marketing trading software, a geneus tools to helpyou track, automateand optimize your influencer compaigns all from one dashboard </p>
            <p className='text-white mt-5 lev'>Our team of expert are constantly brainstorming, testing and developing new solution with only one thing in mind-your business growth. Your success is our success and by giving you the tools you need to scale, we  grawas well.</p>
          </div>
        </div>
        <div className='box3'>
          <div className='sm'></div>
          <div className='bg'></div>
          <div id='suv'>
            <p className='got text-white'>Got a Question?</p>
            <div className='see text-white'>See how Metricks can help your business grow with best affiliate marketing tracking software.</div>
            <div id='con'>Contact Us <BsArrowRight /></div>
          </div>

        </div>

        <div className='d-flex justify-content-center mt-5 pt-5'>
          <div className='icons mt-5 pt-5'>
            <FiYoutube className='mx-2 icon-light' size={35} />
            <AiFillFacebook className='mx-2' size={30} />
            <AiFillLinkedin className='mx-2' size={33} />
            <BsInstagram className='mx-2' size={30} />
            <AiFillTwitterSquare className='mx-2' size={33} />
          </div>
        </div>
        <center>
          <div className='d-flex justify-content-center mt-3'>
            <p className='px-3 text-decoration-none textbottom' href="">Terms of services</p>
            <p className='px-3 text-decoration-none textbottom' href="">Privacy Policy</p>
          </div>
          <p className='textbottom mt-3'>Copyright 2021 @ Peddle Technology. All Rights Reserved</p>
        </center>



      </div>
    </>
  )
}

export default About