import NavBar from "./NavBar";

function Consultoria() {
  return (
    <>
      <NavBar />
      <h1 className="text-8xl bold pt-40 text-center">CONSULTORÍA</h1>
      <ul className="p-5 list-disc">
        <li>Cartografía geológica y muestreo</li>
        <li>Sondeos eléctricos verticales (SEV)</li>
        <li>Tomografías Geoeléctricas</li>
        <li>Líneas sísmicas</li>
        <li>Detección de Enterrados (GPR-RD)</li>
        <li>Perforaciones mecánicas y a rotación</li>
        <li>Laboratorio de suelos </li>
        <li>Muestreos SPT</li>
        <li>Apiques</li>
        <li>
          Levantamientos topográficos altimétricos y planimétricos,
          Fotogravimetría y planimetría en general.{" "}
        </li>
        <li>Estudios Geológicos mineros, Planes de trabajos y obras</li>
        <li>Modelos hidrogeológicos conceptuales y numéricos.</li>
        <li>Estudios Vulnerabilidad y contaminación de acuíferos</li>
      </ul>
    </>
  );
}

export default Consultoria;
