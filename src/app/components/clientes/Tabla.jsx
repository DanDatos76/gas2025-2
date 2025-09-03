import { clientes } from '@/app/clientes/page'
import React from 'react'
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";


function Tabla() {
  return (
        <div className="table">
                <table className="clientes-table">
                  <thead>
                    <tr>
                      <th>Zonas</th>
                      <th>Código</th>
                      <th>Nombre de Cliente</th>
                      <th>Dirección</th>
                      <th>x10</th>
                      <th>x10 AMARILLA</th>
                      <th>x15</th>
                      <th>x15 PRO</th>
                      <th>x30</th>
                      <th>x45</th>
                      <th>USUARIO</th>
                      
                      <th>Estado</th>
                      <th>Acciones</th>

                      X10        $ 14.000

                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map((c, i) => (
                      <tr key={i}>
                        <td>{c.zona}</td>
                        <td>{c.codigo}</td>
                        <td>{c.nombre}</td>
                        <td>{c.direccion}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        
                      <td>
                          <label className="switch">
                            <input type="checkbox" defaultChecked={c.estado} />
                            <span className="slider"></span>
                          </label>
                        </td>
                        <td className="acciones">
                          <FaEye className="icon" />
                          <FaEdit className="icon" />
                          <FaTrash className="icon" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
  )
}

export default Tabla