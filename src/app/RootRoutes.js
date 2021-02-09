import React from "react";
import { Redirect } from "react-router-dom";

import LandingRoutes from "./view/Landing/LandingRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/landing/moien" />
  }
];

const errorRoute = [
  {
    // component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...LandingRoutes,  
  ...redirectRoute,
  ...errorRoute
];

export default routes;