import NavBar from "./NavBar";
import MyGallery from "./GalleryComponent";
import Footer from "./Footer";

function Galeria() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200 gallery-pattern">
        <div className="card bg-white mx-32 mt-32 p-10 shadow-xl">
          <h1 className="text-poppins font-semibold text-palette-dark-blue text-6xl text-center mb-10">
            GALERÍA
          </h1>
          <div className="px-12">
            <MyGallery />
          </div>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Galeria;
