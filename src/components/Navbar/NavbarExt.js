import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./NavbarExt.css";

const NavbarExt = () => {
  return (
    <div id="full-navbar">
      <div className="navbar-ext bg-dark-grad py-0">
        <div className="row">
          <div className="col-3 d-flex">
            <div className="brand-logo">
              <Link to="/">
                <img
                  id="logo"
                  className="brand-logo"
                  src={Logo}
                  alt="Brand Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-9 d-flex justify-content-end align-center">
            <ul className="nav-list m-0 d-flex">
              <Link to="/Favorites" className="fas fa-star bg-grn-grad"></Link>
              <Link to="/Signin" className="fas fa-user-circle bg-grn-grad mx-4"></Link>
            </ul>
            <form class="form-nav form-inline my-2 my-lg-0">
              <input
                class="form-control nav-search mr-sm-2"
                type="search"
                placeholder="Search Animals"
                aria-label="Search"
              />
              <button
                class="btn bg-grn my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarExt;
