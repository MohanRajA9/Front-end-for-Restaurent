import React from 'react'
import gallery1 from '../utils/img/gallery1.jpg'
import gallery2 from '../utils/img/gallery2.jpg'
import gallery3 from '../utils/img/gallery3.jpg'
import gallery4 from '../utils/img/gallery4.jpg'
import gallery5 from '../utils/img/gallery5.jpg'
import gallery6 from '../utils/img/gallery6.jpg'

export function ImageGallery() {
    return (
        <div className='container py-5' >
            <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold' > Image Gallery </h2>
            <div className='row' >
                <div className='col-md-4 px-2'>
                    <div className='my-3' >
                        <img src={gallery1} alt='' className='img-fluid' />
                    </div>
                    <div className='my-3' >
                        <img src={gallery2} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-4 px-2' >
                    <div className="my-3">
                        <img src={gallery3} alt="" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={gallery4} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={gallery5} alt="" className="img-fluid" />
                    </div>
                    <div className="my-3">
                        <img src={gallery6} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
} 