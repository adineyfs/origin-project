import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./main/MainPage";
import ReusableLogo from "./common/ReusableLogo";
import PageNotFound from "./PageNotFound";
import "../styles/App.scss";
import OriginLogo from "../images/originLogo.png";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <ReusableLogo imagePath={OriginLogo} className="app__header-logo" />
      </div>
      <div className="app__main">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
