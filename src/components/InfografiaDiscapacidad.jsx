import lineaDiscontinua from "../assets/images/linea-discontinua-infografia.svg";
import lineaDiscontinuaDerecha from "../assets/images/linea-discontinua-derecha.svg";
import vector1 from "../assets/images/vector1-discapacidad.svg";

export const InfografiaDiscapacidad = () => {
  return (
    <section>
      <div className="p-4">
        <h1 className="font-bold md:text-6xl text-3xl text-center md:pt-36 text-blue-900">
          DISCAPACIDAD EN COLOMBIA
        </h1>
        <hr className="linea-amarilla h-1 md:w-3/5 md:mx-auto mx-auto mt-2"></hr>
      </div>
      <div className="flex justify-center px-4 ">
        <p className="text-gray-800 font-normal md:text-xl text-base max-w-4xl text-justify">
          Colombia forma parte de la Convención de Naciones Unidas sobre los
          Derechos de las Personas con Discapacidad desde el{" "}
          <span className="font-bold">2011 </span>para promover su plena
          participación en todos los ámbitos de la vida.
        </p>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <img src={lineaDiscontinua} />
      </div>
      <section className="md:flex flex-row justify-center">
        <div>
          <h1 className="FondoFucsiaInfografia py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="max-w-md md:text-xl text-base mb-4 mx-auto">
            Somos <span className="font-bold">igual</span> a los demás{" "}
            <span className="font-bold">Colombianos</span> con unos{" "}
            <span className="font-bold">retos adicionales</span> que enfrentar.
          </p>
          <p className="max-w-md md:text-xl text-base mb-4 mx-auto">
            Podemos tener una discapacidad:
          </p>
          <div className="flex mx-auto">
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
          <div className="flex justify-center mb-8 md:mr-32">
            <img src={lineaDiscontinuaDerecha} />
          </div>
          <p className="md:max-w-md max-w-sm md:text-xl text-base md:mx-0 mx-auto">
            <span className="text-blue-900 md:text-5xl text-4xl font-bold ">
              15%{" "}
            </span>
            de las personas registradas manifestó ser víctima del conflicto
            armado.
          </p>
        </div>
      </section>
      <section className="md:flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="bg-blue-900 py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center w-72 px-3 md:mx-0 mx-auto mb-4">
            ¿CUÁNTOS SOMOS?
          </h1> </div>
          <div>
          <p className="max-w-sm md:text-xl text-base mb-4 mx-auto">
          Población de Colombia <span className="font-bold">51.5 millones</span>  de personas. 
          </p>
        </div>
      </section>
    </section>
  );
};
