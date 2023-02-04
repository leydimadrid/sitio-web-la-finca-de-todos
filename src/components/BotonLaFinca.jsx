import { Link } from "react-router-dom";

export const BotonLaFinca = () => {
  return (
    <div>
      <Link
        to="/lafinca"
        className="botonLaFinca md:text-xl text-base font-semibold text-white hover:text-white py-2 px-4 rounded-xl inline-flex items-center drop-shadow-lg"
      >
        Quiero saber más de la finca{" "}
      </Link>
    </div>
  );
};
