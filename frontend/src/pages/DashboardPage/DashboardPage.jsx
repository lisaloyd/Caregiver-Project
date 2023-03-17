import React from "react";
import ClientDashboard from "../../components/ClientDashboard/ClientDashboard";
import ContractorDashboard from "../../components/ContractorDashboard/ContractorDashboard";
import useAuth from "../../hooks/useAuth";
import './dashboard.css'

const DashboardPage = ({}) => {
  const [user] = useAuth();
  const token=localStorage.getItem('token')

  return (
    <div>
      {user?.is_contractor ? <ContractorDashboard /> : <ClientDashboard />}
    </div>
  );
};

export default DashboardPage;
