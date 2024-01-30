import { IconSettings } from "@tabler/icons-react";
import HorizontalCard from "./HorizontalCard";
import heroServicesImg from "./assets/heroServicesImg.jpeg";

function HeroServices() {
  return (
    <div className="pb-0 pt-10 mb-0 bg-base-200 topo-pattern">
      <h1 className="text-7xl font-bold text-palette-dark-blue text-center pt-5 mb-10">
        Servicios
      </h1>
      <div className="px-12 gap-5 flex justify-between py-10 w-full">
        <div className="w-1/2">
          <img src={heroServicesImg} className="w-full rounded-lg" />
        </div>
        <div className="w-1/2 flex flex-col justify-between items-start gap-2">
          <div className="w-full">
            <HorizontalCard
              icon={IconSettings}
              title={"Estudios Geológicos - Geofísicos"}
              list1={"Cartografía geológica y muestreo"}
              list2={"Sondeos Eléctricos Verticales (SEV)"}
              list3={"Tomografías Geoeléctricas"}
            />
          </div>
          <div className="w-full">
            <HorizontalCard
              icon={IconSettings}
              title={"Estudios Hidrogeológicos"}
              list1={"Modelos Hidrogeológicos Conceptuales"}
              list2={"Estudio de Aguas Subterráneas"}
              list3={"Diseño y Constucción de pozos de agua subterráneas"}
            />
          </div>
          <div className="w-full">
            <HorizontalCard
              icon={IconSettings}
              title={"Estudios Geotécnicos - Civiles - Mecánicos"}
              list1={"Estudios de Suelos"}
              list2={"Muestreo y perforación SPT"}
              list3={"Apiques"}
            />
          </div>
          <div className="w-full">
            <HorizontalCard
              icon={IconSettings}
              title={"Estudios Mineros y Topográficos"}
              list1={"Diseño y planteamiento minero"}
              list2={"Planes de trabajo y obras (PTO)"}
              list3={"Levantamientos topográficos altimétricos y planimétricos"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroServices;
