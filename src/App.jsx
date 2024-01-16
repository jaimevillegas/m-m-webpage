import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import HeroServices from "./HeroServices";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="flex justify-between gap-5 p-5">
        <Card />
        <Card />
        <Card />
      </div>
      <HeroServices />
    </>
  );
}

export default App;
