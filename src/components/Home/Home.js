import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import OurServices from '../OurServices/OurServices';
import UkUniversities from '../UkUniversities/UkUniversities';
import Carousel from '../Carousel/Carousel'

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <UkUniversities></UkUniversities>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <Blogs></Blogs>
            
        </div>
    );
};

export default Home;