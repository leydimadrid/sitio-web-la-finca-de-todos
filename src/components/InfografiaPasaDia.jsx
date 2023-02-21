import infografiaPasaDia from "../assets/images/infografia-pasa-dia.jpg";
import logo from "../assets/images/logo-la-finca-de-todos-pasa-dia.svg"
import reloj from "../assets/images/reloj-infografia-pasa-dia.svg"

export const InfografiaPasaDia = () => {
  return (
    <section className="fondoInfografiaPasaDia  md:bg-cover bg-cover">
      {/* Inicio Título infografía */}
      <div>
        <h1 className="font-bold md:text-6xl text-3xl text-center md:pt-24 text-pink-600">
          Pasadía para niños
        </h1>
        <h1 className="block font-bold md:text-6xl text-3xl text-center text-pink-600">
          de <span className="text-blue-900">4to de primaria</span>
        </h1>
      </div>
      {/* Final Título infografía */}

      {/* Inicio párrafo introductorio */}
      <div className="flex justify-center px-4 ">
        <p className="text-gray-800 font-normal lg:text-xl text-sm max-w-4xl text-justify leading-relaxed">
          Un pequeño encuentro con el descanso y la diversión.
        </p>
      </div>
      {/* Final párrafo introductorio */}
      {/* Línea */}
      <hr className="linea-azul h-1 max-w-xl md:mx-auto mx-auto mt-2"></hr>
      {/* Línea */}

      {/* Inicio Sección inicio */}
      <section className="flex flex-row justify-center space-x-11 bg-pink-100">
        <div className="w-80 grid place-items-center mt-10 mx-auto bg-pink-100">
          <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            INICIO
          </h1>
        <p>
          Llegada a <span className="text-blue-900 font-semibold">La Finca de Todos </span>
        </p>
        <img src={logo} alt="Logo La Finca De Todos" className="mt-2"/>
        </div>
        <img src={reloj} alt="Reloj indicando las 9:30am" className="mt-2"/>
      </section>
      {/* Final sección inicio */}
    </section>
  );
};
