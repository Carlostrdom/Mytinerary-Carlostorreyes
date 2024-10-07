import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import NavBar from "../Componentes/header";
import Footer from "../Componentes/footer";

function StandarLayout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
}
export default StandarLayout;
