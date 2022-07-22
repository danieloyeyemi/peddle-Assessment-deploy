import React from 'react'
import './Blog.css'
import pic from '../asset/logo.jpg'
import pic2 from '../asset/metric image2.PNG'
import pic3 from '../asset/backg.jpg'
import pic4 from '../asset/bottom.jpg'
import { NavLink } from 'react-router-dom'
import { BsSearch} from 'react-icons/bs'


export default function Blog() {
    return (
        <>
            <div className='Blog'>
                <nav class="navbar navbar-light bg-light px-5 py-3">
                    <div class="container-fluid">
                        <a class="navbar-brand"> <img src={pic} className="card-img-top" alt="" width={'40px'} /></a>
                        <form class="d-flex">
                            <button class="btn btn-transparent" type="submit"><NavLink className=' text-decoration-none ' to={'/about'}><strong className='navword mx-3' style={{color:'rgb(253,93,248)'}}>ABOUT US</strong></NavLink></button>
                            <button class="btn btn-transparent mx-5" type="submit"> <NavLink className=' text-decoration-none' to={'/blog'}><b className='navword' style={{color:'rgb(253,93,248)'}}>BLOG</b> </NavLink></button>
                            <button class="btn bon rounded-pill shadow-sm bg-white" type="submit" style={{height: '40px'}}> <b className='navword' >CONTACT US</b> </button>
                        </form>
                    </div>
                </nav>
                <section>
                    <div className=' blog2  '>
                        <div className='bl1 pt-4'> <div className='bl2'></div></div>

                        <div className='text-white pt-3 pl-5 ml-5 pl-5 '>
                            <p className='text-white pt-3 mt-5 pl-5 d-flex blg'>	<hr className='HR me-1' /> BLOG</p>
                            <h3 className='pl-5 ml-5 h1 mr'>Articles And News</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row px-4 mx-4' >
                        <div className='col-9 col-md-6 p-4 mx-auto mx-md-4'>
                            <h3 className='lat'>Latest From The Blog</h3>
                            <p className='lor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus Asperiores, quidem placeat cum fugiat quasi molestias pariatur.</p>
                        </div>
                        <div className='col-9 col-md-4 mx-auto mx-md-4 my-md-5 py-md-5'>
                            <div className='inpbl px-3 '>
                                <input type="text" placeholder='Search here'  /><BsSearch/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row  px-4 mx-4'>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto   py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cum labore ullam eaque vero quos beatae impedit necessitatibus nostrum iste repellat libero culpa, laboriosam cumque atque molestias accusantium obcaecati numquam!</p>
                                </div>
                                <div className="card-body d-flex">
                                    <a href="#" className="card-link readmore"><hr className='HR' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto mx-md-1  py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Pariatur quidem debitis molestiae recusandae? Quae earum quaerat excepturi laudantium sint, fugiat corporis, assumenda quos nostrum autem, architecto quas repudiandae!</p>
                                </div>
                                <div className="card-body d-flex">
                                    <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto   py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium, labore dicta cumque dolor eos, doloremque fugit, dolores illum cum laboriosam. Provident voluptatem reprehenderit numquam ullam voluptatum inventore ratione deserunt?</p>
                                </div>
                                <div className="card-body d-flex">
                                    <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row py-2  px-4 mx-4'>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto   py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi optio laudantium autem eos culpa praesentium iste. Nam, sequi provident! Perspiciatis magnam fuga dolore adipisci quibusdam labore architecto ullam doloremque ratione.</p>
                                </div>
                                <div className="card-body d-flex readmore">
                                    <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto mx-md-1  py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sint nostrum quis vero tenetur dolores nam, dolor, in animi nemo quidem dolorem! Eveniet non illo magni adipisci. Eum, veritatis placeat.</p>
                                </div>
                                <div className="card-body d-flex readmore">
                                    <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto  py-2">
                                <img src={pic2} className="card-img-top" alt="" width={'70px'} height={'50%'} />
                                <div className="card-body">
                                    <div className='sep text-muted'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases</strong></h5>
                                    <h5 className="card-title"><strong>To Increase Conversations</strong></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut quam, debitis assumenda odio maiores dignissimos ullam, quaerat reprehenderit, suscipit voluptatibus. Facilis architecto eos molestiae aperiam quidem facere corrupti illum?</p>
                                </div>
                                <div className="card-body d-flex readmore">
                                    <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                    <a href="#" className="card-link text-decoration-none readmore">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row ' >
                        <div className='col-11 col-md-6 p-5 mx-auto mx-md-4'>
                            <h3>Recent Articles</h3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus asperiores, quidem placeat cum fugiat quasi molestias pariatur.
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row  px-4 mx-4'>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto  ">
                                <div className="card-body">
                                    <div className='se text-muted mb-2'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases To Increase Conversations</strong></h5>
                                    <p className="card-text">2. Unless specified otherwise, all Data requested by Metricks is mondatory and failure to provide this Data may make it impossible for Metricks to   </p>
                                    <div className="card-body d-flex readmore">
                                        <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                        <a href="#" className="card-link text-decoration-none readmo">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto mx-md-1">
                                <div className="card-body">
                                    <div className='se text-muted mb-2'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases To Increase Conversations</strong></h5>
                                    <p className="card-text">2. Unless specified otherwise, all Data requested by Metricks is mondatory and failure to provide this Data may make it impossible for Metricks to</p>
                                    <div className="card-body d-flex readmore">
                                        <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                        <a href="#" className="card-link text-decoration-none readmo">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-md-4 '>
                            <div className="card shadow mx-auto ">
                                <div className="card-body">
                                    <div className='se text-muted mb-2'>SEPTEMBER 6, 2021. FEATURED ARTICLE AFFILIATE</div>
                                    <h5 className="card-title"><strong>12 Popup Use Cases To Increase Conversations</strong></h5>
                                    <p className="card-text">2. Unless specified otherwise, all Data requested by Metricks is mondatory and failure to provide this Data may make it impossible for Metricks to</p>
                                    <div className="card-body d-flex readmore">
                                        <a href="#" className="card-link"><hr className='HR readmore' /></a>
                                        <a href="#" className="card-link text-decoration-none readmo">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <center>
                    <button className='btn btn-primary rounded-pill my-5 py-3 wb'>LOAD MORE</button>
                </center>
                <section>
                    <div className=' blog3 d-flex '>
                        <div className='row px-4 mx-4' >
                            <div className='col-9 col-md-7 p-5 mx-auto mx-md-3 py-md-5'>
                                <h3 className='text-white  pt-md-5 '>What To Know More About Metrics</h3>
                                <h6 className='text-white'>Lorem ipsum, dolor sit amet </h6>
                                <a href="#">contact us 			&#8594;  </a> </div>
                            <div className='col-9 col-md-4 mx-auto mx-md-4 my-md-1 py-md-5'>
                                <img src={pic3} className="card-img-top " alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <center>
                        <div className='col-4 my-4'>
                            <img src={pic4} className="card-img-top" alt="" width={'50px'} />
                        </div>
                    </center>
                </section>
            </div>

        </>
    )
}