// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import Home from "./components/Home/Home";
import Authentication from "./components/Authentication/Authentication";
import ContractorDashboard from "./components/ContractorDashboard/ContractorDashboard";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";

// Component Imports
import NavBarClient from "./components/NavBarClient/NavBarClient";
import NavBarContractor from "./components/NavBarContractor/NavBarContractor";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <NavBarContractor />
      <NavBarClient />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        
        <Route
          path="/client/"
          element={
            <PrivateRoute>
              <ClientDashboard />
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
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
