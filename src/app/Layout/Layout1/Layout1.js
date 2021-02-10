import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import AppContext from "../../appContext";
import  {AppSuspense}  from "../../../components";
import Header1 from "../../../components/headers/header";
import Footer from "../../../components/footers/footer";

 const Layout1 = () => {
    const { routes } = useContext(AppContext);
  return (
    <React.Fragment>
        {/* <div style={{height: 100, backgroundColor: 'red'}} /> */}
        <Header1/>
      <AppSuspense>{renderRoutes(routes)}</AppSuspense>
      <Footer />
    </React.Fragment>
  );
};
export default Layout1;