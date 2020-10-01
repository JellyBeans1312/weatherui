import React, { Fragment } from "react";
import { Route } from "react-router-dom";


import Weather from "./Weather";
// Layout

import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import AppFooter from "../../Layout/AppFooter";


const WeatherPage = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Weather/>
        </div>
      </div>
    </div>
  </Fragment>
);

export default WeatherPage;
