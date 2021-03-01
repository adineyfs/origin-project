import React from "react";
import BuyAHouseForm from "./BuyAHouseForm";
import "../../styles/MainPage.scss";

const MainPage = () => (
  <div className="main-page">
    <div className="main-page__title">
      {`Let's plan your `}
      <b>saving goal</b>
    </div>
    <div className="main-page__form">
      <BuyAHouseForm />
    </div>
  </div>
);

export default MainPage;
