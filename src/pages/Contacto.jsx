import imagenContacto from "../assets/images/imagen-contacto.jpg";
import iconotelefono from "../assets/images/icono-telefono.svg";
import iconoinstagram from "../assets/images/icono-instagram.svg";
import iconofacebook from "../assets/images/icono-facebook.svg";
import iconoemail from "../assets/images/icono-email.svg";
import FontSizeChanger from 'react-font-size-changer';

export const Contacto = () => {
  return (
    <section >
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
      <div id="contenedor" className="flex flex-col md:flex-row lg:flex-row lg:space-x-40 sm:space-x-0 xl:space-x-2 2xl:space-x-20 items-center">
        <div className="md:my-6 lg:my-6">
          <img src={imagenContacto} />
        </div>
        <div className="md:w-2/6 lg:w-2/6 w-full h-2/6 p-8">
          <h1 className="titulo text-blue-900 font-bold md:text-2xl lg:text-2xl text-xl text-center leading-relaxed">Comunícate con nosotros</h1>
          <div className="mt-8 flex justify-center">
          <form className="w-full flex flex-col space-y-3">
            <div>
              <label htmlFor="" className="titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed">Nombre</label>
            </div>
            <div>
              <input type="text" placeholder="Ingrese su nombre" className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>

            <div>
              <label htmlFor="" className="titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed">Email</label>
            </div>
            <div className="mt-2">
              <input type="email" placeholder="Ingrese su email" className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>

            <div>
              <label htmlFor="" className="titulo leading-relaxed text-gray-700 md:text-md lg:text-md text-sm font-bold">Mensaje</label>
            </div>
            <div className="mt-2">
              <textarea className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>
            <button className="titulo leading-relaxed inline-block px-6 py-4 bg-blue-900 text-white font-semibold rounded-lg text-sm uppercase">Enviar mensaje</button>
          </form>
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
      </div>
    </section>
  );
};
