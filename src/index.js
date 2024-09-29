import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import authReducer from "./store/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from "./reportWebVitals";
import servicesReducer from "./store/services-slice";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
  },
});

root.render(
  <Provider store={store}>
    <App className="bg-gray-100"/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
