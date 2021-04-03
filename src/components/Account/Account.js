import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import TabList from "../Lists/TabList";
import "./Account.css";
import ProfileImg from "../../assets/profile-main.jpg";

const Account = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div id="account-detail" className="container pt-3">
        <div className="row ">
          <div className="col-12 mb-0 pb-0">
            <div className="d-flex flex-column align-items-center p-0">
              <img src={ProfileImg} />
              <span id="profile-edit">
                <i class="fas fa-camera"></i>
              </span>
            </div>
            <TabList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Account;
