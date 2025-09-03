import React from 'react'

function Encabezado() {
  return (
     <div className="header">
            <h3>Productos</h3>
            <p className="desc">
              Aquí puedes ver y gestionar todos los productos disponibles en tu inventario.
            </p>
            <button className="addButton">Agregar Producto</button>
          </div>
  )
}

export default Encabezado