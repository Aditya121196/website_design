import React from 'react';
function Why() {
    return (
        <>
            <div className="container home-why-container " >
                {/* part-1 start */}
                <div className="row home-why-frow ">
                    <div className="home-why-fcol col-md-4 text-center">
                        <img className="home-why-fimg img-fluid d-none d-md-block text-center mt-5" src="/assests/img/2choos us.png" alt="logo" />
                    </div>
                    <div className="home-why-scol col-md-4 mt-5 ">
                        <h1 className=" home-why-title text-center">Why to <b style={{ fontSize: "50px" }}> choose </b> us ?</h1>
                    </div>
                    <div className="home-why-tcol col-md-4">
                        <img className="img-fluid home-why-simg d-none d-md-block ms-auto text-md-end" src="/assests/img/3choos us.png" alt="logo" />
                    </div>
                </div>
                {/* part-1 end */}

                {/* part-2 start */}
                <div className="row home-why-srow" >
                    <div className="col-md-4 col-sm-12 home-why-col my-2 border-md-right">
                        <div className='mx-4 mb-4'>
                            <h5>Best Performance</h5>
                            <p>Foxaisr is always committed to delivering high quality and
                                efficient products on a given timeline. Many of our clients have recognized us as the best
                                performer among all partners so far worked with.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 home-why-col my-2 border-md-right">
                        <div className='mx-4 mb-4'>
                            <h5>Dedicated Team Member</h5>
                            <p>Because of having a smart and flexible team, we are  able to complete with the deadlines.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-2 home-why-col">
                        <div className='mx-4 mb-5'>
                            <h5>24/7 Hours Support</h5>
                            <p> Once your product/platform is live on production. Our team is ready to identify the
                                issue and resolve it immediately, whenever you report any issue.</p>
                        </div>
                        <div className=" home-why-timg d-md-flex flex-column align-items-center">
                            <img className="img-fluid d-none d-md-block" src="/assests/img/1choos us.png" alt="logo" />
                        </div>
                    </div>

                </div>
                {/* part-2 ends */}
            </div>

            {/* part-3 starts */}
            <div className='container home-why-new '>
                <div className="d-flex justify-content-center">
                    <div class="d-inline-flex  flex-column flex-sm-row home-why-stats">
                        <div className="py-2 px-5">
                            <h1>240+</h1>
                            <p>Successfully executed<br /> projects</p>
                        </div>
                        <div className="py-2 px-5">
                            <h1>50+</h1>
                            <p>Served clients</p>
                        </div>
                        <div className="py-2 px-5">
                            <h1>2 Flagship</h1>
                            <p> Product Catering to the B2B<br /> Solution and Edtech sector</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* part-3 ends */}

            <div className="container why-technologies mt-3">
                <div className="row why-technologies-row align-items-center justify-content-center">
                    <div className=" why-technologies-fcol col-lg-12 col-md-12 col-sm-12 px-5">
                        <img className="img-fluid text-center" src="/assests/img/tech.png" alt="logo" />
                    </div>
                    <div className="why-technologies-scol col-lg-12 col-md-12 col-sm-12 p-5 ">
                        <h1 className='text-center'>The <span className='gradient-text'>technologies</span> we work with</h1>
                        <p className='px-3 align-items-center'>
                            Description of the first reason we give in a simple and understandable way in this many words
                            Description of the first reason we give in a simple and Description of the first reason we give
                            in a simple and understandable way in this many wordsunderstandable way in this many words
                        </p>
                    </div>
                </div >
            </div >
        </>
    );
}
export default Why;
