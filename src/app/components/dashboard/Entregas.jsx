import React from 'react'
import Link from 'next/link';

function Entregas() {
  return (

     <div className="card resumen">
            <div className="card-header">
              <h3>📌 Resumen de Entregas</h3>
              <a href="/camiones">Ver Todo</a>
            </div>
            <div className="tabs">
              <button className="tab active">Camión 1</button>
              <button className="tab">Camión 2</button>
              <button className="tab">Camión 3</button>
              <button className="tab">Camión 4</button>
              <button className="tab">Camión 5</button>
            </div>
            <div className="entregas">
              <div className="entrega">
                <p><b>📍 Mz 2 San Martín</b></p>
                <p className="estado entregado">Entregado</p>
                <p>09, Jun, 25 01:00 pm</p>
              </div>
              <div className="entrega">
                <p><b>📍 Mz 2 San Martín</b></p>
                <p className="estado no-entregado">No Entregado</p>
                <p>09, Jun, 25 01:00 pm</p>
              </div>
            </div>
          </div>
  )
}

export default Entregas