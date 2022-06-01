import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../images/headerLogo.png";
import SearchBar from "../SearchBar";
const Navbar = () => {
  const navigate = useNavigate();
  function logout(){
     localStorage.removeItem("login");
     navigate('/login');
 }
    return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <a className="navbar-brand" href="#"><img src={headerLogo} alt=""/></a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home
                      {/* <span className="sr-only">(current)</span> */}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout} to="/login">logOut</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
                  </li> */}
                  {/* <SearchBar /> */}
                </ul>
                
              </div>
              
            </div>
          </nav>

    );
};

export default Navbar;