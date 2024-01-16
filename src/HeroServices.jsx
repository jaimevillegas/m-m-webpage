import HorizontalCard from "./HorizontalCard";
import engineer from "./assets/engineer.png";

function HeroServices() {
  return (
    <div className="hero pb-0 mb-0 bg-base-200">
      <div className="hero-content flex-col justify-between lg:flex-row py-0">
        <img src={engineer} className="max-w-sm w-1/2 rounded-lg" />
        <div className="pl-10 w-full">
          <h1 className="text-5xl font-bold">Servicios</h1>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </div>
    </div>
  );
}

export default HeroServices;
