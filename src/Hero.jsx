import hero2 from "./assets/hero2.jpeg";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-32">
          <h1 className="my-16 text-8xl font-bold text-palette-orange text-center">
            M&M GEOINGENIERÍA
          </h1>
          <p className="my-12 text-palette-orange text-3xl">
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
