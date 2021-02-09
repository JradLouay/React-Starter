import logo from "../logo.svg";
import "./App.css"; // execute the file 

import React from "react";

import { Provider } from "react-redux";
import { Store } from "./redux/Store";

import AppContext from "./appContext";

import { Router } from "react-router-dom";
import history from "../history";
import routes from "./RootRoutes";

import { LayoutSFC } from "./Layout/LayoutSFC";

function App() {
 
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <Router history={history}>
          <LayoutSFC />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
