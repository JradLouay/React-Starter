import React from "react";

const landingRoutes = [
  {
    path: "/landing/moien",
    component: React.lazy(() => import("./moien"))
  }
];

export default landingRoutes;