import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./main/MainPage";
import Header from "./header/Header";
import PageNotFound from "./PageNotFound";
import "../styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
