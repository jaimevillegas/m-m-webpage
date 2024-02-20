import NavBar from "./NavBar";
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
      <QuienesSomos />
      <HeroServices />
      <NuestrosClientes />
      <Footer />
    </>
  );
}

export default Home;
