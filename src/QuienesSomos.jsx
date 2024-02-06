import Carousel from "./Carousel";

function QuienesSomos() {
  return (
    <div>
      <h1 className="px-6 text-5xl lg:text-7xl font-bold text-palette-dark-blue text-center py-16 mt-12">
        ¿Quiénes Somos?
      </h1>
      <p className="px-8 lg:px-40 py-4 lg:py-10 text-xl lg:text-2xl text-center">
        M&M Geoingeniería es una empresa consituída en el año 2020, orientada a
        atender y satisfacer las necesidades de ingeniería y consultoría en el
        sector de Hidrocarburos, Minería, Geología y Obras Civiles. Con la
        trayectoria de nuestros profesionales nos ha permitido fortalecer y
        ampliar nuestro campo de trabajo, brindando nuevas tecnologías y
        procedimientos calificados y certificados.
      </p>
      <Carousel />
    </div>
  );
}

export default QuienesSomos;
