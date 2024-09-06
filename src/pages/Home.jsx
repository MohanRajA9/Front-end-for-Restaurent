import React from 'react';
import {Menubtn} from '../components/MenuBtn'
function Home() {
    return (
        <div className='home-page' >
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow' >
                <div className='container' >
                    <div className='row' >
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center' >
                            <h2 className='mb-0 text-black fw-bold' >
                                welcome To
                            </h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start' >
                                React Restaurant
                            </h1>
                            <Menubtn/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home