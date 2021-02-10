import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import AppContext from "../../appContext";
import  {AppSuspense}  from "../../../components";
import Header1 from "../../../components/headers/header";

 const Layout1 = () => {
    const { routes } = useContext(AppContext);
  return (
    <React.Fragment>
        {/* <div style={{height: 100, backgroundColor: 'red'}} /> */}
        <Header1/>
      <AppSuspense>{renderRoutes(routes)}</AppSuspense>
    </React.Fragment>
  );
};
export default Layout1;