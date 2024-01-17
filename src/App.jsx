import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import HeroServices from "./HeroServices";
import Footer from "./Footer";
import Carousel from "./Carousel";

import logo from "./assets/logo.png";
import { IconSettings } from "@tabler/icons-react";
import services1 from "./assets/services/services1.jpeg";
import services2 from "./assets/services/services2.jpeg";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <h1 className="text-5xl font-bold text-center my-10">Servicios</h1>
      <div className="flex justify-center gap-10 p-5 my-10">
        <Card
          image={services1}
          icon={IconSettings}
          title={"Servicio 1"}
          description={"lorem"}
        />
        <Card
          image={services2}
          icon={IconSettings}
          title={"Servicio 1"}
          description={"lorem"}
        />
      </div>
      <HeroServices />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
