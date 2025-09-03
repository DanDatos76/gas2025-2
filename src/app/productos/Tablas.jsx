import React from "react";
import { productos } from "./page";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function Tablas() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Ref</th>
           
            <th>Producto</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, index) => (
            <tr key={index}>
              <td>{prod.ref}</td>
             
              <td>{prod.producto}</td>
              <td>{prod.nombreProducto}</td>
              <td>{prod.precio}</td>
              <td className="actions-cell">
                <FaEye className="icon" />
                <FaEdit className="icon" />
                <FaTrash className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablas;
