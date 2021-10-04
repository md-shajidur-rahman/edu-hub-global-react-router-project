import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import OurServices from '../OurServices/OurServices';
import UkUniversities from '../UkUniversities/UkUniversities';

const Home = () => {
    return (
        <div>
            <UkUniversities></UkUniversities>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <Blogs></Blogs>
            
        </div>
    );
};

export default Home;