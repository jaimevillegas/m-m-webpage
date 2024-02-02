import Footer from "./Footer";
import NavBar from "./NavBar";

function Ingenieria() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200 gear-pattern">
        <div className="card bg-white lg:mx-32 mt-24 lg:mt-32 lg:p-10 mx-4 px-4 shadow-xl">
          <h1 className="font-poppins font-semibold text-palette-dark-blue text-5xl pt-8 lg:text-6xl text-center">
            INGENIERÍA Y DISEÑO
          </h1>
          <ul className="p-10 list-disc">
            <li className="text-xl my-4">
              Ingeniería Conceptual, Básica y Detalle en el sector
              hidrocarburos.
            </li>
            <li className="text-xl my-4">
              Diseño de cruces especiales - subfluviales y de vías para el paso
              de líneas eléctricas, oleoductos, gasoductos, acueducto y
              alcantarillado
            </li>
            <li className="text-xl my-4">Diseños de vías y locaciones</li>
            <li className="text-xl my-4">Pilotes y Micropilotes</li>
            <li className="text-xl my-4">
              Diseño de proyectos lineales en el sector Minas - Energía e
              infraestructura.
            </li>
            <li className="text-xl my-4">Diseño Geométrico de vías.</li>
            <li className="text-xl my-4">
              Diseño de gasoductos, oleoductos y poliductos.
            </li>
            <li className="text-xl my-4">
              Diseño de obras de Geotecnia para cimentaciones, estabilidad de
              taludes, excavaciones superficiales y subterráneas, zonas
              inestables y pavimentos.
            </li>
            <li className="text-xl my-4">
              Diseño y construcción de pozos de aguas subterráneas, Piezómetros
              e Inclinómetros.
            </li>
          </ul>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Ingenieria;
