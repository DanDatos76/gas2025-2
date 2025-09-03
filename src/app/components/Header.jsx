import React from 'react'
import { FaTachometerAlt, FaRoute, FaBox, FaMapMarkerAlt, FaBell, FaSignOutAlt } from "react-icons/fa";
import "../styles/Header.css"


function Header() {
  return (
     <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="notifications">
            <FaBell />
          </div>
        </header>
  )
}

export default Header