import React from "react";

import logo from "../../../logo.svg";
import { Button } from 'semantic-ui-react';
const moien = () => {
    
    const renderContent = () => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button primary>Learn React</Button>
          </header>
        </div>
      );
    return (
        <div>
            {renderContent()}
        </div> 
    )
}

export default moien
