import './BlogStyle.css'
function Blogs() {
  return (
    <div className="container-fluid blog-section">
      {/* part-1 */}
      <div className="row align-items-end blog-featured-section p-5" style={{ backgroundImage: 'url("/assests/img/card3.png")' }} >
        <div className="col-sm-12 col-md-12 col-lg-12 pt-5">
          <h1 className="pt-5">FEATURED</h1>
          <h3 className="pt-2">How I Use the iPad Pro To Do The Actual Work</h3>
          <p className="pt-2">
            Our promises,designs tomorrow together,is at the heart of everything we do
            designs tomorrow together,is at the heart....
          </p>
        </div>
      </div>
      <div className="row blog-featured-content p-5">
        <a href="/bloginsider" className="col-md-4 blog-featured-content-item p-4" >
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card1.png" alt="logo" />
            </div>
            <div>
              <h4>How I Use the iPad Pro To DO
                Actual Work?</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
        <a href="/bloginsider5" className="col-md-4 blog-featured-content-item p-4">
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card3.png" alt="logo" />
            </div>
            <div>
              <h4>How I Use the iPad Pro To DO
                Actual Work?</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
        <a href="/bloginsider3" className="col-md-4 blog-featured-content-item p-4"  >
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card2.png" alt="logo" />
            </div>
            <div>
              <h4>How AI is bringing a brig
                change in IT industry.</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
        <a href="/bloginsider4" className="col-md-4 blog-featured-content-item p-4" >
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card1.png" alt="logo" />
            </div>
            <div>
              <h4>How I Use the iPad Pro To DO
                Actual Work?</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
        <a href="/bloginsider5" className="col-md-4 blog-featured-content-item p-4" >
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card3.png" alt="logo" />
            </div>
            <div>
              <h4>How I Use the iPad Pro To DO
                Actual Work?</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
        <a href="/bloginsider6" className="col-md-4 blog-featured-content-item p-4" >
          <div className="blog-feature-item">
            <div>
              <img className="img-fluid blog-img" src="/assests/img/card2.png" alt="logo" />
            </div>
            <div >
              <h4>How AI is bringing a brig
                change in IT industry.</h4>
              <p>Our promises, designs tomorrow
                together, is at the heart of everything...</p>
              <p className="blog-card-content" ><b>02 November 2023</b></p>
            </div>
          </div>
        </a>
      </div>
      {/* part-1 */}
      <div className="row blog-contact-section p-5 text-center" >
        <div className="col-md-6 blog-contact-section-fcol" >
          <h2 className="blog-contact-heading">Are you prepared optimize your
            company's growth potential?</h2>
        </div>
        <div className="col-md-6 blog-contact-section-scol" >
          <button className="btn btn-lg rounded-pill blog-contact-button">Contact now</button>
        </div>
      </div>
    </div >
  );
}
export default Blogs;
