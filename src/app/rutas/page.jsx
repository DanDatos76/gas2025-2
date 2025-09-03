"use client";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/Rutas.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Modal from "../components/ruta/Modal";
import Link from "next/link";
import "../styles/Dashboard.css"

const zonas = [
  "Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5",
  "Zona 6", "Zona 7", "Zona 8", "Zona 9", "Zona 10",
];

const Rutas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <div className="container">
            <div className="header">
              <h2 className="title">Rutas</h2>
              <p className="desc">
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an ...
              </p>
              <button className="addButton" onClick={() => setIsModalOpen(true)}>
                Agregar Ruta
              </button>
            </div>

            <div className="table">
              <div className="rowHeader">
               
                <span className="colZonas">Zonas</span>

                <span className="colEstado">Estado</span>
                <span className="colAcciones">Acciones</span>
              </div>

              {zonas.map((zona, i) => (
                <div key={i} className={`row ${i === 4 ? "activeRow" : ""}`}>
                 <Link href= "./clientes">  <span className="colZona">{zona}</span></Link>
                 
                  <span className="colEstado">
                    <label className="switch">
                      <input type="checkbox" defaultChecked={i < 5} />
                      <span className="slider"></span>
                    </label>
                  </span>
                  <span className="colAcciones">
                    <button className="addRoute">Agregar Ruta</button>
                    <FaTrashAlt className="trash" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Rutas;
