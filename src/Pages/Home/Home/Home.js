import React from 'react';
import Advertise from '../Advertise/Advertise';
import Categories from '../Category/Categories';
import Gitter from '../Gitter/Gitter';
import HomeBanner from '../HomeBanner/HomeBanner';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Advertise></Advertise>
            <Categories></Categories>
            <Gitter></Gitter>
            <Information></Information>
        </div>
    );
};

export default Home;