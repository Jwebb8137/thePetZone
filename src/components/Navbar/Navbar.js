import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.png';

export default class Navbar extends React.Component {
  handleMenu = () => {
    document.getElementById('nav').classList.toggle('nav-respond');
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.setAuth(false);
    window.location = '/';
  };

  render() {
    if (this.props.isAuth) {
      return (
        <header>
          <div className='brand-logo'>
            <Link to='/'>
              <img
                id='logo'
                className='brand-logo'
                src={Logo}
                alt='Brand Logo'
              />
            </Link>
          </div>
          <nav>
            <ul id='nav' className='navigation'>
              <Link to='/'>
                <li className='top-border' onClick={this.handleMenu}>
                  <i className='fas fa-home'></i> Home
                </li>
              </Link>
              <Link to='/browse'>
                <li onClick={this.handleMenu}>
                  <i className='fas fa-users'></i> Browse
                </li>
              </Link>
              <Link to='/signin'>
                <li onClick={this.handleMenu}>
                  <i className='fas fa-user'></i> Account
                </li>
              </Link>
              <Link to='/chatlist/user'>
                <li onClick={this.handleMenu}>
                  <i className='fas fa-user'></i> Messages
                </li>
              </Link>
              <label
                htmlFor='toggle-btn'
                className='hide-menu-btn'
                onClick={this.handleMenu}
              >
                <i className='fas fa-times'></i>
              </label>
              <button
                id='nav-logout'
                className='dash-btn'
                onClick={e => this.logout(e)}
              >
                Logout <i className='fas fa-sign-in-alt'></i>
              </button>
              <img src={Logo} id='mobile-logo' alt='Puppy Love Logo' />
            </ul>
            <label htmlFor='toggle-btn' className='show-menu-btn'>
              <i className='fas fa-bars' onClick={this.handleMenu}></i>
            </label>
          </nav>
        </header>
      );
    }
    return (
      <header>
        <div className='brand-logo'>
          <Link to='/'>
            <img id='logo' className='brand-logo' src={Logo} alt='Brand Logo' />
          </Link>
        </div>
        <nav>
          <ul id='nav' className='navigation'>
            <Link to='/'>
              <li className='top-border' onClick={this.handleMenu}>
                <i className='fas fa-home'></i> Home
              </li>
            </Link>
            <Link to='/browse'>
              <li onClick={this.handleMenu}>
                <i className='fas fa-users'></i> Browse
              </li>
            </Link>
            <Link to='/signin'>
              <li onClick={this.handleMenu}>
                <i className='fas fa-user'></i> Account
              </li>
            </Link>
            <Link to='/chatlist/user'>
              <li onClick={this.handleMenu}>
                <i className='fas fa-user'></i> Messages
              </li>
            </Link>
            <label
              htmlFor='toggle-btn'
              className='hide-menu-btn'
              onClick={this.handleMenu}
            >
              <i className='fas fa-times'></i>
            </label>
            <Link to='/signin'>
              <button
                id='nav-logout'
                onClick={this.handleMenu}
                className='dash-btn'
              >
                Login <i className='fas fa-sign-in-alt'></i>
              </button>
            </Link>
          </ul>
          <label htmlFor='toggle-btn' className='show-menu-btn'>
            <span className='toggle-btn' onClick={this.handleMenu}>
              <i className='fas fa-bars'></i>
            </span>
          </label>
        </nav>
      </header>
    );
  }
}
