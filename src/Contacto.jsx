// import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import Map3 from "./Map3";

function Contacto() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200  gallery-pattern">
        <div className="card bg-white mx-32 mt-32 p-10 shadow-xl">
          <h1 className="font-poppins font-semibold text-6xl text-center mb-5 text-palette-dark-blue">
            CONTÁCTENOS
          </h1>
          <div className="h-96 w-full items-center ">
            <Map3 />
          </div>

          <p className="text-center text-xl pt-12 ">
            Puedes ponerte en contacto con nosotros a través de estos medios:
          </p>
          <div className="flex gap-4 pt-10 justify-center items-center">
            <IconMailFilled />
            <a
              href="mailto:contacto.geoingenieriamm@gmail.com"
              className="text-xl"
            >
              contacto@geoingenieriamm.com
            </a>
          </div>
          <div className="flex gap-4 pb-4 pt-4 justify-center items-center">
            <IconMailFilled />
            <a
              href="mailto:gerencia.geoingenieriamm@gmail.com"
              className="text-xl"
            >
              gerencia@geoingenieriamm.com
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
          <p className="text-center text-xl pt-12 ">
            También puedes comunicarte con nosotros usando el siguiente
            formulario:
          </p>
          <div className="flex gap-4 pb-10 pt-4 justify-center items-center ">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Tu Nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 w-96 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="shadow appearance-none h-48 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Mensaje"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-palette-blue hover:bg-palette-dark-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div></div>
          <div className="  items-center ">
            {/* <Map2 location={location} zoomLevel={19} /> */}
            {/* <Map /> */}
          </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Contacto;
