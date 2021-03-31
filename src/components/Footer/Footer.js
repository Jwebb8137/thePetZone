import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link to="/" class="nav-link">
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link">
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link">
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link">
            Disabled
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Footer;
