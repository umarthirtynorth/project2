import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
//import Contact from "../Contact";
import Product from "../Product";
import About from "../About";
import ProductDetail from "../productDetail";
import Login from "../Login";
import SignUp from "../SignUp";


const Router = () => {
    //const user = localStorage.getItem('login');
    //console.log(user)
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element= {<Login />} />
                <Route path="/signup" element= {<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id/detail" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                
            </Routes>
        </BrowserRouter>
    </>
    );
};

export default Router;