import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* logo on left */}
        <Link to="/">
          <img
            className="navbar_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </Link>
        {/* Search box */}
        <div className="navbar_search">
          <input type="text" className="navbar_searchBox" name="" id="" />
          <SearchIcon className="navbar_searchBoxIcon"></SearchIcon>
        </div>

        {/* 3 links */}
        <div className="navbar_nav">
          {/* 1st Link */}
          <Link to = "/login" className="navbar_link">
            <div className="navbar_Option">
              <span className = "navbar_OptionLineOne">Hello</span>
              <span className = "navbar_OptionLineTwo">Sign In</span>
            </div>
          </Link>

          {/* 2nd Link */}
          <Link to="/" className="navbar_link">
            <div className="navbar_Option">
              <span className = "navbar_OptionLineOne">Returns</span>
              <span className = "navbar_OptionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd Link */}
          <Link className="navbar_link">
            <div className="navbar_Option">
              <span className = "navbar_OptionLineOne">Your</span>
              <span className = "navbar_OptionLineTwo">Prime</span>
            </div>
          </Link>

          {/* Shopping Cart */}
          <Link className = "navbar_link">
              <div className="navbar_OptionBasket">
                  <ShoppingCart/>
                  <span className = "navbar_OptionLineTwo navbar_OptionBasketCount">0</span>

              </div>
          </Link>
        </div>
        
      </div>
    );
  }
}
