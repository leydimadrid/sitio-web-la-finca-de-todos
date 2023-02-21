import infografiaPasaDia from "../assets/images/infografia-pasa-dia.jpg";
import logo from "../assets/images/logo-la-finca-de-todos-pasa-dia.svg";
import reloj from "../assets/images/reloj-infografia-pasa-dia.svg";
import tiempoActividades from "../assets/images/tiempo-infografía-pasa-dia.svg";
import vectorBienvenida from "../assets/images/vector-bienvenida-infografia-pasa-dia.svg";
import vectorHuerto from "../assets/images/vector-huerto-infografia-pasa-dia.svg";
import vectorCocina from "../assets/images/vector-cocina-infografia-pasa-dia.svg";
import vectorAlmuerzo from "../assets/images/vector-almuerzo-infografia-pasa-dia.svg";
import vectorDescanso from "../assets/images/vector-descanso-infografia-pasa-dia.svg";
import vectorCasaAccesible from "../assets/images/vector-casa-accesible-infografia-pasa-dia.svg";
import vectorReciclaje from "../assets/images/vector-reciclaje-infografia-pasa-dia.svg";
import vectorArteReciclaje from "../assets/images/vector-arte-reciclaje-infografia-pasa-dia.svg";

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
      <section className="flex md:flex-row lg:flex-row flex-col justify-start md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 w-auto grid place-items-center">
          <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            INICIO
          </h1>
          <p className="md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed">
            Llegada a{" "}
            <span className="text-blue-900 font-semibold">
              La Finca de Todos{" "}
            </span>
          </p>
          <img src={logo} alt="Logo La Finca De Todos" className="mt-2" />
        </div>
        <div className="basis-2/5 grid place-content-center content-end py-2">
          <img
            src={reloj}
            alt="Reloj indicando las 9:30am"
            className="mt-2 md:w-auto lg:w-auto w-64"
          />
        </div>
      </section>
      <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      {/* Final sección inicio */}

      {/* Inicio Sección centro de bienvenida */}
      <section className="flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-content-center content-end py-2">
          <img
            src={vectorBienvenida}
            alt="Vector de un hombre y una mujer saludando"
            className="my-2 md:w-auto lg:w-auto w-64"
          />
        </div>
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                15 MIN
              </h1>
            </div>
            <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              CENTRO DE BIENVENIDA
            </h1>
            <div>
              <ul className="font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center">
                <li className="mb-2 leading-relaxed">
                  {" "}
                  <span className="font-semibold">Introducción</span>
                </li>
                <li className="mb-2 leading-relaxed">
                  Información de la <span className="font-semibold">finca</span>{" "}
                  y su <span className="font-semibold">propósito</span>
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold">Cronograma</span> de
                  actividades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end">
        <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      </div>
      {/* Final sección centro de bienvenida */}

      {/* Inicio Sección en el huerto*/}
      <section className="flex md:flex-row lg:flex-row flex-col justify-start md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                40 MIN
              </h1>
            </div>
            <h1 className="bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              EN EL HUERTO
            </h1>
            <div>
              <ul className="font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-left lg:text-left text-center">
                <li className="leading-relaxed">
                  {" "}
                  <span className="font-semibold">Actividades</span>
                </li>
                <li className="leading-relaxed">Cierra los ojos</li>
                <li className="mb-2 leading-relaxed">
                  ¿<span className="font-semibold">Imagínate</span> que tienes
                  en tu mano?
                </li>
                <li className="mb-2 leading-relaxed">
                  <span className="font-semibold">Recoger</span> los sembrados
                </li>
                <li className="leading-relaxed">
                  Sembrados <span className="font-semibold">frescos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-2/5 grid place-content-center content-end py-2">
          <img
            src={vectorHuerto}
            alt="Vector de un niño y una niña en el huerto regando las plantas"
            className="my-2 md:w-auto lg:w-auto w-80"
          />
        </div>
      </section>
      <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      {/* Final sección en el huerto */}

      {/* Inicio Sección en la cocina */}
      <section className="flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-content-center content-end py-2">
          <img
            src={vectorCocina}
            alt="Vector de un hombre y una mujer saludando"
            className="my-2 md:w-auto lg:w-auto w-64"
          />
        </div>
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                1 HORA
              </h1>
            </div>
            <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              EN LA COCINA
            </h1>
            <div>
              <ul className="font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center">
                <li className="mb-2 leading-relaxed">
                  {" "}
                  <span className="font-semibold">Beneficios</span> de las{" "}
                  <span className="font-semibold">verduras/frutas</span>
                </li>
                <li className="mb-2 leading-relaxed">
                  <span className="font-semibold">¿Cómo hacer</span> una
                  ensalada?
                </li>
                <li className="mb-2 leading-relaxed">
                  <span className="font-semibold">Beneficios</span> de la
                  ensalada
                </li>
                <li className="mb-2 leading-relaxed">
                  <span className="font-semibold">Preparación</span> ensalada
                  dulce y ensalada verde
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end">
        <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      </div>
      {/* Final sección en la cocina */}

      {/* Inicio Sección almuerzo */}
      <section className="flex md:flex-row lg:flex-row flex-col justify-center md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                30 MIN
              </h1>
            </div>
            <h1 className="bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              ALMUERZO
            </h1>
            <div className="basis-2/5 grid place-content-center content-end py-2">
              <img
                src={vectorAlmuerzo}
                alt="Vector de un hombre y una mujer saludando"
                className="my-2 md:w-auto lg:w-auto w-64"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      {/* Final sección almuerzo */}

      {/* Inicio Sección descanso */}
      <section className="flex md:flex-row lg:flex-row flex-col justify-end md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-content-center content-end py-2">
          <img
            src={vectorDescanso}
            alt="Vector de un hombre y una mujer saludando"
            className="my-2 md:w-auto lg:w-auto w-80"
          />
        </div>
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                30 MIN
              </h1>
            </div>
            <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              DESCANSO
            </h1>
            <div className="max-w-md">
              <p className="font-normal md:text-xl lg:text-lg text-base text-gray-800 leading-relaxed md:text-right lg:text-right text-center">
                {" "}
                <span className="font-semibold">Disfruta</span> del espacio,{" "}
                <span className="font-semibold"> visita</span> las instalaciones
                con
                <span className="font-semibold"> guías/maestras, </span>o si
                prefieres toma un
                <span className="font-semibold"> descanso </span>en un lugar
                <span className="font-semibold">
                  {" "}
                  tranquilo, explora y relajate.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end">
        <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      </div>
      {/* Final sección descanso */}

      {/* Inicio Sección casa accesible, reciclaje y arte con reciclaje */}
      <section className="flex md:flex-row lg:flex-row flex-col justify-center md:mt-24 lg:mt-24 mt-10">
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                30 MIN
              </h1>
            </div>
            <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              TOUR CASA ACCESIBLE
            </h1>
            <div className="basis-2/5 grid place-content-center content-end py-2">
              <img
                src={vectorCasaAccesible}
                alt="Vector de un hombre y una mujer saludando"
                className="my-2 md:w-auto lg:w-auto w-64"
              />
            </div>
          </div>
        </div>
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                15 MIN
              </h1>
            </div>
            <h1 className="bg-blue-900 py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              LECCIÓN SOBRE RECICLAJE
            </h1>
            <div className="basis-2/5 grid place-content-center content-end py-2">
              <img
                src={vectorReciclaje}
                alt="Vector de un hombre y una mujer saludando"
                className="my-2 md:w-auto lg:w-auto w-48"
              />
            </div>
          </div>
        </div>
        <div className="basis-2/5 grid place-items-center">
          <div className="w-auto grid place-content-start">
            <div className="grid place-content-center">
              <img src={tiempoActividades} alt="Reloj" />
              <h1 className="md:text-xl lg:text-lg text-base text-gray-800 font-semibold">
                1 HORA
              </h1>
            </div>
            <h1 className="FondoFucsiaInfografia py-2 md:text-2xl text-xl font-bold text-white rounded-xl text-center px-3 md:mx-0 mx-auto mb-4 mt-4">
              ARTE CON RECICLAJE
            </h1>
            <div className="basis-2/5 grid place-content-center content-end py-2">
              <img
                src={vectorArteReciclaje}
                alt="Vector de un hombre y una mujer saludando"
                className="my-2 md:w-auto lg:w-auto w-64"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="linea-discontinua w-full md:w-3/4 lg:w-3/4 mt-2"></hr>
      {/* Final sección casa accesible, reciclaje y arte con reciclaje*/}
    </section>
  );
};
