import { IconSettings } from "@tabler/icons-react";
import HorizontalCard from "./HorizontalCard";
import engineer from "./assets/engineer.png";

function HeroServices() {
  return (
    <div className="pb-0 pt-10 mb-0 bg-base-200 topo-pattern">
      <h1 className="text-7xl font-bold text-palette-dark-blue text-center pt-5">
        Servicios
      </h1>
      <div className="px-36 flex justify-between items-center lg:flex-row py-0 w-full gap-20">
        <img src={engineer} className="max-w-2xl rounded-lg" />
        <div className="pl-10 w-full">
          <HorizontalCard
            icon={IconSettings}
            title={"Estudios Geológicos - Geofísicos"}
            list1={"Cartografía geológica y muestreo"}
            list2={"Sondeos Eléctricos Verticales (SEV)"}
            list3={"Tomografías Geoeléctricas"}
          />
          <HorizontalCard
            icon={IconSettings}
            title={"Estudios Hidrogeológicos"}
            list1={"Modelos Hidrogeológicos Conceptuales"}
            list2={"Estudio de Aguas Subterráneas"}
            list3={"Diseño y Constucción de pozos de agua subterráneas"}
          />
          <HorizontalCard
            icon={IconSettings}
            title={"Estudios Geotécnicos - Civiles - Mecánicos"}
            list1={"Estudios de Suelos"}
            list2={"Muestreos SPT"}
            list3={"Apiques"}
          />
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
  );
}

export default HeroServices;
