import React, { Fragment } from "react";
import "./ImageModal.css";

const ImageModal = (props) => {
  return (
    <Fragment>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div id="modal-content-posting" class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="posting-container" className="fade-in py-0 px-2">
              <h3 className="mt-3 mb-0">Ready to post an animal ?</h3>
              <p className="m-0">
                All we need is some quick info about your pet!
              </p>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageModal;
