import imagenContacto from "../assets/images/imagen-contacto.jpg";
import iconowhatsapp from "../assets/images/icono-whatsapp.svg";
import iconoinstagram from "../assets/images/icono-instagram.svg";
import iconofacebook from "../assets/images/icono-facebook.svg";
import iconoemail from "../assets/images/icono-email.svg";
import FontSizeChanger from 'react-font-size-changer';
import { Formulario } from "../components/Formulario";

export const Contacto = () => {
  return (
    <section >
        {/* Inicio Modificador de texto  */}
    <div className="flex justify-end">
      <div className="fixed md:m-4 lg:m-4 m-2 z-10">
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
      <div id="contenedor" className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="md:my-6 lg:my-6">
          <img src={imagenContacto} alt="Niño con gafas sembrando en un huerto" />
        </div>
        <div className="md:w-2/6 lg:w-2/6 w-full h-2/6 p-8">
          <h1 className="titulo text-blue-900 font-bold md:text-2xl lg:text-2xl text-xl text-center leading-relaxed">Comunícate con nosotros</h1>
          <Formulario/>
          <div className="flex justify-center p-4 md:mt-10">
            <a href="https://api.whatsapp.com/send?phone=3153410641&text=%C2%A1Hola!%20La%20Finca%20De%20Todos%20" target="_blank">
              <img
                className="m-2 md:w-auto w-8 h-8"
                src={iconowhatsapp}
                alt="Icono whatsapp"
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

            <a href="https://www.facebook.com/profile.php?id=100089133646096" target="_blank">
              <img
                className="m-2 md:w-auto w-8 h-8"
                src={iconofacebook}
                alt="Icono Facebook"
              />
            </a>

            <a href="mailto:finca.todos@gmail.com" target="_blank">
              <img
                className="m-2 md:w-auto w-8 h-8"
                src={iconoemail}
                alt="Icono Email"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
