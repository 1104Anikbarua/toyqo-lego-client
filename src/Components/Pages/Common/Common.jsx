import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import Brands from '../Brands/Brands';
import Counter from '../Counter/Counter';
import Picks from '../Picks/Picks';

const Common = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Brands></Brands>
            <Counter></Counter>
            <Picks></Picks>
        </div>
    );
};

export default Common;