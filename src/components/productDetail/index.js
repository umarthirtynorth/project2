import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  products from "../../productApi";
import Navbar from "../Navbar";
import Subcribe from "../Subcribe";
import Footer from "../Footer";


const ProductDetail = () => {
  const {id} = useParams();
  const [productDetail , setProductDetail] = useState(
    {
    id : "",
    image : "",
    pname : "",
    category : "",
    description: "",
    price : ""
  }
    
  );

  useEffect(() => {
    const result = products.find((element) => {
      return element.id == id;
    })
    // console.log(result)
    setProductDetail(result);
    
  }, [])

    return (
       <>
       <Navbar />
         <div className="featured-page">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="section-heading">
                      <div className="line-dec"></div>
                      <h1>Featured Items</h1>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          
            <div className="featured container no-gutter">
            <div className="row posts" >
                    
                    <div id="1" className="item new col-md-4">
                      
                        <div className="featured-item">
                          <img src={productDetail.image} alt="..."/>
                          <h4> {productDetail.pname} </h4>
                          <h4> {productDetail.category} </h4>
                          <p>  {productDetail.description} </p>
                          <h6> {productDetail.price} </h6>
                        </div>
                      
                    </div>
                  
                </div>
            </div>

            <Subcribe />
            <Footer />
       </>
          
          
    );  
};

export default ProductDetail;


 
      