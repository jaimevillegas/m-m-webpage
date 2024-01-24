import { Link } from "react-router-dom";
import hero2 from "./assets/hero2.jpeg";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-32">
          <h1 className="my-16 text-8xl font-bold text-white text-center">
            M&M GEOINGENIERÍA
          </h1>
          <p className="my-12 text-white text-3xl">
            Soluciones en el sector de la Ingeniería, Consultoría e
            Hidrocarburos
          </p>
          {/* <button className="btn btn-primary btn-lg">CONTÁCTENOS</button> */}
          <button className="learn-more">
            <Link to="/contacto">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">CONTÁCTENOS</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
