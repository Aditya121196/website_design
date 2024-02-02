import './ContactStyle.css'
function Contacts() {
  return (
    <div className="container-fluid contacts">
      {/* part 1 start */}
      <div className="row contacts-main">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 contacts-first" >
          <div className="contacts-main-div">
            <h1>Contact us</h1>
            <p>
              We're ready to lead you into the future of
              digital world.We're ready to lead you into the
              future of digital world.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 text-center" >
          <img src="/assests/img/Contact us-bro 1.png" className="img-fluid" alt="logo" />
        </div>
      </div>
      {/* part 1 end */}

      {/* part 2 start */}
      <div className="row contacts-details mt-5">
        {/* Office Detail Start here */}
        <div className="col-sm-12 col-md-6 py-3 con-info">
          <div className="row ">
            <div className="col-md-2 contacts-icon" >
              <img src="/assests/img/location.png" className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-10 contacts-info">
              <p>238, Scheme No. 114 Part 1, Opposite Mahindra Showroom, Vijay Nagar,AB Road, Indore M.P. (452010)-India</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 contacts-icon">
              <img src="/assests/img/phone.png" className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-10 contacts-info">
              <p>+91 808 437 8326 <br />
                +91 829 205 0483</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 contacts-icon">
              <img src="/assests/img/mail.png" className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-10 contacts-info">
              <p>info@foxaisr.com</p>
            </div>
          </div>
        </div>

        {/* Office Detail End here */}

        {/* Fill the form  start*/}
        <div className="col-sm-12 col-md-6 py-3 px-5 contacts-form ">
          <h2 className="text-center ">Fill The Form</h2>
          <form className="form-group contacts-form-group" >
            <label className="form-label" >Name</label><br />
            <input type="text" className="form-control rounded-pill custom-placeholder" placeholder="Enter Name" /><br />
            <label className="form-label">Email Address</label><br />
            <input type="email" className="form-control rounded-pill custom-placeholder" placeholder="Enter email address" /><br />
            <label className="form-label">Phone Number</label><br />
            <input type="number" className="form-control rounded-pill custom-placeholder" placeholder="Enter phone number" /><br />
            <button className="btn btn-lg form-control rounded-pill" >Submit</button>
          </form>
        </div>
        {/* Fill the form ends*/}
      </div>
    </div >

  );
}
export default Contacts;
