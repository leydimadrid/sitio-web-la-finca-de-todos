import { BotonDonar } from "../components/BotonDonar";
import { Equipo } from "../components/Equipo";
import { Slider } from "../components/Slider";
import iconotelefono from "../assets/images/icono-telefono.svg";
import iconoinstagram from "../assets/images/icono-instagram.svg";
import iconofacebook from "../assets/images/icono-facebook.svg";
import iconoemail from "../assets/images/icono-email.svg";
import { InfografiaDiscapacidad } from "../components/InfografiaDiscapacidad";

export const Nosotros = () => {
  return (
    <>
      <section className="nuestraMision md:bg-contain bg-auto bg-no-repeat">
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center md:pt-36 text-gray-800">
            Nuestra Misión
          </h1>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </div>
        <div className="parrafo-nuestra-mision my-auto pt-6 md:pb-10 pb-6 md:text-xl text-base font-medium">
          <p className="text-gray-800 text-justify">
            La Finca de Todos es una oportunidad para vivir en un mundo
            equitativo y divertido, donde nadie queda afuera. Hacen falta
            espacios campestres que sean completamente accesibles a todos los
            ciudadanos. En La Finca de Todos no hay preocupaciones ni escaleras,
            aquí todos entramos por la puerta principal ¡Te esperamos!.
          </p>{" "}
        </div>
        <Slider />
      </section>
      <InfografiaDiscapacidad/>
      <div className="text-center pt-10 md:text-2xl text-xl">
        <BotonDonar/>
      </div>
      <section>
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center mt-12 text-gray-800">
            Equipo
          </h1>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </div>
      </section>
      <Equipo />
      <div className="flex justify-center p-4 md:mt-10">
        <a
          href=""
          target="_blank"
        >
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconotelefono}
            alt="Icono telefono"
          />
        </a>
        <a
          href="https://instagram.com/fincadetodos?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconoinstagram}
            alt="Icono Instagram"
          />
        </a>

        <a
          href=""
          target="_blank"
        >
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconofacebook}
            alt="Icono Facebook"
          />
        </a>

        <a
          href=""
          target="_blank"
        >
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconoemail}
            alt="Icono Email"
          />
        </a>
      </div>
    </>
  );
};
