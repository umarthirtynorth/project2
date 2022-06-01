import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Subcribe from "../Subcribe";
import Footer from "../Footer";
import products from "../../productApi";
import { useNavigate } from "react-router-dom";

const Product = () => {
  
  const navigate = useNavigate();
  const [product, setProduct] = useState(products);
  const [sortType, setSortType] = useState('items');
  const [searchedText, setSearchText] = useState("")


  const filterProduct = (proCat) => {
    const updatedProducts = products.filter((curElem) => {
      return curElem.category === proCat;
    });

    setProduct(updatedProducts);
  }

  const handleClick = (id) => {
    navigate("/product/"+ id +"/detail")
  }

  const handleDelete = (id) => {
    const newPro = product.filter((remove) => {
      return remove.id !== id;
    });
    
    setProduct(newPro);
  }

  // const strAscending = [...product].sort((a, b) =>
  //   a.pname > b.pname ? 1 : -1,
  // );

  useEffect(() => {
    const sortArray = type => {
      const types = {
        pname:"pname",
        date: 'date',
        time: 'time'
      };
      const sortProperty = types[type];
      const sorted = [...product].sort((a, b) => b[sortProperty] < a[sortProperty] ? 1 : -1);
      setProduct(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    const filProduct = products.filter((el, idx) => {
      return el.category.toLowerCase().includes(searchedText.toLowerCase());
    });
    // console.log(filProduct)
    setProduct(filProduct);
  }, [searchedText]);

    return (
        <div>
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
                  <div className="col-md-8 col-sm-12">
                    <div id="filters" className="button-group">
                      <button className="btn btn-primary" onClick={() => setProduct(products)}>All Products</button>
                      <button className="btn btn-primary" onClick={() => filterProduct("Pants")}>Pants</button>
                      <button className="btn btn-primary" onClick={() => filterProduct("Jacket")}>Jackets</button>
                      <button className="btn btn-primary" onClick={() => filterProduct("Sneaker")}>Sneakers</button>
                      <button className="btn btn-primary" onClick={() => filterProduct("Bag")}>Bags</button>
                      <select onChange={(e) => setSortType(e.target.value)}> 
                        <option value="time">Most Recent</option>
                        <option value="pname">Sort by Name</option>
                        <option value="date">Sort by Date</option>
                      </select>
                      <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            
            <div className="featured container no-gutter">
            <div className="row posts" >
                {product.map((element, index) => {
                  return(
                    
                    <div id="1" className="item new col-md-4" key={index}>
                      
                        <div className="featured-item">
                          <img src={element.image} alt="..."/>
                          <h4> {element.pname} </h4>
                          <h4> {element.category} </h4>
                          <h6> {element.price} </h6>
                          <p>{element.date}</p>
                          <p>{element.time}</p>
                          <button className="btn btn-primary" onClick={() => handleClick(element.id)}>Detail</button>
                          <button className="btn btn-primary" onClick={() =>handleDelete(element.id)}>Delete</button>
                        </div>
                      
                    </div>
                    
                
                  );
                })}
                </div>
            </div>

            
            <Subcribe />
            <Footer />
        </div>
    );  
};

export default Product;