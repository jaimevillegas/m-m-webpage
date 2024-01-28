import Carousel from "./Carousel";

function QuienesSomos() {
  return (
    <div>
      <h1 className="text-7xl font-bold text-palette-dark-blue text-center pt-10">
        ¿Quiénes Somos?
      </h1>
      <p className="px-40 py-10 text-xl text-center">
        M&M Geoingeniería es una empresa consituída en el año 2020, orientada a
        atender y satisfacer las necesidades de ingeniería y consultoría en el
        sector de Hidrocarburos, Minería, Geología y Obras Civiles. Con la
        trayectoria de nuestros profesionales nos ha permitido fortalecer y
        ampliar nuestro campo de trabajo, brindando nuevas tecnologías y
        procedimientos calificados y certificados
      </p>
      <h1 className="text-center text-4xl my-4">
        Carrusel (Trabajo en progreso)
      </h1>
      <Carousel />
    </div>
  );
}

export default QuienesSomos;
