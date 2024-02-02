import OurProducts from "./OurProducts";
import './ProductStyle.css'

function Products() {
  return (
    <div className="container-fluid products-container" >
      <div className="row products-row" >
        <div className="col-lg-12 col-md-12 col-sm-12 products-col" >
          <h1>
            We build products<br />
            that user love.
          </h1>
          <p >Our promises designs tomorrow together<br />
            is at heart of everything we do.</p>
          <button className="btn btn-lg rounded-pill mt-4">Contact now</button>
        </div>
      </div>
      <OurProducts />
    </div >
  );


}

export default Products;
