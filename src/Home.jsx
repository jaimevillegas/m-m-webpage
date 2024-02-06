import NavBar from "./NavBar";
import Hero from "./Hero";
import HeroV2 from "./HeroV2";
import QuienesSomos from "./QuienesSomos";
import HeroServices from "./HeroServices";
import Footer from "./Footer";
import NuestrosClientes from "./NuestrosClientes";

function Home() {
  return (
    <>
      <NavBar />
      <HeroV2 />
      {/* <Hero /> */}
      <QuienesSomos />
      <HeroServices />
      <NuestrosClientes />
      <Footer />
    </>
  );
}

export default Home;
