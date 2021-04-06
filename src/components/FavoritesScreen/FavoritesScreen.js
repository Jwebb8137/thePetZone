import React, { Fragment, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CardFeatured from "../Cards/CardFeatured";
import Cards from "../Cards/Cards";
import "./FavoritesScreen.css";
import Img1 from "../../assets/card1.jpg";
import Img2 from "../../assets/card2.jpg";
import Img3 from "../../assets/card3.jpg";

const FavoritesScreen = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="favorite-container w-100 fade-in container p-0 bg-light-grn pt-2 pb-5">
        <div className="card-group">
          <Cards img={Img1} name="Sasha" />
          <Cards img={Img2} name="Marvin" />
          <Cards img={Img3} name="Bates and Oscar" />
        </div>
      </div>
    </Fragment>
  );
};

export default FavoritesScreen;
