import React from "react";
import ItinerariesDetail from "../Componentes/itineraries";
import Footer from "../Componentes/footer";
import Navitineraries from "../Componentes/navitineraries";

export default function Itineraries() {
  return (
    <>
      <Navitineraries />
      <ItinerariesDetail />
      <Footer></Footer>
    </>
  );
}
