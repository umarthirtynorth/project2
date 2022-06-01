import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Featred from "../Featred"
import Subcribe from "../Subcribe";
import Footer from "../Footer";


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Featred />
            <Subcribe />
            <Footer />
        </>
    );
};

export default Home;