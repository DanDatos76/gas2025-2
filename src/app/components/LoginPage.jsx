import React from "react";
import "../styles/LoginPage.css";
import Image from "next/image";
import Link from "next/link";
import Izquierda from "./login/Izquierda";
import Derecha from "./login/Derecha";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        {/* Panel izquierdo con imagen */}
     <Izquierda />

        {/* Panel derecho con login */}
      <Derecha />

      </div>
    </div>
  );
};

export default LoginPage;
