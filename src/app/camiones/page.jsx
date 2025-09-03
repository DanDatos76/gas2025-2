"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FiPlus, FiMapPin, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import "../styles/Dashboard.css";
// Importa el nuevo archivo CSS
import "../styles/Camiones.css"; 

// --- DATOS DE EJEMPLO ---
const trucksData = [
  { id: 1, plate: " AE822HJ", location: "Mz 2 San Martin", status: "En Ruta" },
  { id: 2, plate: "SIJ902", location: "Mz 2 San Martin", status: "En Ruta" },
  { id: 3, plate: "AD830GD", location: "Mz 2 San Martin", status: "Sin servicio" },
  { id: 4, plate: "AF806RT", location: "Mz 2 San Martin", status: "En Ruta" },
  { id: 5, plate: "OFT766", location: "Mz 2 San Martin", status: "En Ruta" },
   { id: 6, plate: "AC508ED", location: "Mz 2 San Martin", status: "En Ruta" },
    { id: 7, plate: "AD661SW", location: "Mz 2 San Martin", status: "En Ruta" },
];

// --- SUB-COMPONENTES ---

const TruckCard = ({ plate, location, status }) => {
  const isEnRuta = status === 'En Ruta';
  return (
    <div className="truck-card">
      <div className="card-header">
        <div>
          <p className="card-label">Patente</p>
          <p className="card-plate">{plate}</p>
        </div>
        <div className={`card-status ${isEnRuta ? 'status-active' : 'status-inactive'}`}>
          {isEnRuta ? <FiCheckCircle /> : <FiXCircle />}
          {status}
        </div>
      </div>
      <div>
        <p className="card-label">Ubicación actual</p>
        <div className="card-location">
          <FiMapPin className="location-icon" />
          <p className="location-text">{location}</p>
        </div>
      </div>
      <div className="card-image-container">
        <Image src="/assets/camion.jpg"alt="Camión" width={200} height={100} className="card-image" />
      </div>
    </div>
  );
};

const TruckDetails = () => (
  <div className="details-container">
    <div className="details-card">
      <h3 className="card-title">Datos Camión</h3>
      <div className="details-tabs">
        <button className="tab-button active">Informacion camión</button>
        <button className="tab-button">Rutas</button>
        <button className="tab-button">Historial de rutas</button>
      </div>
      <div className="details-content">
        <div className="details-info">
          <div className="info-item">
            <p className="card-label">Estado</p>
            <div className="info-status-active">
              <FiCheckCircle />
              <span>En Ruta</span>
            </div>
          </div>
          <div className="info-item">
            <p className="card-label">Patente Vehiculo</p>
            <p className="info-text-bold">AD661SW</p>
          </div>
          <div className="info-item">
            <p className="card-label">Fecha y hora de inicio</p>
            <p className="info-text-bold">09,Jun,25 01:00 pm</p>
          </div>
        </div>
        <div className="details-image-container">
          <Image src="/assets/camion.jpg" alt="Camión" width={220} height={120} className="details-image" />
        </div>
      </div>
    </div>
    <div className="details-card">
      <div className="map-header">
        <FiMapPin className="location-icon" />
        <h3 className="card-title">Ubicación de Camión AD661SW</h3>
      </div>
      <div className="map-image-container">
        <Image src="/assets/camion.jpg" alt="Mapa de ubicación" width={800} height={400} className="map-image" />
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function UbicacionCamionesPage() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="page-layout">
      <Sidebar openSidebar={openSidebar} />
      <div className="main-content">
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        <main className="page-content">
          <div className="page-header">
            <div className="header-text">
              <FiMapPin className="header-icon" />
              <div>
                <h1 className="page-title">Ubicación de Camiones</h1>
                <p className="page-subtitle">
                  orem ipsum has been the industry's standard dummy text ever since the 1500s, when an ...
                </p>
              </div>
            </div>
            <button className="add-button">
              <FiPlus /> Agregar Nuevo Camión
            </button>
          </div>

          <div className="page-grid">
            <div className="grid-left-column">
              <h2 className="column-title">Camiones disponibles</h2>
              <div className="truck-grid">
                {trucksData.map((truck) => (
                  <TruckCard key={truck.id} {...truck} />
                ))}
              </div>
            </div>
            <div className="grid-right-column">
              <TruckDetails />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}