import React from 'react'
import "../../styles/Dashboard.css";



function Encabezado() {
  return (
     <div className="header">
            <h2 className="title">👥 Clientes</h2>
            <p className="desc">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an ...
            </p>
            <div className="actions">
              <button className="filter">Filtrar por zona</button>
              <button className="addButton">Agregar Cliente</button>
            </div>
          </div>
  )
}

export default Encabezado