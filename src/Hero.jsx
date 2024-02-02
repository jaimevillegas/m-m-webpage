import hero2 from "./assets/hero2.jpeg";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-85"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-6 lg:px-32">
          <h1 className="mt-28 lg:my-16 text-3xl lg:text-7xl font-bold text-palette-orange text-center">
            M&M GEOINGENIERÍA
          </h1>
          <p className="my-6 lg:my-12 text-palette-orange text-lg lg:text-3xl">
            Soluciones en el sector de la Ingeniería, Consultoría e
            Hidrocarburos
          </p>
          {/* <button className="btn btn-primary btn-lg">CONTÁCTENOS</button> */}

          <button className="btn btn-lg bg-palette-blue text-white text-2xl hover:bg-palette-dark-blue">
            CONTÁCTENOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
