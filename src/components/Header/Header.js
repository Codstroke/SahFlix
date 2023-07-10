import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";





const Header = () => {
  return (
   <header className="showcase">
    <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo"/>
        
        <Link to ="/" className="btn btn-rounded">
            Sign In
        </Link>
        <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
           
            </form>
          </div>


    </div>
    <div className="showcase-content" >
        <h1>Unlimited Movies, Tv shows and more</h1>
        <p>Watch anywhere. Cancel Anytimes</p>
        <Link to="/netflix-show " className="btn-header btn-x1">
            Watch Free For 30 Days{" "}
            <i className="fas fa-chevron-right btn-icon" ></i>
        </Link>

    </div>
   </header>
  );
};

export default Header;
