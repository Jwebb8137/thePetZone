import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div>
      <nav class="navbar fixed-bottom navbar-dark p-0">
        <div class="container-fluid p-0">
          <div id="bottom-nav" class="navbar nav-justified w-100">
            <NavLink
              exact
              to="/"
              className="nav-link active"
              aria-current="page"
              activeClassName="bottom-nav-active"
            >
              <i class="fas fa-home"></i>
            </NavLink>
            <NavLink
              exact
              to="/Search"
              class="nav-link"
              activeClassName="bottom-nav-active"
            >
              <i class="fas fa-search"></i>
              <span></span>
            </NavLink>
            <NavLink
              exact
              to="/Favorites"
              class="nav-link"
              activeClassName="bottom-nav-active"
            >
              <i class="far fa-star"></i>
            </NavLink>
            <NavLink
              exact
              to="Signin"
              className="nav-link"
              activeClassName="bottom-nav-active"
            >
              <i class="far fa-user-circle"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
