import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 fixed shadow z-10">
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
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/ingenieria">INGENIERÍA Y DISEÑO</Link>
          </li>
          <li>
            <Link to="/consultoria">CONSULTORÍA</Link>
          </li>
          <li>
            <Link to="/galeria">GALERÍA</Link>
          </li>
          <li>
            <Link to="/clientes">NUESTROS CLIENTES</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary ">CONTÁCTENOS</a>
      </div>
    </div>
  );
}

export default NavBar;
