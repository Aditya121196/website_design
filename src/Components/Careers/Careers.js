import './CareersStyle.css'
import OpenPositions from "./OpenPosition";
import WhyUs from "./WhyUs";

function Careers() {
  return (
    <div className="container-fluid careers-container" >
      <div className="row careers-header-section" >
        <div className="col-lg-12 col-md-12 col-sm-12 careers-header-col" >
          <h1>
            Be a part of this<br />
            diligent team.
          </h1>
          <p >Our promises designs tomorrow together<br />
            is at heart of everything we do</p>
          <button className="btn btn-lg rounded-pill mt-4" >Contact now</button>
        </div>
      </div>
      <OpenPositions />
      <WhyUs />
    </div >
  );
}

export default Careers;
