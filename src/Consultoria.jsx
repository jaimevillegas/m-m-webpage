import Footer from "./Footer";
import NavBar from "./NavBar";

function Consultoria() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200 topo-pattern">
        <div className="card bg-white mx-32 mt-32 p-10 shadow-xl">
          <h1 className="font-poppins font-semibold text-palette-dark-blue text-6xl text-center">
            CONSULTORÍA
          </h1>
          <ul className="p-10 list-disc">
            <li className="text-xl my-4">Cartografía geológica y muestreo</li>
            <li className="text-xl my-4">
              Sondeos eléctricos verticales (SEV)
            </li>
            <li className="text-xl my-4">Tomografías Geoeléctricas</li>
            <li className="text-xl my-4">Líneas sísmicas</li>
            <li className="text-xl my-4">Detección de Enterrados (GPR-RD)</li>
            <li className="text-xl my-4">
              Perforaciones mecánicas y a rotación
            </li>
            <li className="text-xl my-4">Laboratorio de suelos </li>
            <li className="text-xl my-4">Muestreo y perforación SPT</li>
            <li className="text-xl my-4">Apiques</li>
            <li className="text-xl my-4">
              Levantamientos topográficos altimétricos y planimétricos,
              Fotogravimetría y planimetría en general.{" "}
            </li>
            <li className="text-xl my-4">
              Estudios Geológicos mineros, Planes de trabajos y obras
            </li>
            <li className="text-xl my-4">
              Modelos hidrogeológicos conceptuales y numéricos.
            </li>
            <li className="text-xl my-4">
              Estudios Vulnerabilidad y contaminación de acuíferos
            </li>
          </ul>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Consultoria;
