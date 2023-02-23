import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <ul
          className={`bg-white py-4 px-4 md:p-0 md:flex md:items-center md:text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-lg w-full absolute md:static font-medium md:pb-0 left-0  md:w-auto md:pl-0 ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className=" md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/inicio">Inicio</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/lafinca">La Finca</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className=" md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/findesemana">Fin de semana</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/talleres">Talleres pedagógicos</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/ubicacion">Ubicación</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800"
          >
            <Link to="/contacto">Contacto</Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="botonDonar text-white font-semibold hover:text-white py-2 px-4 border-2 rounded-xl inline-flex items-center ml-4 drop-shadow-lg"
          >
            <svg
              className="mr-2 stroke-2 fill-white hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="18"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
            <Link to="/donaciones">Quiero donar</Link>
          </li>
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </>
  );
};
