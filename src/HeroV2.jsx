import hero2 from "./assets/hero2.jpeg";

function HeroV2() {
  return (
    <div className=" justify-center items-center   pt-24">
      <div className="w-full h-screen  topo-pattern flex items-center justify-center">
        <div className="px-6 lg:px-32">
          <h1 className="my-12 lg:my-24 text-3xl lg:text-5xl  font-bold text-palette-orange text-center">
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
              CONTÁCTENOS
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-screen"> */}
      <img src={hero2} className="object-cover  h-screen flex-none" alt="" />
      {/* </div> */}
    </div>
  );
}

export default HeroV2;
