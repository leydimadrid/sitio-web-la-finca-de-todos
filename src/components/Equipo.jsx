import equipo1 from "../assets/images/equipo1.jpg";
import equipo2 from "../assets/images/equipo2.jpg";

export const Equipo = () => {

  return (
    <section className="equipo">
        <div id="contenedor">
      <div className="equipo flex flex-col items-center md:flex-row md:max-w-6xl md:text-xl text-base">
        <img
          className="object-cover w-full h-auto md:h-auto md:w-auto rounded-md md:mr-14 shadow-md"
          src={equipo1}
          alt="foto Lissette Ortegon"
        />
        <div className="flex flex-col p-4 leading-normal">
          <h1 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800">
            Lissette Ortegon
          </h1>
          <ul  className="ml-4 list-disc font-normal md:text-xl text-base text-gray-800">
            <li className="mb-2">
              {" "}
              Creadora del Proyecto 
            </li>
            <li className="mb-2">
              Abogada para los derechos de personas con discapacidades y mayores
              de edad.
            </li>
            <li className="mb-2">
              Licenciatura en ciencias de la comunicación de la Universidad de
              Illinois en Urbana-Champaign.
            </li>
            <li>
              Licenciatura en derecho de la Universidad de Wisconsin-Madison.
            </li>
          </ul>
        </div>
      </div>
      <div className="equipo flex flex-col items-center md:flex-row md:max-w-6xl md:text-xl text-base">
        <img
          className="object-cover w-full h-auto md:h-auto md:w-auto rounded-md md:mr-14 shadow-md"
          src={equipo2}
          alt="foto Fabiola Velez"
        />
        <div className="flex flex-col p-4 leading-normal">
          <h1 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800">
            Fabiola Velez
          </h1>
          <ul className="ml-4 list-disc font-normal md:text-xl text-base text-gray-800">
            <li className="mb-2">
              {" "}
              Docente para niños de primaria con retrasos de aprendizaje.
            </li>
            <li className="mb-2">
                Licenciatura en ciencias de la comunicación de la Universidad de
                Illinois en Urbana-Champaign.
              </li>
              <li>
                Licenciatura en derecho de la Universidad de Wisconsin-Madison.
              </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};
