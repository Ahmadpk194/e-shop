import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "../src/components/reducer";
import { StateProvider } from "../src/components/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateProvider>
  </BrowserRouter>
);
