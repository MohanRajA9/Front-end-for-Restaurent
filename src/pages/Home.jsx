import React from 'react';
import { Menubtn } from '../components/MenuBtn'
import { Link } from 'react-router-dom'
import "./Home.css"
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo'
import  ContactImage  from '../utils/img/contact-img.jpg'
import AboutImg from '../utils/img/southIndian/about-img.jpg'

function Home() {
    return (
        <div className='home-page' >
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow' >
                <div className='container' >
                    <div className='row' >
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center' >
                            <h2 className='mb-2 text-white fw-bold' >
                                welcome To
                            </h2>
                            <h1 className='mb-0 text-white fw-bold text-center text-sm-start' >V</h1>
                            <h1 className='mb-5 text-white fw-bold text-center text-sm-start' >
                                Restaurant
                            </h1>
                            <Menubtn />
                        </div>
                    </div>
                </div>
            </header>
            <div className='container my-5' >
                <div className='row' >
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />

                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center' >
                        <h2 className='fs-1 fw-bold mb-5 text-uppercase' >About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptate quasi saepe recusandae eos deleniti natus mollitia reprehenderit odio, earum sit cupiditate quam iure neque voluptates optio corrupti dicta. Nostrum.</p>
                        <p className='mb-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor necessitatibus natus quam iusto quo at aspernatur. Et aperiam deleniti totam officia modi nostrum, temporibus magnam unde est necessitatibus eius?</p>
                        <Link to="/about" >
                            <button type='button' className='btn btn-outline-success btn-lg' >More about us</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold' >Our Favorites</h2>
                    <div className='row mb-5 w-100' >
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0' >
                            <h3 className='fs-2 mb-5 text-warning ' >Food</h3>
                            <ul className='px-0' >
                                <li className='d-flex justify-content-between' >
                                    <p className='fs-2 mx-2 text-warning fw-bold' > Briyani </p>
                                    <p className='fs-3 mx-2 text-warning' > ₹250 </p>
                                </li>
                                <li className='d-flex justify-content-between' >
                                    <p className='fs-2 mx-2 text-warning fw-bold' >Breads</p>
                                    <p className='fs-2 mx-2 text-warning' >₹30</p>
                                </li>
                                <li className='d-flex justify-content-center' >
                                    <p className='fs-3 mx-2 text-warning fw-bold' >Tanduri</p>
                                    <p className='fs-3 mx-2 text-warning' >₹300</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0' >
                            <h3 className='fs-2 mb-5 text-warning' >Drinks</h3>
                            <ul className='px-0' >
                                <li className='d-flex justify-content-between' >
                                    <p className='fs-2 mx-2 text-warning fw-bold' >Lemon</p>
                                    <p className='fs-2 mx-2 text-warning  ' >₹20</p>
                                </li>
                                <li className='d-flex justify-content-between' >
                                    <p className='mx-0 fs-2 text-warning fw-bold' >Apple</p>
                                    <p className='fs-2 mx-0 text-warning'>₹30</p>
                                </li>
                                <li className='d-flex justify-content-between' >
                                    <p className='fs-2 mx-0 text-warning fw-bold' >Orange</p>
                                    <p className='fs-2 mx-0 text-warning' >₹25</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Menubtn />
                </div>
            </div>
            <ImageGallery />
            <div className='bg-dark text-light py-5 shadow' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={ContactImage} className='img-fluid w-50' alt="Contact section image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home