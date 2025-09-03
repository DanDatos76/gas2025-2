import React from 'react';
import Link from 'next/link'

function Derecha() {
  return (
      <div className="login-right">
          <img src="./assets/logo.png" alt="Logo" className="login-logo" />
          <h3 className="login-title">Iniciar sesión</h3>
          <form className="login-form">
            <input type="text" placeholder="Usuario" className="login-input" />
            <input type="password" placeholder="Contraseña" className="login-input" />
            <Link href="/dashboard" style={{ textDecoration: 'none', width: '100%' }}>
            <button type="submit" className="login-button">Aceptar</button>
            </Link>
          </form>
        </div>
  )
}

export default Derecha