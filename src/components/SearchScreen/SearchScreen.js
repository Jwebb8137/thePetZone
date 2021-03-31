import React, { Fragment, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CardFeatured from "../Cards/CardFeatured";
import Cards from "../Cards/Cards";
import "./SearchScreen.css";
import Img1 from "../../assets/card1.jpg";
import Img2 from "../../assets/card2.jpg";
import Img3 from "../../assets/card3.jpg";
import Img4 from "../../assets/card4.jpg";

const SearchScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="w-100 container fade-in px-2 bg-light-grn pt-2">
        <SearchForm />
        <div className="card-group">
          <CardFeatured img={Img4} name="Cheeto" />
          <Cards img={Img1} name="Sasha" />
          <Cards img={Img2} name="Marvin" />
          <Cards img={Img3} name="Bates and Oscar" />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchScreen;
