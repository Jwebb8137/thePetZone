import React, { Fragment, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./Signup.css";
import FormBg from "../../assets/form-bg.png";

const Signup = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  });
  // function for validating matching passwords
  const validateRepeatPassword = () => {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  };

  const renderTooltipAccountType = () => {
    return "<p>This is a test</p>";
  };

  return (
    <Fragment>
      <ReactTooltip place="bottom" html={true} className="tooltip-text" />
      <div id="signup-container" className="container pb-10 fade-in pt-4">
        <h3 className="mt-3 mb-0 heading-med">
          Let's Get Started <i class="fas fa-paw bg-grn-grad"></i>
        </h3>
        <p className="m-0 px-2">All we need is some quick information!</p>
        <form className="homepage-search px-3 mt-0">
          <div class="row mb-2 pt-3 pb-0 d-flex justify-content-center">
            <div class="col-12 tooltip-container">
              <select
                class="form-select shadow-input form-select-lg m-0"
                aria-label=".form-select-lg example"
              >
                <option selected>Account Type</option>
                <option value="1">Owner</option>
                <option value="2">Shelter</option>
                <option value="3">3rd Party</option>
              </select>
              <p className="text-align-left mt-2">
                <span
                  className="helper-text-span"
                  data-tip="<p className='tooltip-text'><i class='fas fa-circle'></i> Choose the appropriate account you wish to sign up for. Just ask yourself if you own the animal, are representing a shelter, or helping out a friend?</p>"
                  data-html={true}
                >
                  Need Help <i class="fas fa-question-circle"></i>
                </span>
              </p>
            </div>
            <div class="col-12">
              <div class="form-floating mb-3">
                <input
                  type="input"
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="user123"
                />
                <label for="floatingInput">Enter Username</label>
              </div>
            </div>
            <div className="col-12">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control shadow-input"
                  placeholder="password123"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="floatingInput">Enter Password</label>
                <small
                  id="passwordHelpBlock"
                  class="form-text text-muted d-block mb-3"
                >
                  Your password must be 8-20 characters long, contain letters
                  and numbers.
                </small>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control shadow-input"
                  placeholder="password123"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="floatingInput">Re-enter Password</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">First Name</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Last Name</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email Address</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">City</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control shadow-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">State</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn shadow bg-grn btn-grn-grad btn-lg text-dark border-0 border-none w-75"
          >
            Get Started <i class="fas fa-caret-right"></i>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
