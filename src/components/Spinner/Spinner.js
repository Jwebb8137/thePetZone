import React, { Fragment } from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="spinner-grow text-grn" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow mx-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-grn" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
