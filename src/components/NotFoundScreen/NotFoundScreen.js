import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NotFoundScreen.css";
import NotFoundImage from "../../assets/notFound.jpg";

const NotFoundScreen = () => {
  return (
    <Fragment>
      <h2 className="mt-3 mb-0">We Can't Find That Page ...</h2>
      <img src={NotFoundImage} className="w-75 my-3 img" />
      <h3>( Here is a funny cat instead )</h3>
      <Link
        to="/"
        id="not-found-btn"
        className="btn btn-success btn-lg mt-2 submit"
      >
        {" "}
        <i class="fas fa-caret-left"></i> Return Home
      </Link>
    </Fragment>
  );
};

export default NotFoundScreen;
