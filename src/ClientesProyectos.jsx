import Footer from "./Footer";
import NavBar from "./NavBar";

import montinpetrol from "./assets/clients/montinpetrol.jpg";
import bioexplora from "./assets/clients/bioexplora.jpg";
import gtcingenieria from "./assets/clients/gtcingenieria.png";
import ingeocc from "./assets/clients/ingeocc.png";
import pacolombia from "./assets/clients/pacolombia.png";
import pei from "./assets/clients/pei.png";

const clientesInfo = [
  {
    image: montinpetrol,
    description:
      "INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACION HORIZONTAL DIRIGIDA (PHD) ENTRE EL CLUSTER 87 Y CLUSTER 06 DE LA LINEA DE INTERCONEXIÒN DE 24” EC3-EA1 DEL PK 2+430 AL PK 3+100 UBICADO EN CAMPO CASTILLA. LONGITUD DE 450 METROS.",
  },
  {
    image: montinpetrol,
    description:
      "INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACION HORIZONTAL DIRIGIDA (PHD) INCLUIDAS LAS LÍNEAS DE APROXIMACIÓN PARA LA MEJORA OPERATIVA DEL GASODUCTO 20 PULGADAS, DE EPM. LONGITUD 1235 METROS",
  },
  {
    image: montinpetrol,
    description:
      'INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACION HORIZONTAL DIRIGIDA (PHD) ENTRE ESTACIÒN CASTILLA 3 Y CLUSTER 87 DE LA LINEA DE INTERCONEXIÒN DE 24", UBICADO EN CAMPO CASTILLA. LONGITUD DE 850 METROS',
  },
  {
    image: montinpetrol,
    description:
      "INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACION HORIZONTAL DIRIGIDA (PHD) ENTRE CLUSTER 87 Y CLUSTER 06 DE LA LINEA DE INTERCONEXIÒN DE 16” EC3-EA1 DEL PK 2+430 AL PK 3+100 UBICADO EN CAMPO CASTILLA. LONGITUD DE 450 METROS",
  },
  {
    image: pacolombia,
    description:
      'INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACIÓN HORIZONTAL DIRIGIDA EN EL PHD 3 DE 12" RIO ACACIAS TRONCAL NORTE, UBICADO EN CAMPO CHICHIMENE. LONGITUD DE 550 METROS',
  },
  {
    image: pacolombia,
    description:
      'INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACIÓN HORIZONTAL DIRIGIDA EN EL PHD 3 DE 12" RIO ACACIAS TRONCAL NORTE, UBICADO EN CAMPO CHICHIMENE. LONGITUD DE 550 METROS',
  },
  {
    image: pacolombia,
    description:
      'ESTUDIO DE SUELOS (PERFORACIONES GEOTECNICAS Y ESTRATIGRÀFICAS) PARA DISEÑO DE PERFORACIÓN HORIZONTAL DIRIGIDA DE 6" EN EL PHD 4 CLUSTER 21 TRONCAL NORTE, UBICADO EN CAMPO CHICHIMENE. LONGITUD DE 440 METROS',
  },
  {
    image: pacolombia,
    description:
      'DISEÑO DE PERFORACIÓN HORIZONTAL DIRIGIDA EN EL PHD 1 DE 12" ENTRE CLUSTER 49 Y CLUSTER 53 TRONCAL NORTE, UBICADO EN CAMPO CHICHIMENE. LONGITUD DE 200 METROS',
  },
  {
    image: montinpetrol,
    description:
      "INGENIERIA DE DETALLE  Y APROPIACIÒN DE LA INGENIERIA PARA DISEÑO DE PERFORACION HORIZONTAL DIRIGIDA (PHD)  ENTRE LAS ABSCISAS K144+000 Y K146+000 DE LA LÍNEA TRONCAL DEL GASODUCTO SEBASTOPOL-MEDELLÍN EN EL CORREGIMIENTO EL HATILLO DEL MUNICIPIO DE BARBOSA (ANTIOQUIA)",
  },
  {
    image: pei,
    description:
      "CONSULTORÍA PARA CRUCE TIPO PERFORACIÒN HORIZONTAL DIRIGIDA (PHD) VÌA FÈRREA CTO JORDÀN, ZONA NORTE (BOGOTÁ D. C.). ESTUDIO DE SUELOS (PERFORACIONES GEOTECNICAS), DETECCIÒN DE ENTERRADOS, LEVANTA MIENTO TOPOGRÀFICO, ALTIMETRICO Y PLANIMETRICO, DISEÑO Y CALCULO DE ESFUERZOS.",
  },
  {
    image: pei,
    description:
      "CONSULTORÍA PARA CRUCE VIAL EN EL SECTOR DE LA AVENIDA DE CIUDAD DE CALI CON CALLE 17 (PHD 01), UBICADO EN LA CIUDAD DE BOGOTA DC. ESTUDIO DE SUELOS (PERFORACIONES GEOTECNICAS), DETECCIÒN DE ENTERRADOS, LEVANTA MIENTO TOPOGRÀFICO, ALTIMETRICO Y PLANIMETRICO, DISEÑO Y CALCULO DE ESFUERZOS.",
  },
  {
    image: pei,
    description:
      "CONSULTORÍA PARA CRUCE VIAL EN EL SECTOR DE LA AVENIDA DE CIUDAD DE CALI CON CALLE 17 (PHD 01), UBICADO EN LA CIUDAD DE BOGOTA DC. ESTUDIO DE SUELOS (PERFORACIONES GEOTECNICAS), DETECCIÒN DE ENTERRADOS, LEVANTA MIENTO TOPOGRÀFICO, ALTIMETRICO Y PLANIMETRICO, DISEÑO Y CALCULO DE ESFUERZOS.",
  },
  {
    image: ingeocc,
    description:
      "DISEÑO Y ANALISIS DE ESTABILIDAD DE TALUDES PARA UN ÁREA DE 7,5 HECTÁREAS, EN EL TITULO MINERO HHP 15444, YUMBO VALLE DEL CAUCA.",
  },
  {
    image: bioexplora,
    description:
      "ESTUDIO GEOTECNICO Y CARTOGRÀFICO MEDIANTE PERFORACIONES MECÁNICAS Y A ROTACIÒN PARA  DISEÑO DE ESTABILIDAD DE TALUDES PARA LA CONSTRUCCIÒN DE LA RUTA AL MAR ENTRE SANTA FE DE ANTIOQUIA Y CAÑAS GORDAS-ANTIOQUIA",
  },
  {
    image: gtcingenieria,
    description:
      'CALCULO DE ESFUERZOS Y ANALISIS DE FLEXIBILIDAD PARA TUBERÌAS DE 24" Y 16", PARA LA CONSTRUCCIÒN DE 2 PERFORACIONES HORIZONTALES DIRIGIDAS PHD NTRE EL CLUSTER 87 Y CLUSTER 06 DE LA LINEA DE INTERCONEXIÒN DEL EC3-EA1 DEL PK 2+430 AL PK 3+100 UBICADO EN CAMPO CASTILLA',
  },
  {
    image: ingeocc,
    description:
      "ESTUDIO CARTOGRÀFICO, GEOFISICO E HIDROGEOLÒGICO PARA PLAN DE TRABAJOS Y OBRAS, ESTUDIO DE IMPACTO AMBIENTAL EN EL CONTRATO DE CONCESIÒN MINERA 15391X, YUMBO VALLE DEL CAUCA.",
  },
];

function ClientesProyectos() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200  gallery-pattern">
        <div className="card bg-white lg:mx-32 lg:mt-32 lg:p-10 mx-4 px-4 mt-24 shadow-xl">
          <h1 className="font-poppins font-semibold text-palette-dark-blue text-5xl pt-8 lg:text-6xl text-center mb-24">
            CLIENTES Y PROYECTOS
          </h1>
          {clientesInfo.map((cliente, index) => (
            <div key={index}>
              <h2 className="font-poppins font-semibold text-palette-dark-blue text-3xl text-center mb-5 ">
                EMPRESA
              </h2>
              <img
                src={cliente.image}
                alt="cliente"
                className="mx-auto w-4/5 lg:w-1/4"
              />
              <h2 className="font-poppins font-semibold text-palette-dark-blue text-3xl text-center mb-5 mt-12">
                ALCANCE
              </h2>
              <p className="lg:px-32 px-4 text-center text-xl">
                {cliente.description}
              </p>
              <hr className="lg:my-24 lg:mx-96 my-10 mx-12 border-palette-orange border-opacity-75 border-2" />
            </div>
          ))}
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default ClientesProyectos;
