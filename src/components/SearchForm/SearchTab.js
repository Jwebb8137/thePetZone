import React, { Fragment } from "react";
import "./SearchTab.css";

const SearchTab = (props) => {
  return (
    <Fragment>
      <form id="search-form" class="homepage-search mt-0">
        <div className="container px-3 pt-1">
          <p className="mt-4 txt-md px-3">
            <span className="txt-lg d-block">{props.text}</span>
            <span className="d-block sub-text-form">{props.subtext}</span>
          </p>
          <div class="mt-3 mb-3 label-container">
            <label for="locationSearch" class="form-label">
              Location
            </label>
            <input
              type="text"
              class="form-control"
              id="locationSearch"
              placeholder="Raleigh, NC"
              aria-describedby="locationHelp"
            />
            <div id="location-help" class="form-text mt-2">
              Use My Location <i class="fas fa-map-marker-alt"></i>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <div className="label-container">
                <input
                  type="text"
                  class="form-control"
                  id="exampleBreedSearch"
                  placeholder="Any"
                />
                <label for="floatingInputValue">Age</label>
              </div>
            </div>
            <div class="col">
              <div className="label-container">
                <label for="exampleInputPassword1" class="form-label">
                  Breed
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleBreedSearch"
                  placeholder="Any"
                />
              </div>
            </div>
          </div>
          <button id="form-submit" type="submit" class="btn submit w-100">
            Start Looking <i class="fas fa-caret-right"></i>
          </button>
        </div>
        <img src={props.img} className="mt-3" />
      </form>
    </Fragment>
  );
};

export default SearchTab;
