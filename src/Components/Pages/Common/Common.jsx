import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import Brands from '../Brands/Brands';
import Counter from '../Counter/Counter';
import Picks from '../Picks/Picks';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Arrivals from '../Arrivals/Arrivals';

const Common = () => {
    return (
        <div>
            <PageTitle titles={'Home'}></PageTitle>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Brands></Brands>
            <Counter></Counter>
            <Picks></Picks>
            <Arrivals></Arrivals>
        </div>
    );
};

export default Common;