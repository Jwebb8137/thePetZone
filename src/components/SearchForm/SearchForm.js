import React, { Fragment, useEffect } from "react";
import SearchTab from "./SearchTab";
import CatFormImg from "../../assets/cat-form.png";
import DogFormImg from "../../assets/dog-form.png";
import ShelterFormImg from "../../assets/shelter-form.png";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <Fragment>
      <div id="search-form">
        <ul
          class="nav nav-pills nav-justified mb-0 px-2 pt-0"
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
          <li class="nav-item" role="presentation">
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
        <div class="tab-content p-0" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <SearchTab
              text={"Cats, cats, cats!"}
              subtext={"They can't wait to meet you"}
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
              text={"Dogs, dogs, dogs!"}
              subtext={"They can't wait to meet you!"}
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
              text={"Shelters are here!"}
              subtext={"They can't wait to see you"}
              img={ShelterFormImg}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchForm;
