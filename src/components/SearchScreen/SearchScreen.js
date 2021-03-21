import React, { Fragment } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CardFeatured from "../Cards/CardFeatured";
import Cards from "../Cards/Cards";
import "./SearchScreen.css";
import Img1 from "../../assets/card1.jpg";
import Img2 from "../../assets/card2.jpg";
import Img3 from "../../assets/card3.jpg";
import Img4 from "../../assets/card4.jpg";

const SearchScreen = () => {
  return (
    <Fragment>
      <div className="w-100 container fade-in px-0 bg-light-grn pt-2">
        <SearchForm />
        <div className="container">
          <CardFeatured img={Img4} name="Cheeto" />
        </div>
        <div className="card-group">
          <Cards img={Img1} name="Sasha" />
          <Cards img={Img2} name="Marvin" />
          <Cards img={Img3} name="Bates and Oscar" />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchScreen;
