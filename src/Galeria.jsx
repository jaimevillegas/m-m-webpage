import NavBar from "./NavBar";
import MyGallery from "./GalleryComponent";
import Footer from "./Footer";

function Galeria() {
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200 gallery-pattern">
        <div className="card bg-white lg:mx-32 lg:mt-32 lg:p-10 mx-4 px-4 mt-24 shadow-xl">
          <h1 className="text-poppins font-semibold text-palette-dark-blue text-5xl pt-8 lg:text-6xl text-center mb-10">
            GALERÍA
          </h1>
          <div className="px-2 lg:px-12">
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
