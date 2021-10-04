import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-info bg-gradient mb-5">
            <h2>About Us</h2>
            <div className="card mb-3 bg-info bg-gradient">
            <div className="row g-4 m-4 d-flex align-items-center">
                <div className="col-md-4">
                <img src="https://i.ibb.co/5YgTwVf/man-s-hand-holds-white-card-with-text-consulting-open-paper-notebook-magnifying-glass-black-frame-bu.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 text-start">
                <div className="card-body">
                    <h5 className="card-title">Know about us</h5>
                    <h2 className="card-title">Edu Hub Global, Who we are</h2>
                    <h5 className="card-title">We've been counselling students for the educational Opportunity in the United Kingdom.</h5>
                    <p className="card-text">Since its journey in 2010, the name has been working successfully as an educational consultancy agency in the UK education industry. For over 10 years, we offer consultancy services to international students looking to be part of the best UK universities.
                    We provide professional guidance to international students to find their desirable institution for admission. Our small but talented and vastly experienced pool of admission advisers, counselors, and other teams provide the best support to help the candidates to find their dream university.</p>
                    <p className="card-text">Our agency always works for the student's wellbeing. We make sure prospective students find the perfect educational institution to study. And we try to guide the student to get to their desired institute. All that is possible thanks to our brilliant team of experts who are mostly graduated from top UK universities and hold advisor certificates for UK higher study. Their vast knowledge about the UK educational system makes it easier for them to help you get admitted to the right institute.</p>
                    <p className="card-text">We are a British Council certified agent in the UK. Our partnership with many universities in the UK helps us get potential applicants to find a top university within the country.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;