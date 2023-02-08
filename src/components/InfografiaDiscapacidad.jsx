import lineaDiscontinua from "../assets/images/linea-discontinua-infografia.svg";
import lineaDiscontinuaDerecha from "../assets/images/linea-discontinua-derecha.svg";
import lineaDiscontinua2Izquierda from "../assets/images/linea-discontinua-2-izquierda.svg";
import lineaDiscontinua2Derecha from "../assets/images/linea-discontinua-2-derecha.svg";
import lineaDerechoDiscapacidad from "../assets/images/linea-derecho-discapacidad.svg";
import lineaDiscontinuaLarga from "../assets/images/linea-discontinua-larga.svg";
import lineaDiscontinua3 from "../assets/images/linea-discontinua3.svg";
import lineaDiscontinua3OtraOpcion from "../assets/images/linea-discontinua3-otra-opcion.svg";
import lineaDiscontinuaLarga2 from "../assets/images/linea-discontinua-larga-2.svg";
import vector1 from "../assets/images/vector1-discapacidad.svg";
import vector2 from "../assets/images/vector2-discapacidad.svg";
import vector3 from "../assets/images/vector-3-discapacidad.svg";
import vector4 from "../assets/images/vector-4-discapacidad.svg";

export const InfografiaDiscapacidad = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-gray-200 md:w-3/5">
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

        <div className="flex md:justify-center justify-end mt-8">
          <div className=" md:w-2/5 w-2/4 md:mr-64 pr-6">
            <img src={lineaDiscontinua} alt="Lineas discontinuas" />
          </div>
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
              <span className="font-bold">retos adicionales</span> que
              enfrentar.
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
            <div className="md:flex justify-center mb-8 md:pr-10">
              <div className="md:w-auto w-2/4 md:ml-44 ml-28 md:flex hidden">
                <img src={lineaDiscontinuaDerecha} alt="Lineas discontinuas" />
              </div>
            </div>
            <div>
              <p className="md:max-w-md max-w-sm md:text-xl text-base md:mx-0 mx-auto text-gray-800">
                <span className="text-blue-900 md:text-5xl text-4xl font-bold ">
                  15%{" "}
                </span>
                de las personas registradas manifestó ser víctima del conflicto
                armado.
              </p>
            </div>

            {/* Linea discontinua oculta para MD */}
            <div className="w-2/4 mx-auto md:hidden flex mt-8">
              <img src={lineaDiscontinuaDerecha} alt="Lineas discontinuas" />
            </div>
            {/* Linea discontinua oculta para MD */}
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
            <div className="md:w-auto w-2/6 mb-8 mx-6 md:flex hidden">
              <img src={lineaDiscontinua2Izquierda} alt="Lineas discontinuas" />
            </div>
            <div className="max-w-sm md:max-w-sm md:mx-0 mx-auto md:text-left text-center">
              <p className="md:text-xl text-base mb-4 text-gray-800">
                Población de Colombia{" "}
                <span className="font-bold">51.5 millones</span> de personas.
              </p>
              <div className="md:px-0 mt-8">
                <img
                  src={vector2}
                  alt="Personas con diferentes discapacidades"
                />
              </div>

              {/* Linea discontinua oculta para MD */}
              <div className="w-3/5 mx-auto md:hidden flex mt-8 justify-center">
                <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
              </div>
              {/* Linea discontinua oculta para MD */}
            </div>
            <div className="mb-8 mx-4 md:flex hidden">
              <img src={lineaDiscontinua2Derecha} alt="Lineas discontinuas" />
            </div>
          </div>
          <div className="md:flex flex-row justify-center mt-8">
            <div className="flex justify-center">
              <p className="md:max-w-sm max-w-sm md:text-xl text-base text-center mr-0 md:mr-32 text-gray-800">
                <span className="text-pink-600 md:text-5xl text-4xl font-bold block">
                  23%{" "}
                </span>
                de las personas con discapacidades son menores de{" "}
                <span className="font-bold">27 años.</span>
              </p>
            </div>
            <div className="md:flex justify-center mb-8 mx-4 hidden">
              <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
            </div>
            {/* Linea discontinua oculta para MD */}
            <div className="w-3/5 mx-auto md:hidden flex mt-8 justify-center">
              <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
            </div>
            {/* Linea discontinua oculta para MD */}
            <div className="flex justify-center">
              <p className="md:max-w-md max-w-sm md:text-xl text-base ml-0 md:ml-32 text-center text-gray-800">
                <span className="text-blue-900 md:text-xl text-lg font-bold ">
                  3.134.037{" "}
                </span>
                personas con dificultades para realizar actividades básicas
                diarias
                <p className="md:max-w-md max-w-sm md:text-xl text-base md:mx-0 mx-auto mt-4">
                  <span className=" text-blue-900 md:text-2xl text-xl font-bold">
                    {" "}
                    “{" "}
                  </span>{" "}
                  Un{" "}
                  <span className=" text-blue-900 md:text-2xl text-xl font-bold">
                    {" "}
                    7.1%{" "}
                  </span>{" "}
                  de la población del país.{" "}
                  <span className=" text-blue-900 md:text-2xl text-xl font-bold">
                    {" "}
                    ”{" "}
                  </span>
                </p>
              </p>
            </div>
          </div>
          {/* Linea discontinua oculta para MD */}
          <div className="w-3/5 mx-auto md:hidden flex mt-8 justify-center">
            <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
          </div>
          {/* Linea discontinua oculta para MD */}
          <div className="flex justify-center mt-4">
            <p className="md:max-w-sm max-w-sm md:text-xl text-base text-center text-gray-800">
              Por falta de datos se estima que las{" "}
              <span className="font-bold">personas con discapacidad</span>{" "}
              superan el{" "}
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

        <div className="flex md:justify-center justify-end mt-8">
          <div className=" md:w-2/5 w-2/4 mx-auto md:mx-0 md:mr-40">
            <img src={lineaDiscontinua} alt="Lineas discontinuas" />
          </div>
        </div>

        {/* Inicio dónde estamos */}
        <section>
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:ml-10 mt-4 md:mt-0">
              <h1 className="FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
                ¿DÓNDE ESTAMOS?
              </h1>
              <div className="max-w-sm md:text-xl mx-auto md:mx-0">
                <p className="text-base mb-4 text-gray-800">
                  Las entidades territoriales con mayor número de personas con
                  discapacidad son{" "}
                  <span className="font-bold">
                    Bogotá, Antioquia, Huila, Santander y Cali.
                  </span>
                </p>{" "}
              </div>
              <div className="mt-8">
                <img
                  src={vector3}
                  alt="Personas con diferentes discapacidades"
                />
              </div>
            </div>
            {/* Linea discontinua oculta para MD */}
            <div className="w-3/5 mx-auto md:hidden flex mt-8 justify-center">
              <img src={lineaDerechoDiscapacidad} alt="Lineas discontinuas" />
            </div>
            {/* Linea discontinua oculta para MD */}
            <div>
              <div className="md:flex hidden pt-20">
                <img src={lineaDiscontinuaLarga} alt="Lineas discontinuas" />
              </div>
              <div className="md:pl-40 mt-4">
                <p className="md:max-w-sm max-w-sm md:text-xl text-base text-center  md:mx-0 mx-auto text-gray-800">
                  En{" "}
                  <span className="text-blue-900 md:text-xl text-lg font-bold ">
                    Cali{" "}
                  </span>
                  se registraron{" "}
                  <span className="text-blue-900 md:text-xl text-lg font-bold ">
                    55,454{" "}
                  </span>{" "}
                  personas con discapacidad.
                </p>
                <p className="md:max-w-sm max-w-sm md:text-xl text-base text-center mt-4 md:mx-0 mx-auto text-gray-800">
                  En{" "}
                  <span className="text-pink-600 md:text-xl text-lg font-bold ">
                    Valle del Cauca{" "}
                  </span>
                  se registraron{" "}
                  <span className="text-pink-600 md:text-xl text-lg font-bold">
                    49,423{" "}
                  </span>{" "}
                  personas con discapacidad.
                </p>
                <div className="md:flex hidden">
                  <img
                    className="mx-auto mt-4"
                    src={lineaDiscontinua3}
                    alt="Lineas discontinuas"
                  />
                </div>
                <div className="flex md:hidden">
                  <img
                    className="mx-auto mt-4"
                    src={lineaDiscontinua3OtraOpcion}
                    alt="Lineas discontinuas"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final dónde estamos */}

        {/* Inicio cómo estamos */}
        <section>
          <div className="flex flex-col md:flex-row justify-end mr-10">
            <div className="md:flex hidden mt-16">
              <img src={lineaDiscontinuaLarga2} alt="Lineas discontinuas" />
            </div>
            <div className="mt-10">
              <div className="flex justify-end">
                <h1 className="bg-blue-900 py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
                  ¿CÓMO ESTAMOS?
                </h1>
              </div>
              <p className="max-w-xl md:text-xl text-base mb-4 text-gray-800 text-right">
                <span className="font-bold">“</span>Al interactuar con diversas
                barreras incluyendo las actitudinales, las personas con
                discapacidades pueden sentirse impedidos de la{" "}
                <span className="font-bold">participación plena</span> plena y{" "}
                <span className="font-bold">efectiva</span> en la{" "}
                <span className="font-bold">sociedad</span>, en{" "}
                <span className="font-bold">igualdad</span> de
                <span className="font-bold">condiciones</span> con las{" "}
                <span className="font-bold">demás”.</span>
              </p>{" "}
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-slate-400">
            <div className="mt-4 mr-4">
              <h1 className="text-pink-600 font-bold md:text-2xl text-xl ml-10">
                Enfrentamos
              </h1>
              <p className="md:text-xl text-base text-gray-800 ml-10">
                varios retos al salir de casa
              </p>
              <ul className="list-disc md:text-xl text-base text-gray-800 px-4 max-w-xl ml-10 mt-4">
                <li>
                  Calles o aceras irregulares, barreras arquitectónicas que{" "}
                  <span className="font-bold">
                    imposibilitan nuestro acceso a espacios públicos o privados.
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Falta de Tecnología Inclusiva
                  </span>{" "}
                  como braille, lectores de pantalla y señales auditivas.
                </li>
                <li>
                  <span className="font-bold">Miradas o preguntas </span>que
                  disminuyen nuestra confianza para salir y explorar nuestro
                  propio entorno .
                </li>
              </ul>
              <div className="flex md:justify-center justify-end mt-8">
                <div className=" md:w-2/5 w-2/4 mx-auto md:mx-0 md:mr-40">
                  <img src={lineaDiscontinua} alt="Lineas discontinuas" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img src={vector4} alt="Personas con diferentes discapacidades" />
            </div>
          </div>
          <div className="bg-pink-100 flex flex-col md:flex-row">
            <div className="max-w-xl">
          <p className="md:text-xl text-base text-gray-800 ml-10">
            El Ministerio de la Igualdad se formó en el 2023 para mitigar los
            desequilibrios sociales y la inequidad. La vice presidenta Francia
            Márquez dijo que mi igualdad será “un mecanismo para avanzar en la
            reducción efectiva de las brechas de desigualdad e inequidad en
            Colombia”.
          </p>
          </div>
          <div className="md:flex hidden mt-16">
              <img src={lineaDiscontinuaLarga2} alt="Lineas discontinuas" />
            </div>
          </div>
        </section>
        {/* Final cómo estamos */}
      </div>
    </section>
  );
};
