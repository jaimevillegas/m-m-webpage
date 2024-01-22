import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your server
  };
  return (
    <>
      <NavBar />
      <div className="pb-0 pt-10 mb-0 bg-base-200  gallery-pattern">
        <div className="card bg-white mx-32 mt-32 p-10 shadow-xl">
          <h1 className="font-poppins font-semibold text-6xl text-center mb-10">
            CONTÁCTENOS
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div className="flex-col justify-between items-center">
              <label className="my-4">
                Nombre:
                <input
                  type="text"
                  name="name"
                  className="flex mb-8 input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  className="flex mb-8 input input-bordered"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mensaje:
                <textarea
                  name="message"
                  className="flex textarea h-24 w-56 textarea-bordered"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary mt-8"
              />
            </div>
          </form>
        </div>
        <div className="mt-16"></div>
        <Footer />
      </div>
    </>
  );
}

export default Contacto;
