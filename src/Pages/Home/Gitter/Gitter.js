import React from 'react';
import banner2 from '../../../assets/banner/2.png'
const Gitter = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-white via-secondary to-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner2} className="w-full lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='w-full lg:w-1/2'>
                        <h1 className=" text-3xl lg:text-5xl font-bold">Crossroads Dreadnought Acoustic</h1>
                        <p className="py-6 w-full">Constructed from mahogany, the guitar's neck offers a quick and
                            dynamic response with added resonance and warmth.</p>
                        <button className="btn btn-accent text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gitter;