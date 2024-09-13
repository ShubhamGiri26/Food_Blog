import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-head">
          <div className="head-part">
            <label className="logo">Food❤</label>

            <Link className="head-link" to="/">
              <i className="fa-solid fa-home"></i> Home
            </Link>
            <Link className="head-link" to="/about">About</Link>
            <Link className="head-link" to="/contact">Contact</Link>
            <Link className="head-link" to="/addtocart">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Link>
            <hr />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
