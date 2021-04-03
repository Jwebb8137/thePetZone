import React, { Fragment } from "react";
import "./PostModal.css";

const PostModal = (props) => {
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
              <form className="px-0">
                <div class="row my-2 p-3 d-flex justify-content-center">
                  <div className="col-12">
                    <div className="img-upload-container">
                      <i class="fas fa-paw"></i>
                      <button className="upload-btn">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 tooltip-container">
                    <small class="form-text d-block mb-1 mt-0 mb-3 pt-0 stext-muted">
                      The more you tell us about your pet, the better their
                      chances are of finding a home!
                    </small>
                    <select
                      class="form-select form-select-lg m-0"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Type of Pet?</option>
                      <option value="1">Cat</option>
                      <option value="2">Dog</option>
                      <option value="3">Other</option>
                    </select>
                  </div>
                  <div class="col-12  mt-3">
                    <div class="form-floating mb-3">
                      <input
                        type="input"
                        class="form-control"
                        id="floatingInput"
                        placeholder="user123"
                      />
                      <label for="floatingInput">Pet Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="input"
                        class="form-control"
                        id="floatingInput"
                        placeholder="user123"
                      />
                      <label for="floatingInput">What is the Breed?</label>
                    </div>
                  </div>
                  <div class="col-12 tooltip-container">
                    <select
                      class="form-select form-select-lg m-0"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Age</option>
                      <option value="1">6 Months or Less</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                      <option value="3">6</option>
                      <option value="1">7</option>
                      <option value="2">8</option>
                      <option value="3">9</option>
                      <option value="1">10+</option>
                    </select>
                  </div>
                  <div className="col-12 mt-3">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Tell us about your pet!"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-grn btn-lg w-75">
                  Submit Post <i class="fas fa-caret-right"></i>
                </button>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostModal;
