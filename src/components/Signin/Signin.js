import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import FormBg from "../../assets/form-bg.png";

const Signin = () => {
  return (
    <Fragment>
      <div id="signin-container" className="container fade-in p-0">
        <h3 className="my-3">Already Have An Account?</h3>
        <form className="homepage-search px-3">
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="floatingInput"
              placeholder="User1"
              required
            />
            <label for="floatingInput">Username</label>
            <div class="form-text mt-2 mx-3">Forgot Username?</div>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
            <div class="form-text mt-2 mx-3">Forgot Password?</div>
          </div>
          <button type="submit" class="btn btn-grn btn-lg btn-block w-75 mt-3">
            Sign in <i class="fas fa-caret-right"></i>
          </button>
          <div class="form-text my-2">Or</div>
          <Link to="/Signup">
            <button type="button" class="btn btn-grey btn-lg btn-block w-75">
              Sign up <i class="fas fa-caret-right"></i>
            </button>
          </Link>
          <img src={FormBg} />
        </form>
      </div>
    </Fragment>
  );
};

export default Signin;
