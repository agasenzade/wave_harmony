import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import myLogo from "../assets/LOGO.png";
import { WishIcon } from "../assets/wish";
import { Search } from "../assets/search";
import { Bag } from "../assets/bag";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="nav-logo">
            <img src={myLogo} alt="logo" />
          </Link>
        </div>
        <div className={'navbar-container ${isOpen && "open"}'}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/catalog" className="nav-links">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dimensions" className="nav-links">
                Dimensions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shipping" className="nav-links">
                Shipping and payment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-sale">
              <Link to="/saleUp" className="nav-sale">
                Sale up to -40%
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-icon">
                <Search />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-icon">
                <WishIcon />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productBasket" className="navbar-icon">
                <Bag />
              </Link>
              <span>{cart.length}</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
