import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Banner2></Banner2>
            <Review></Review>
            <Footer></Footer>
        </div>

    );
};

export default Home;