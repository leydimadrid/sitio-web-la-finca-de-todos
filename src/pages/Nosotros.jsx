import { BotonDonar } from "../components/BotonDonar";
import { Equipo } from "../components/Equipo";
import { Slider } from "../components/Slider";
import iconotelefono from "../assets/images/icono-telefono.svg";
import iconoinstagram from "../assets/images/icono-instagram.svg";
import iconofacebook from "../assets/images/icono-facebook.svg";
import iconoemail from "../assets/images/icono-email.svg";
import { InfografiaDiscapacidad } from "../components/InfografiaDiscapacidad";
import FontSizeChanger from 'react-font-size-changer';


export const Nosotros = () => {
  return (
    <>
    {/* Inicio Modificador de texto  */}
    <div className="flex justify-end">
      <div className="fixed md:m-4 lg:m-4 m-2">
        <FontSizeChanger
          targets={["#contenedor .titulo"]}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3,
          }}
          customButtons={{
            up: (
              <span
                style={{
                  fontSize: "22px",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                A<sup className="font-semibold">+</sup>
              </span>
            ),
            down: (
              <span
                style={{
                  fontSize: "22px",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                A<sup className="font-semibold">-</sup>
              </span>
            ),
            style: {
              backgroundColor: "#E60064",
              color: "white",
              WebkitBoxSizing: "border-box",
              WebkitBorderRadius: "60px",
              border: "none",
              width: "40px",
            },
            buttonsMargin: 10,
          }}
        />
      </div>
    </div>
     {/* Fin Modificador de texto */}
      <div id="contenedor">
        <section className="nuestraMision md:bg-contain bg-auto bg-no-repeat md:pt-24 pt-16">
          <div>
            <h1 className="titulo font-bold md:text-2xl text-xl text-center md:pt-30 text-gray-800">
              Nuestra Misión
            </h1>
            <hr className="linea-fucsia mx-auto mt-2"></hr>
          </div>
          <div className="flex justify-center my-auto pt-6 mb-2 px-4 md:text-xl text-base font-medium">
            <p className="titulo text-gray-800 md:text-justify text-center max-w-5xl">
              <span className="text-blue-900 font-semibold">
                La Finca de Todos{" "}
              </span>{" "}
              es una oportunidad para vivir en un mundo equitativo y divertido,
              donde nadie queda afuera. Hacen falta espacios campestres que sean
              completamente accesibles a todos los ciudadanos.{" "}
              En{" "}
                <span className="text-blue-900 font-semibold">
                  La Finca de Todos{" "}
                </span>{" "}
                no hay preocupaciones ni escaleras, aquí todos entramos por la
                puerta principal.{" "}
            </p>{" "}
          </div>
          <p className="titulo text-center font-semibold md:text-xl text-base text-blue-900 ">¡Te esperamos!</p>
          <Slider />
        </section>
        <div className="titulo">
          <InfografiaDiscapacidad />
        </div>
        <div className="titulo text-center pt-10 md:text-2xl text-xl">
          <BotonDonar />
        </div>
        <section>
          <div>
            <h1 className="font-bold md:text-2xl text-xl text-center mt-12 text-gray-800">
              Equipo
            </h1>
            <hr className="linea-fucsia mx-auto mt-2"></hr>
          </div>
        </section>
        <div className="titulo">
          <Equipo />
        </div>
      <div className="flex justify-center p-4 md:mt-10">
        <a href="" target="_blank">
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

        <a href="" target="_blank">
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconofacebook}
            alt="Icono Facebook"
          />
        </a>

        <a href="" target="_blank">
          <img
            className="m-2 md:w-auto w-8 h-8"
            src={iconoemail}
            alt="Icono Email"
          />
        </a>
      </div>
    </div>
    </>
  );
};
