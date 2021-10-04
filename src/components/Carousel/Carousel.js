import React from 'react';

const Carousel = () => {
    return (
        <div className="mb-5 pb-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://i.ibb.co/sjPZXvC/carousel-2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block text-white position-absolute top-50 start-0 translate-middle-y .translate-middle-x text-start ps-5 ms-5">
                    <h1>EduHub Global is One of the <br />
                     Largest UK Universities <br />
                      Representative</h1>
                    <h5 className="text-dark">100% FREE Career Counselling and Admission Processing</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://i.ibb.co/Cw1rTgD/carousel-1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block text-white mb-5 ">
                    <h1>Admission Open for January 2022</h1>
                    <h5 className="text-dark">100% FREE Education Counselling and Admission Processing</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    );
};

export default Carousel;