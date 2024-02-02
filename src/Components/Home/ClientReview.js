import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientReview() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container clientReview-container-new pt-5">
            <div className="row ClientReview-row pt-5 " >
                <div className="col-lg-6 col-md-12 col-sm-12" >
                    <h1>What our clients say about our work.</h1>
                    <p> Description of the first reason we give in a simple and understandable way in this many words</p>
                </div>
                <div className="card ClientReview-card col-lg-6 col-md-12 col-sm-12 p-4">
                    <div>
                        <Slider {...settings}>
                            {data.map((d) => (
                                <div key={d.name} >
                                    <div>
                                        <p>{d.review}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h5>{d.name}</h5>
                                            <p style={{ color: '#949494' }}>{d.location}</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <img src={d.img} alt="logo" className="img-fluid rounded-circle ms-auto" style={{ width: "100px" }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: `Prahlad Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. 
        I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    },
    {
        name: `Ramesh Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. 
        I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    },
    {
        name: `Prahlad Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. 
        I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    }

];

export default ClientReview;