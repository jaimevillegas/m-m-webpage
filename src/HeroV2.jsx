import { Link } from "react-router-dom";
import hero2 from "./assets/hero3.jpg";

function HeroV2() {
  return (
    <div className=" justify-center items-center pt-12 lg:pt-24">
      <div className="w-full h-screen  topo-pattern flex items-center justify-center">
        <div className="px-6 lg:px-32 pt-0">
          <h1 className="text-3xl lg:text-5xl  font-bold text-palette-orange text-center">
            BIENVENIDO A
          </h1>
          <h1 className="my-12 lg:my-24 text-4xl lg:text-7xl font-bold text-palette-orange text-center">
            M&M GEOINGENIERÍA
          </h1>
          <p className="my-12 lg:my-24 text-center text-palette-orange text-lg lg:text-3xl">
            Soluciones en el sector de la Ingeniería, Consultoría e
            Hidrocarburos
          </p>
          <div className="my-12 flex items-center justify-center">
            <button className="btn btn-lg bg-palette-blue text-white text-center m-auto text-2xl hover:bg-palette-dark-blue">
              <Link to="/contacto" className="text-2xl">
                CONTÁCTENOS
              </Link>
            </button>
          </div>
        </div>
      </div>
      <img
        src={hero2}
        className="object-cover w-full h-screen flex-none"
        alt=""
      />
    </div>
  );
}

export default HeroV2;
