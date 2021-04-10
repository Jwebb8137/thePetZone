import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.jpg";
import NavbarExt from "./NavbarExt";

export default class Navbar extends React.Component {
  handleMenu = () => {
    document.getElementById("nav").classList.toggle("nav-respond");
  };

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.setAuth(false);
    window.location = "/";
  };

  render() {
    if (this.props.isAuth) {
      return (
        <Fragment>
          <header className="mobile-nav">
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
            <nav>
              <ul id="nav" className="navigation bg-dark-grad-vertical">
                <Link to="/Account" onClick={this.handleMenu}>
                  <div className="d-flex flex-column align-items-center">
                    <img id="sidebar-img" className="my-1" src={Profile} />
                    <span className="helper-text">
                      Llama Joe
                      <br />
                      <span className="sub-text">Da Mountains, Chile</span>
                    </span>
                  </div>
                </Link>
                <div className="row mt-3 d-flex justify-content-center">
                  <div className="col-5 p-0">
                    <Link to="/">
                      <li className="" onClick={this.handleMenu}>
                        <i className="fas fa-home"></i>
                        <span className="w-100 d-block">Home</span>
                      </li>
                    </Link>
                  </div>
                  <div className="col-5 p-0">
                    <Link to="/Favorites">
                      <li onClick={this.handleMenu}>
                        <i class="fas fa-star"></i>
                        <span className="w-100 d-block">Favorites</span>
                      </li>
                    </Link>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-5 p-0">
                    <Link to="/Signin">
                      <li onClick={this.handleMenu}>
                        <i className="fas fa-user"></i>
                        <span className="w-100 d-block">Account</span>
                      </li>
                    </Link>
                  </div>
                  <div className="col-5 p-0">
                    <Link to="/Search">
                      <li onClick={this.handleMenu}>
                        <i class="fas fa-search"></i>
                        <span className="w-100 d-block">Search</span>
                      </li>
                    </Link>
                  </div>
                </div>
                <label
                  htmlFor="toggle-btn"
                  className="hide-menu-btn"
                  onClick={this.handleMenu}
                >
                  <i className="fas fa-times"></i>
                </label>
                <button
                  id="nav-logout"
                  className="dash-btn"
                  onClick={(e) => this.logout(e)}
                >
                  Logout <i className="fas fa-sign-in-alt"></i>
                </button>
                <img src={Logo} id="mobile-logo" alt="Puppy Love Logo" />
              </ul>
              <label htmlFor="toggle-btn" className="show-menu-btn">
                <i className="fas fa-bars" onClick={this.handleMenu}></i>
              </label>
            </nav>
          </header>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <NavbarExt />
        <header className="mobile-nav bg-dark-grad">
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
          <nav>
            <ul id="nav" className="navigation bg-dark-grad-vertical">
              <Link to="/Account" onClick={this.handleMenu}>
                <div className="d-flex flex-column align-items-center">
                  <img id="sidebar-img" className="my-1" src={Profile} />
                  <span className="helper-text profile-nav-title">
                    Llama Joe
                    <br />
                    <span className="sub-text">Da Mountains, Chile</span>
                  </span>
                </div>
              </Link>
              <div className="row mt-3 d-flex justify-content-center">
                <div className="col-5 p-0">
                  <Link to="/">
                    <li className="" onClick={this.handleMenu}>
                      <i className="fas fa-home"></i>
                      <span className="w-100 d-block">Home</span>
                    </li>
                  </Link>
                </div>
                <div className="col-5 p-0">
                  <Link to="/Favorites">
                    <li onClick={this.handleMenu}>
                      <i class="fas fa-star"></i>
                      <span className="w-100 d-block">Favorites</span>
                    </li>
                  </Link>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-5 p-0">
                  <Link to="/Signin">
                    <li onClick={this.handleMenu}>
                      <i className="fas fa-user"></i>
                      <span className="w-100 d-block">Account</span>
                    </li>
                  </Link>
                </div>
                <div className="col-5 p-0">
                  <Link to="/Search">
                    <li onClick={this.handleMenu}>
                      <i class="fas fa-search"></i>
                      <span className="w-100 d-block">Search</span>
                    </li>
                  </Link>
                </div>
              </div>
              <label
                htmlFor="toggle-btn"
                className="hide-menu-btn"
                onClick={this.handleMenu}
              >
                <i className="fas fa-times"></i>
              </label>
              <Link to="/signin">
                <button
                  id="nav-logout"
                  onClick={this.handleMenu}
                  className="dash-btn btn submit"
                >
                  Login <i className="fas fa-sign-in-alt"></i>
                </button>
              </Link>
            </ul>
            <label htmlFor="toggle-btn" className="show-menu-btn">
              <span
                className="toggle-btn bg-back-grn"
                onClick={this.handleMenu}
              >
                <i className="fas fa-bars"></i>
              </span>
            </label>
          </nav>
        </header>
      </Fragment>
    );
  }
}
