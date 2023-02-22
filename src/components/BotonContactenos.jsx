import { Link } from "react-router-dom";

export const BotonContactenos = () => {
  return (
    <div>
      <Link
        to="/contacto"
        className="md:text-xl text-base font-semibold bg-blue-900 text-white hover:text-white py-2 px-6 rounded-lg inline-flex items-center shadow-lg"
      >
        Contáctenos
      </Link>
    </div>
  );
};
