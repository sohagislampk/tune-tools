import React from 'react';
import banner1 from '../../../assets/banner/1.png'
const HomeBanner = () => {
    return (
        <div>
            <div className="hero h-4/5 bg-gradient-to-r from-white via-secondary to-white">
                <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                    <img src={banner1} className="lg:w-1/2 h-4/5" alt='' />
                    <div className='lg:w-1/2 '>
                        <h1 className="text-5xl font-bold">Buy And Sell News!</h1>
                        <p className="py-6">Avoid typos! While misspelled words are understandable by most humans, they will trick most search engines and categorization tools. You just start Sale your unused Musical Intruments.
                            Buy or sale your favourite product !!!</p>
                        <button className="btn btn-accent text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;