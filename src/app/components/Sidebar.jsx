import React from 'react'
import Link from 'next/link';
import { 
  FaThLarge,        // Dashboard (cuadrícula)
  FaTruck,          // Rutas (camión)
  FaProjectDiagram, // Productos (nodos)
  FaMapMarkerAlt,   // Ubicación de Camiones (pin)
  FaSignOutAlt 
} from "react-icons/fa";
import '../styles/Dashboard.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <h4>Principal</h4>
      <nav className="menu">
        <a href="./dashboard" className="menu-item active"><FaThLarge /> Dashboard</a>
        <a href="./rutas" className="menu-item active"><FaTruck /> Rutas</a>
        <a href="./productos" className="menu-item active"><FaProjectDiagram /> Productos</a>
        <a href="./camiones" className="menu-item active"><FaMapMarkerAlt /> Ubicación de Camiones</a>
      </nav>
      <Link href="./" style={{ textDecoration: 'none', width: '100%' }}>
        <button className="logout"> Cerrar Sesión</button>
      </Link>
    </aside>
  )
}

export default Sidebar
