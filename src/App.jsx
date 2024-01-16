import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import HeroServices from "./HeroServices";

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
    </>
  );
}

export default App;
