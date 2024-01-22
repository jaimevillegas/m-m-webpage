import hero1 from "./assets/hero1.png";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-32">
          <h1 className="my-16 text-8xl font-bold text-center">
            M&M GEOINGENIERÍA
          </h1>
          <p className="my-12 text-3xl">
            Soluciones en el sector de la Ingeniería, Consultoría e
            Hidrocarburos
          </p>
          <button className="btn btn-primary btn-lg">CONTÁCTENOS</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
