// src/pages/Clientes.jsx

import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "../styles/Clentes.css";
import "../styles/Rutas.css";

// Importa los componentes compartidos
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Encabezado from "../components/clientes/Encabezado";
import Tabla from "../components/clientes/Tabla";

export const clientes = [
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 1", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
  { zona: "Zona 11", codigo: "5368347u", nombre: "María Camila Díaz", direccion: "María Camila Díaz", estado: true },
];

export default function Clientes() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="main">
        <Header />

        {/* Contenido */}
        <div className="container">
          {/* Encabezado */}
         <Encabezado />

          {/* Tabla */}
      <Tabla />
        </div>
      </div>
    </div>
  );
}
