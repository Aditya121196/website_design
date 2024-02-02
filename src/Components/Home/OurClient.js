import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientReview from './ClientReview';

function OurClient() {
    const [settings] = useState({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    return (
        <div className="container ourclient-container">
            <h4 className="ourclient-heading text-center py-4">Our Clients</h4>
            <div className="ourclient-mainContainer">
                <div className="row ourclient-row p-5" >
                    <Slider {...settings}>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/picxele.png" alt="Slide 1" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/strix.png" alt="Slide 2" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/khoj.png" alt="Slide 3" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/Deu.png" alt="Slide 4" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/picxele.png" alt="Slide 5" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/strix.png" alt="Slide 6" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/khoj.png" alt="Slide 3" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img className='img-fluid' src="/assests/img/Deu.png" alt="Slide 4" />
                        </div>
                    </Slider>
                </div>
            </div>
            <ClientReview />
        </div>
    );
}

export default OurClient;




