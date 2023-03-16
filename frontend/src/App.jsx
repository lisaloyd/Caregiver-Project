// General Imports
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import cuid from "cuid";
// import axios from "axios";
import "./App.css";

// Pages Imports
import Home from "./components/Home/Home";
import Authentication from "./components/Authentication/Authentication";
import ContractorDashboard from "./components/ContractorDashboard/ContractorDashboard";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import LoginPage from "./pages/LoginPage/LoginPage";

// Component Imports
import NavBarClient from "./components/NavBarClient/NavBarClient";
import NavBarContractor from "./components/NavBarContractor/NavBarContractor";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  //   const BASE_URL = "http://127.0.0.1:8000/api/care_requests/";
  //   const [search, setSearch] = useState(null);
  //   const [notes, setNotes] = useState([]);

  //   const [isServerError, setIsServerError] = useState(false);
  //   const navigate = useNavigate();
  //   const id = cuid();
  //   const submitNote = async(noteData) => {
  //     try {
  //       let finalData = {
  //         note: noteData.note
  //       }
  //       let response = await axios.post(`${BASE_URL}/${id}/notes/`, finalData)
  //       if (response.status === 201) {
  //         setNotes([...notes, response.data])
  //         setIsServerError(false);

  //         navigate("/client");
  //       } else {
  //         navigate("/register");
  //       }
  //     } catch (error) {
  //       console.log (error)
  //     }
  //   }
  //   const submitSearch = async(searchData) => {
  //     try {

  //       let response = await axios.get(`${BASE_URL}/zipcode/${searchData}`)
  //       if (response.status === 200) {
  //         setIsServerError(false);
  //         setSearch(response.data);
  //         navigate("/search");
  //       } else {
  //         navigate("/error");
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  return (
    <div>
       <Navbar/> 
       {/* <NavBarContractor />
      <NavBarClient />  */}
      <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<Authentication />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        {/* <Route path="/" element={<Home submitSearch={submitSearch}/>} /> */}
        {/* <Route path="/auth" element={<Authentication />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path='/dashboard' element={<DashboardPage/>}/> */}
        {/* <Route
          path="/client/"
          element={
            <PrivateRoute>
              <ClientDashboard submitNote={submitNote}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/contractor/"
          element={
            <PrivateRoute>
              <ContractorDashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
