import React from 'react';
import Categories from '../Category/Categories';
import Gitter from '../Gitter/Gitter';
import HomeBanner from '../HomeBanner/HomeBanner';
import Information from '../Information/Information';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            <Gitter></Gitter>
            <Information></Information>
        </div>
    );
};

export default Home;