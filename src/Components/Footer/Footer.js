import './FooterStyle.css'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid footer p-5" >
      <div className="row">
        <div className="col-md-4 py-4 footer-logo">
          <img src="/assests/img/logowhite.png" alt="Logo" />
          <p className="pt-2 footer-description" >WE ACCOMPLISH ON YOUR ASPIRATIONS</p>
        </div>
        <div className="col-md-4 py-4 footer-quick">
          <h5>Quick links</h5>
          <div className="row">
            <div className="col-md-6">
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/" >About</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="footer-links">
                <li>
                  <Link to="/blogs" >Blog</Link>
                </li>
                <li>
                  <Link to="/careers" >Careers</Link>
                </li>
                <li>
                  <Link to="/contacts" >Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-4">
          <h3>Subscribe Now</h3>
          <div className="input-group mt-4">
            <input type="email" className="form-control" placeholder="Recipient Email" />
            <div className="input-group-append" style={{ position: 'absolute', right: '0', height: '100%' }}>
              <span className="input-group-text" style={{ height: '100%' }}>
                <i className="fas fa-paper-plane"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-copy justify-content-center pt-4 pb-2 px-5">
        <div className="footer-reserved-div col-md-6 text-center">
          <p className="footer-reserved" style={{ color: "whitesmoke" }}>&copy; FOXAISR | 2020 - All rights reserved.</p>
        </div>
        <div className="col-md-6 text-center pb-3">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>

  );
}

export default Footer;