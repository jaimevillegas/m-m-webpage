// import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import Map from "./Map";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import Map2 from "./Map2";

const location = {
  lat: 3.8301766,
  lng: -73.69300098,
};

function Contacto() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200  gallery-pattern">
        <div className="card bg-white mx-32 mt-32 p-10 shadow-xl">
          <h1 className="font-poppins font-semibold text-6xl text-center mb-10">
            CONTÁCTENOS
          </h1>
          <p className="text-center text-xl py-10">
            Estamos ubicados en la Calle 15A Nro. 36-04, en el barrio Bella
            suiza - Acacías, Meta
          </p>
          <p className="text-center text-xl pt-12 ">
            Puedes ponerte en contacto con nosotros a través de estos medios:
          </p>
          <div className="flex gap-4 pt-10 justify-center items-center">
            <IconMailFilled />
            <a
              href="mailto:contacto.geoingenieriamm@gmail.com"
              className="text-xl"
            >
              contacto.geoingenieriamm@gmail.com
            </a>
          </div>
          <div className="flex gap-4 pb-4 pt-4 justify-center items-center">
            <IconMailFilled />
            <a
              href="mailto:gerencia.geoingenieriamm@gmail.com"
              className="text-xl"
            >
              gerencia.geoingenieriamm@gmail.com
            </a>
          </div>
          <div className="flex gap-4 pt-10  justify-center items-center">
            <IconPhoneFilled />
            <p className="text-left text-xl">3016603907</p>
          </div>
          <div className="flex gap-4 pb-10 pt-4 justify-center items-center">
            <IconPhoneFilled />
            <p className="text-left text-xl">3188982231</p>
          </div>
          <div className="  items-center ">
            {/* <Map /> */}
            <Map2 location={location} zoomLevel={17} />
          </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Contacto;
