import React, { Fragment } from "react";
import "./InputModal.css";

const InputModal = (props) => {
  return (
    <Fragment>
      <div
        class="modal fade"
        id="inputModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered mx-2">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body px-3 py-0">
              <div className="row">
                <div class="col-12">
                  <div class="form-group input-align">
                    <label for="formGroupExampleInput" className="p-1">
                      Input Label
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-input">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputModal;
