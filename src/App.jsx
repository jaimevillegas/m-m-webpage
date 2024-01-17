import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import HeroServices from "./HeroServices";
import Footer from "./Footer";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <h1 className="text-5xl font-bold text-center my-10">Servicios</h1>
      <div className="flex justify-center gap-10 p-5 my-10">
        <Card />
        <Card />
        <Card />
      </div>
      <HeroServices />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
