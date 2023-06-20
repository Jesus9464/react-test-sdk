import React from "react";
import { show } from "@techtivo/pfm-sdk";

import logo from "./logo.png";
import "./App.css";

function App() {
  const partnerURL = "https://mfe-pfm.lendingpoint.com/pfm-dev";
  const partnerToken = "partner-token";
  const userToken = "user-token";

  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <div className="container_button">
        <button
          onClick={() => {
            show(partnerURL, partnerToken);
          }}
        >
          new user
        </button>
        <button
          className="button_2"
          onClick={() => {
            show(partnerURL, partnerToken, userToken);
          }}
        >
          registered user
        </button>
      </div>
    </div>
  );
}

export default App;
