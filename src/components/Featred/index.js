import React from "react";
import products from "../../productApi";

const Featred = () => {
    return (
        <div className="featured-items">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
             {products.map((element , index) => {
               return (
                <a href="single-product.html" key={index}>
                <div className="featured-item">
                  <img src={element.image} alt="Item 1"/>
                  <h4>{element.pname}</h4>
                  <h6>{element.price}</h6>
                </div>
              </a>
               );
             })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Featred;