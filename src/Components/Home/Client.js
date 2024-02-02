function Client() {
    return (
        <div className="client-section" >
            <div className="row client-contact-section p-5 text-center" >
                <div className="col-md-6 client-contact-section-fcol" >
                    <h2 className="client-contact-heading">Are you prepared optimize your
                        company's growth potential?</h2>
                </div>
                <div className="col-md-6 client-contact-section-scol" >
                    <button className="btn btn-lg rounded-pill client-contact-button " style={{
                        background: "black", color: " white",
                        fontWeight: "bold", padding: "0.8rem 2.5rem", textAlign: "center"
                    }}>
                        Contact now</button>
                </div>
            </div>
            <div className="row client-featured-content p-5">
                <a href="/bloginsider" className="col-md-4 client-featured-content-item p-4" >
                    <div className="client-feature-item">
                        <div>
                            <img className="img-fluid client-img" src="/assests/img/card1.png" alt="logo" />
                        </div>
                        <div>
                            <h4>How I Use the iPad Pro To DO
                                Actual Work?</h4>
                            <p>Our promises, designs tomorrow
                                together, is at the heart of everything...</p>
                            <p className="client-card-content" ><b>02 November 2023</b></p>
                        </div>
                    </div>
                </a>
                <a href="/bloginsider5" className="col-md-4 client-featured-content-item p-4" >
                    <div className="client-feature-item">
                        <div>
                            <img className="img-fluid client-img" src="/assests/img/card3.png" alt="logo" />
                        </div>
                        <div>
                            <h4>The Non Profit Organistion
                                working at its best.</h4>
                            <p>Our promises, designs tomorrow
                                together, is at the heart of everything...</p>
                            <p className="client-card-content" ><b>02 November 2023</b></p>
                        </div>
                    </div>
                </a>
                <a href="/bloginsider1" className="col-md-4 client-featured-content-item p-4" >
                    <div className="client-feature-item">
                        <div>
                            <img className="img-fluid client-img" src="/assests/img/card2.png" alt="logo" />
                        </div>
                        <div >
                            <h4>How AI is bringing a brig
                                change in IT industry.</h4>
                            <p>Our promises, designs tomorrow
                                together, is at the heart of everything...</p>
                            <p className="client-card-content" ><b>02 November 2023</b></p>
                        </div>
                    </div>
                </a>
            </div>
        </div >

    );
}

export default Client;
