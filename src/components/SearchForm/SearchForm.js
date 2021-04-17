import React, { Fragment, useEffect } from "react";
import SearchTab from "./SearchTab";
import CatFormImg from "../../assets/cat-form.png";
import DogFormImg from "../../assets/dog-form.png";
import ShelterFormImg from "../../assets/shelter-form.jpg";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <Fragment>
      <div id="search-form" className="search-form-container mx-3">
        <ul
          class="nav nav-pills bg-dark-grad nav-justified mb-0 px-0 pt-0"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <i class="fas fa-cat"></i>
            </button>
          </li>
          <li class="nav-item border-sides" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <i class="fas fa-dog"></i>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <i class="fas fa-store-alt"></i>
            </button>
          </li>
        </ul>
        <div class="tab-content px-2 py-0" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <SearchTab
              text={"Bring on the Cats"}
              subtext={"Get ready for your heart to melt!"}
              img={CatFormImg}
            />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <SearchTab
              text={"Let the Dogs Out"}
              subtext={"Time to turn this party up!"}
              img={DogFormImg}
            />{" "}
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <SearchTab
              text={"Shelter Squads"}
              subtext={"Support and donate some time!"}
              img={ShelterFormImg}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchForm;
