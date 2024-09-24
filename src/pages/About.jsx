import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page' >
            <header className='mt-5' >
                <div className='container h-100 d-flex align-items-center justify-content-center' >
                    <h1 className='text-light' >
                        About
                    </h1>
                </div>
            </header>
            <div className='container my-5' >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi perferendis cumque necessitatibus quia, eveniet fugiat dolorem dignissimos. Hic quidem rem nobis corporis omnis? Adipisci doloribus aut, ea id ipsum dolorem quasi libero fuga reiciendis natus aliquid architecto, sed porro. Non vel laborum atque dolore sint? Vero nemo ducimus ipsa fugit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque consectetur inventore quae blanditiis, repellendus nihil eum consequuntur perspiciatis corporis a incidunt? Veritatis iste obcaecati similique quas molestias laudantium quod omnis ut quam, recusandae nemo atque debitis rerum eveniet distinctio numquam animi ipsum ex eum! Eveniet harum explicabo nihil cumque voluptas voluptatem voluptatum ab fugit, iure at fugiat laudantium, dolorem ipsam labore ad sed commodi esse. Atque tempore architecto sed, incidunt vero harum tempora, in repellat hic odio, quod quis?
                </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} alt="" className='img-fluid my-4' />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} alt="" className='img-fluid my-4' />
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ipsum quaerat quasi delectus minima alias magni earum officiis, dolore velit a voluptatibus, vitae sunt repellat laborum consectetur reiciendis fugit perspiciatis impedit possimus fugiat quae officia facere! Libero, animi reiciendis rem cupiditate quis doloremque unde voluptate deserunt temporibus quasi sapiente natus ex praesentium quidem neque deleniti tempora magnam. Expedita, dolores, aliquid eos officiis quas pariatur tenetur asperiores officia qui minima saepe quis ipsam illo, voluptate voluptatibus. Ex dolore, mollitia nulla omnis rerum deserunt saepe maxime. Minus possimus perferendis quidem non!
                </p>

            </div>

            <div className='bg-dark text-light' >
                <ImageGallery />
            </div>
            <div className='my-5'>
                <Reviews/>
            </div>
        </div>
    )
}

export default About