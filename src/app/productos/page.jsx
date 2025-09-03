// Productos.jsx CORREGIDO

import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "../styles/Productos.css"; 
import "../styles/Rutas.css"; 
import "../styles/Dashboard.css"; 

// Importa los componentes de layout compartidos
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Encabezado from "../components/productos/Encabezado";
import Tablas from "./Tablas";

// 👇 Nueva estructura de productos con las columnas pedidas
export const productos = [
  { ref: "01", producto: "Garrafa", nombreProducto: "X10 ", precio: "$ 14.000" },
  { ref: "02", producto: "Garrafa", nombreProducto: "X15", precio: "$ 22.000" },
  { ref: "03",  producto: "Garrafa", nombreProducto: "X15 PRO", precio: "$ 26.000" },
  { ref: "04", producto: "Garrafa", nombreProducto: "X30", precio: "$ 36.000" },
  { ref: "05", producto: "Garrafa", nombreProducto: "X45", precio: "$ 60.000" },
  { ref: "06", producto: "Garrafa", nombreProducto: "AMARILLA X10", precio: "$ 13.500" },
  { ref: "07", producto: "Garrafa", nombreProducto: "USUARIO", precio: "$ 17.000" }



];

export default function Productos() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="main">
        <Header />
        
        <div className="container">
          {/* Encabezado de la página de productos */}
          <Encabezado />

          {/* Tabla de Productos */}
          <Tablas />
        </div>
      </div>
    </div>
  );
}
