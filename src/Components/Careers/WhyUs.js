import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';

function WhyUs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container whyus-container">
            <h1 className=" whyus-title text-center my-4"> Why work with us</h1>
            <div className="row whyus-main-row py-3 px-4">
                <div className="col-md-4 whyus-main-col p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F1.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyus-main-col p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F2.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyus-main-col  p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F1.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyus-main-col  p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F4.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyus-main-col  p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F5.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyus-main-col  p-3">
                    <div className="row whyus-row">
                        <div className="col-md-3 whyus-col">
                            <img className="img-fluid" src="/assests/img/F6.png" alt="logo" />
                        </div>
                        <div className="col-md-9 why-joining">
                            <p>Joinning Foxaisr is not  just a workplace.It's all about life, every day we are
                                dealing with new challenges. where</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  part-1 end */}

            {/*  part-2 start */}
            <div className="row whyUs-row">
                <div className="col-lg-4 col-md-4 col-sm-12 whyUs-col p-5" >
                    <div className="whyUs-card p-3">
                        <div className="whyUs-card-content">
                            <p>A typical<br />
                                day at<br />
                                work.</p>
                            <p>
                                <img className="img-fluid" src="/assests/img/dot.png" alt="logo" />
                            </p>
                        </div>
                        <div className="whyUs-hover-content">
                            <p>At Foxaisr, work is more<br /> than just a job - it's a <br />
                                calling, To build, To design,<br /> To code.To think along with<br />
                                client's demands and make <br />the best product.To make<br /> markets for the customer.<br />
                                To invent. To make markets <br />
                                for the customer.To invent</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 whyUs-col p-5 " >
                    <div className="whyUs-card p-3" >
                        <div className="whyUs-card-content">
                            <p> Values <br />
                                that we<br />
                                live by.</p>
                            <p>
                                <img className="img-fluid" src="/assests/img/dot.png" alt="logo" />
                            </p>
                        </div>
                        <div className="whyUs-hover-content">
                            <p>At Foxaisr, work is more<br /> than just a job - it's a <br />
                                calling, To build, To design,<br /> To code.To think along with<br />
                                client's demands and make <br />the best product.To make<br /> markets for the customer.<br />
                                To invent. To make markets <br />
                                for the customer.To invent</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 whyUs-col p-5">
                    <div className="whyUs-card p-3">
                        <div className="whyUs-card-content" >
                            <p >Woking<br />
                                with the<br />
                                best.</p>
                            <p>
                                <img className="img-fluid" src="/assests/img/dot.png" alt="logo" />
                            </p>
                        </div>
                        <div className="whyUs-hover-content">
                            <p>At Foxaisr, work is more<br /> than just a job - it's a <br />
                                calling, To build, To design,<br /> To code.To think along with<br />
                                client's demands and make <br />the best product.To make<br /> markets for the customer.<br />
                                To invent. To make markets <br />
                                for the customer.To invent</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  part-2 end */}

            {/* part-3 start */}
            <div className="row ClientReview-row py-5" >
                <div className="col-lg-6 col-md-12 col-sm-12 " >
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

            {/* part-3 end */}
        </div >

    );
}
const data = [
    {
        name: `Prahlad Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    },
    {
        name: `Ramesh Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    },
    {
        name: `Prahlad Kumar`,
        location: `Banglore, INDIA`,
        img: `/assests/img/prahlad_kumar.png`,
        review: `Suraj has been easy to work with; he is willing to go the extra mile to satisfy requirements. I have awarded multiple projects 
        over the last year, evidence that he is reliable in delivery.`
    }

];

export default WhyUs;