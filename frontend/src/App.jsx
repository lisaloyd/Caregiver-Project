// General Imports
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import cuid from "cuid";
// import axios from "axios";
import "./App.css";

// Pages Imports
// import Home from "./components/Home/Home";
// import Authentication from "./components/Authentication/Authentication";
// import ContractorDashboard from "./components/ContractorDashboard/ContractorDashboard";
// import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import LoginPage from "./pages/LoginPage/LoginPage";

// Component Imports
//  NavBarClient from "./components/NavBarClient/NavBarClient";
// import NavBarContractor from "./components/NavBarContractor/NavBarContractor";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <div>
       <Navbar/> 
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/auth" element={<Authentication />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
