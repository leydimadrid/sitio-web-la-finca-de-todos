import lineaDiscontinua from "../assets/images/linea-discontinua-infografia.svg";
import lineaDiscontinuaDerecha from "../assets/images/linea-discontinua-derecha.svg";
import lineaDiscontinua2Izquierda from "../assets/images/linea-discontinua-2-izquierda.svg";
import lineaDiscontinua2Derecha from "../assets/images/linea-discontinua-2-derecha.svg";
import lineaDerechoDiscapacidad from "../assets/images/linea-derecho-discapacidad.svg";
import lineaDiscontinuaLarga from "../assets/images/linea-discontinua-larga.svg";
import vector1 from "../assets/images/vector1-discapacidad.svg";
import vector2 from "../assets/images/vector2-discapacidad.svg";
import vector3 from "../assets/images/vector-3-discapacidad.svg";

export const InfografiaDiscapacidad = () => {
  return (
    <section>
      {/* Inicio Título infografía */}
      <div className="p-4">
        <h1 className="font-bold md:text-6xl text-3xl text-center md:pt-36 text-blue-900">
          DISCAPACIDAD EN COLOMBIA
        </h1>
        <hr className="linea-amarilla h-1 md:w-3/5 md:mx-auto mx-auto mt-2"></hr>
      </div>
      {/* Final Título infografía */}

      {/* Inicio Texto inicial */}
      <div className="flex justify-center px-4 ">
        <p className="text-gray-800 font-normal md:text-xl text-base max-w-4xl text-justify">
          Colombia forma parte de la Convención de Naciones Unidas sobre los
          Derechos de las Personas con Discapacidad desde el{" "}
          <span className="font-bold">2011 </span>para promover su plena
          participación en todos los ámbitos de la vida.
        </p>
      </div>
      {/* Final Texto inicial */}

      <div className="md:flex justify-center mt-8 mb-8 hidden">
        <img src={lineaDiscontinua} alt="Lineas discontinuas" />
      </div>

      {/* Inicio quiénes somos */}
      <section className="md:flex flex-row justify-center mt-10">
        <div>
          <h1 className="FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="max-w-md md:text-xl text-base mb-4 mx-auto text-gray-800">
            Somos <span className="font-bold">igual</span> a los demás{" "}
            <span className="font-bold">Colombianos</span> con unos{" "}
            <span className="font-bold">retos adicionales</span> que enfrentar.
          </p>
          <p className="md:text-xl max-w-xs text-base mb-4 mx-auto text-gray-800">
            Podemos tener una discapacidad:
          </p>
          <div className="flex mx-auto max-w-xs">
            <ul className="ml-4 list-disc md:text-xl text-base text-gray-800 px-4">
              <li>Auditiva</li>
              <li>Intelectual</li>
              <li>Sordoceguera</li>
              <li>Múltiple</li>
            </ul>

            <ul className="ml-4 list-disc md:text-xl text-base text-gray-800 px-4">
              <li>Física</li>
              <li>Visual</li>
              <li>Psicosocial</li>
            </ul>
          </div>
        </div>
        <div className="md:pl-8 px-6 mt-8">
          <img src={vector1} alt="Personas con diferentes discapacidades" />
        </div>
      </section>
      <section>
        <div className="md:flex flex-row justify-center mt-8 mb-8">
          <div className="md:flex justify-center mb-8 md:mr-32 hidden">
            <img src={lineaDiscontinuaDerecha} alt="Lineas discontinuas" />
          </div>
          <p className="md:max-w-md max-w-sm md:text-xl text-base md:mx-0 mx-auto text-gray-800">
            <span className="text-blue-900 md:text-5xl text-4xl font-bold ">
              15%{" "}
            </span>
            de las personas registradas manifestó ser víctima del conflicto
            armado.
          </p>
        </div>
      </section>
      {/* Final quiénes somos */}

      {/* Inicio cuántos somos */}
      <section className="md:flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="bg-blue-900 py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            ¿CUÁNTOS SOMOS?
          </h1>{" "}
        </div>
        <div className="md:flex flex-row justify-center">
          <div className="md:flex justify-center mb-8 mx-6 hidden">
            <img src={lineaDiscontinua2Izquierda} alt="Lineas discontinuas" />
          </div>
          <div className="max-w-lg md:max-w-sm md:mx-0 mx-auto md:text-left text-center">
            <p className="md:text-xl text-base mb-4 text-gray-800">
              Población de Colombia{" "}
              <span className="font-bold">51.5 millones</span> de personas.
            </p>
            <div className="px-12 md:px-0 mt-8">
              <img src={vector2} alt="Personas con diferentes discapacidades" />
            </div>
          </div>
          <div className="md:flex justify-center mb-8 mx-4 hidden">
            <img src={lineaDiscontinua2Derecha} alt="Lineas discontinuas" />
          </div>
        </div>
        <div className="md:flex flex-row justify-center mt-8">
          <p className="md:max-w-sm max-w-sm md:text-xl text-base text-center mr-0 md:mr-32 text-gray-800">
            <span className="text-pink-600 md:text-5xl text-4xl font-bold block">
              23%{" "}
            </span>
            de las personas con discapacidades son menores de{" "}
            <span className="font-bold">27 años.</span>
          </p>
          <div className="md:flex justify-center mb-8 mx-4 hidden">
            <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
          </div>
          <p className="md:max-w-md max-w-sm md:text-xl text-base ml-0 md:ml-32 text-center  md:mx-0 mx-auto text-gray-800">
            <span className="text-blue-900 md:text-xl text-lg font-bold ">
              3.134.037{" "}
            </span>
            personas con dificultades para realizar actividades básicas diarias
            <p className="md:max-w-md max-w-sm md:text-xl text-base md:mx-0 mx-auto mt-4">
              <span className=" text-blue-900 md:text-2xl text-4xl font-bold">
                {" "}
                “{" "}
              </span>{" "}
              Un{" "}
              <span className=" text-blue-900 md:text-2xl text-4xl font-bold">
                {" "}
                7.1%{" "}
              </span>{" "}
              de la población del país.{" "}
              <span className=" text-blue-900 md:text-2xl text-4xl font-bold">
                {" "}
                ”{" "}
              </span>
            </p>
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <p className="md:max-w-sm max-w-sm md:text-xl text-base md:mx-0 mx-auto text-gray-800">
            Por falta de datos se estima que las{" "}
            <span className="font-bold">personas con discapacidad</span> superan
            el{" "}
            <span className="text-pink-600 md:text-2xl text-base font-bold">
              {" "}
              15%
            </span>{" "}
            de la población cerca de{" "}
            <span className=" text-blue-900 md:text-xl text-base font-bold block">
              7.2 millones Colombianos.
            </span>
          </p>
        </div>
      </section>
      {/* Final cuántos somos */}

      {/* Inicio dónde estamos */}
      <section>
        <div className="md:flex justify-center mt-8 mb-8 hidden">
          <img src={lineaDiscontinua} alt="Lineas discontinuas" />
        </div>
        <div className="flex justify-center">
          <div>
            <h1 className="FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
              ¿DÓNDE ESTAMOS?
            </h1>
            <p className="max-w-md md:text-xl text-base mb-4 text-gray-800">
              Las entidades territoriales con mayor número de personas con
              discapacidad son{" "}
              <span className="font-bold">
                Bogotá, Antioquia, Huila, Santander y Cali.
              </span>
            </p>{" "}
            <div className="mt-8">
              <img src={vector3} alt="Personas con diferentes discapacidades" />
            </div>
          </div>
          <div className="mt-8 mb-8">
            <img src={lineaDiscontinuaLarga} alt="Lineas discontinuas" />
            <p className="md:max-w-xs max-w-sm md:text-xl text-base text-center  md:mx-0 mx-auto text-gray-800">
              En{" "}
              <span className="text-blue-900 md:text-xl text-lg font-bold ">
                Cali{" "}
              </span>
              se registraron{" "}
              <span className="text-blue-900 md:text-xl text-lg font-bold ">
                55,454{" "}
              </span> personas con discapacidad.
            </p>
            <p className="md:max-w-xs max-w-sm md:text-xl text-base text-center mt-4 md:mx-0 mx-auto text-gray-800">
              En{" "}
              <span className="text-pink-600 md:text-xl text-lg font-bold ">
                Valle del Cauca{" "}
              </span>
              se registraron{" "}
              <span className="text-pink-600 md:text-xl text-lg font-bold">
              49,423{" "}
              </span> personas con discapacidad.
            </p>
          </div>
        </div>
      </section>
      {/* Final dónde estamos */}
    </section>
  );
};
