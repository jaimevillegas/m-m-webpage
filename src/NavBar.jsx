import logo from "./assets/logo2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-palette-sky-blue fixed shadow z-10">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <a>INICIO</a>
            </li>
            <li>
              <a>INGENIERÍA Y DISEÑO</a>
            </li>
            <li>
              <a>CONSULTORÍA</a>
            </li>
            <li>
              <a>NUESTROS CLIENTES</a>
            </li>
            <li>
              <a>CONTÁCTENOS</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <a href="/">
          <img src={logo} alt="logo" className="h-20" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
      <div className="navbar-end">
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
