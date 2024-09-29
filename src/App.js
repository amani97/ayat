import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EditService from "./components/editService"
import HomePage from "./components/home";
import LoginPage from "./components/login";
import PrivateRoute from "./components/privateRoute";
import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage /> {/* Protected component */}
            </PrivateRoute>
          }
        />
        <Route path="/services/edit/:serviceId" element={<EditService />} />
      </Routes>
    </Router>
  );
};

export default App;
