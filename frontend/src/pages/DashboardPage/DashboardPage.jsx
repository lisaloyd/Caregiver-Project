import React from "react";
import ClientDashboard from "../../components/ClientDashboard/ClientDashboard";
import ContractorDashboard from "../../components/ContractorDashboard/ContractorDashboard";
import useAuth from "../../hooks/useAuth";

const DashboardPage = ({}) => {
  const [user] = useAuth();
  return (
    <div>
      {user.is_contractor ? <ContractorDashboard /> : <ClientDashboard />}
    </div>
  );
};

export default DashboardPage;
