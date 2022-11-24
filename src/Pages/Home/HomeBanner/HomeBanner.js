import React from 'react';
import banner1 from '../../../assets/banner/1.png'
const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-white via-secondary to-white">
                <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                    <img src={banner1} className="w-1/2 mt-[-80px]" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-accent text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;