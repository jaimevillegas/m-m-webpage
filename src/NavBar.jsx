import logo from "./assets/logo2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" navbar items-center  bg-palette-sky-blue fixed shadow z-10 w-full ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden h-20 pr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-palette-sky-blue rounded-box w-72"
          >
            <li>
              <Link to="/">
                <p className="text-xl">INICIO</p>
              </Link>
            </li>
            <li>
              <Link to="/ingenieria">
                <p className="text-xl">INGENIERÍA Y DISEÑO</p>
              </Link>
            </li>
            <li>
              <Link to="/consultoria">
                <p className="text-xl">CONSULTORÍA</p>
              </Link>
            </li>
            <li>
              <Link to="/galeria">
                <p className="text-xl">GALERÍA</p>
              </Link>
            </li>
            <li>
              <Link to="/clientes-proyectos">
                <p className="text-xl">CLIENTES Y PROYECTOS</p>
              </Link>
            </li>
            <li>
              <Link to="/contacto">
                <p className="text-xl">CONTÁCTENOS</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-20" />
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <p className="font-medium text-xl">INICIO</p>
            </Link>
          </li>
          <li>
            <Link to="/ingenieria">
              <p className="font-medium text-xl ">INGENIERÍA Y DISEÑO</p>
            </Link>
          </li>
          <li>
            <Link to="/consultoria">
              <p className="font-medium text-xl ">CONSULTORÍA</p>
            </Link>
          </li>
          <li>
            <Link to="/galeria">
              <p className="font-medium text-xl ">GALERÍA</p>
            </Link>
          </li>
          <li>
            <Link to="/clientes-proyectos">
              <p className="font-medium text-xl ">CLIENTES Y PROYECTOS</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:block">
        <Link
          to="/contacto"
          className="btn btn-md bg-palette-blue text-white hover:bg-palette-dark-blue"
        >
          CONTÁCTENOS
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
