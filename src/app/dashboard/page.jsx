import React from "react";
import "../styles/Dashboard.css";
import Header from "../components/Header";
import { FaTachometerAlt, FaRoute, FaBox, FaMapMarkerAlt, FaBell, FaSignOutAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Entregas from "../components/dashboard/Entregas";
import Alertas from "../components/dashboard/Alertas";
import Mapa from "../components/dashboard/Mapa";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="main-content">

        {/* Header */}
       <Header />

        {/* Dashboard content */}
        <section className="content">

          {/* Resumen de entregas */}
         <Entregas />

         
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
