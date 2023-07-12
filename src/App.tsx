import React from "react";
import { show, onMessagesListener } from "@techtivo/pfm-sdk";

import logo from "./logo.png";
import "./App.css";

function App() {
  const data = {
    partnerURL: "https://mfe-pfm.lendingpoint.com/pfm-dev",
    partnerToken: "69778153-40e7-4fa4-a2dc-d623328bd84f",
    userToken: "bd8c821d-2f3c-4454-877e-4301ba7aabac",
  };

  const message = (message: string) => {
    console.log(message);
  };

  onMessagesListener(message);

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>React</h1>
      <img src={logo} alt="logo" />
      <div className="container_button">
        <button
          onClick={() => {
            show(data);
          }}
        >
          new user
        </button>
      </div>
    </div>
  );
}

export default App;
