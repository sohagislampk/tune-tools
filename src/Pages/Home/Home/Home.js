import React from 'react';
import Gitter from '../Gitter/Gitter';
import HomeBanner from '../HomeBanner/HomeBanner';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Information></Information>
            <Gitter></Gitter>
        </div>
    );
};

export default Home;