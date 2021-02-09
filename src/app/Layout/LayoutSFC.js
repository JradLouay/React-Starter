import React, { useContext, useEffect, useState } from "react";
import { AppLayouts } from "./index";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import AppContext from "../appContext";
import { AppSuspense } from "../../components";

// determine wich layout is needed

export const LayoutSFC = (props) => {
  // const [Layout, setLayout] = useState(AppLayouts['layout1']);
  const Layout = React.lazy(() => import("./Layout1/Layout1"));
  return (
    <AppSuspense>
      <Layout {...props} />
    </AppSuspense>
  );
};
// const mapStateToProps = state => ({
//   });

export default withRouter(LayoutSFC);
