import engineer from "./assets/engineer.png";

function HeroServices() {
  return (
    <div className="hero pb-0 mb-0 bg-base-200">
      <div className="hero-content flex-col lg:flex-row py-0">
        <img src={engineer} className="max-w-sm w-1/2 rounded-lg" />
        <div className="pl-10">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroServices;
