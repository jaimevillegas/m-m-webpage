import NavBar from "./NavBar";
import Hero from "./Hero";
import QuienesSomos from "./QuienesSomos";
import HeroServices from "./HeroServices";
import Footer from "./Footer";
import NuestrosClientes from "./NuestrosClientes";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <QuienesSomos />
      <HeroServices />
      <NuestrosClientes />
      <Footer />
    </>
  );
}

export default Home;
