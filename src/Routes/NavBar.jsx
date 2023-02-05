import { Link } from "react-router-dom";
import { useState } from "react";
import { BotonDonar } from "../components/BotonDonar";

export const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <ul
          className={`bg-white py-4 px-4 md:p-0 md:flex md:items-center md:text-lg w-full absolute md:static font-medium text-base md:pb-0 left-0  md:w-auto md:z-auto z-[1] md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/inicio">Inicio</Link>
          </li>
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/lafinca">La Finca</Link>
          </li>
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/actividades">Actividades</Link>
            </li>
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/Ubicacion">Ubicación</Link>
          </li>
          <li className="md:ml-2 md:my-0 hover:text-white duration-500 hover:bg-pink-600 py-2 px-4 rounded text-gray-800">
            <Link to="/Contacto">Contacto</Link>
          </li>
          <BotonDonar />
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </>
  );
};
