import React from 'react';
import Banner from '../Banner/Banner'
import Work from '../Work/Work';
import Services from '../Our-Services/Services';
import Delivery from '../../Delivery/Delivery';
import Merchant from '../../Merchant/Merchant';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Faq from '../../FAQ/Faq';

const reviewsPromise = fetch('../../../../public/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Brands></Brands>
            <Delivery></Delivery>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;