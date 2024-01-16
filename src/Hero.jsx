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
        <div className="max-w-md">
          <h1 className="my-5 text-7xl font-bold ">M&M GEOINGENIERÍA</h1>
          <p className="my-10 text-2xl">
            Soluciones en el sector de la Ingeniería, Consultoría e
            Hidrocarburos
          </p>
          <button className="btn btn-primary">CONTÁCTENOS</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
