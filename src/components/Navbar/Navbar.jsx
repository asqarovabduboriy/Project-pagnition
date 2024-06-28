import React from "react";
import logo from "../../assets/imgs/Logo.svg";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container flex_elemnt">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/createProduct">Create Product</NavLink>
              </li>
            </ul>
          </nav>

          <form className="search_form">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </form>

          <div className="icons">
          <NavLink to="/login"><FaUser/></NavLink>
           <CiHeart/>
           <FaShoppingCart/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
