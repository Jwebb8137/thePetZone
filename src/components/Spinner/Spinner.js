import React, { Fragment } from "react";
import LoadingIcon from "../../assets/loading.png";
import "./Spinner.css";

const Spinner = () => {
  return (
    <Fragment>
      <div className="container pt-5 spinner-container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div class="spinner-border text-grn" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
