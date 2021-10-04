import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-info bg-gradient mb-5">
            <h2>News and Blogs</h2>
            <div className="card mb-3 bg-info bg-gradient">
            <div className="row g-4 m-4 d-flex align-items-center">
                <div className="col-md-4">
                <img src="https://i.ibb.co/fH9SyL6/1200px-Uk-border-agency-logo-svg.png" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 text-start">
                <div className="card-body">
                    
                    <h2 className="card-title">Why study in the UK?</h2>
                    
                    <p className="card-text">Places like England, Scotland, and Ireland are the most sought-after destination for students. It shouldn't come as a surprise as most of the top-ranked universities are from these regions. </p>
                    <p className="card-text">Their shorter study programs alongside the opportunity to travel and discover various cultures make the UK a prime location for international students.</p>
                    <p className="card-text">There are many reasons to go and study in the UK.</p>
                    <p className="card-text">Their high-standard academic quality puts them at the forefront of desired institutions to study. Many leading research institutions are in the UK. The teaching quality and material are up-to-date to help you get geared to go out anywhere and get your career up and running.</p>
                    <p>Unlike other countries, the UK is a place where multiple cultures get together, which offers a unique experience like nothing else. It is a great opportunity to learn about other cultures and gain a broader understanding of them to prepare for the real world.</p>
                    
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blogs;