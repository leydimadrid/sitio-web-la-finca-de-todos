import imagenContacto from "../assets/images/imagen-contacto.jpg";
import iconotelefono from "../assets/images/icono-telefono.svg";
import iconoinstagram from "../assets/images/icono-instagram.svg";
import iconofacebook from "../assets/images/icono-facebook.svg";
import iconoemail from "../assets/images/icono-email.svg";

export const Contacto = () => {
  return (
    <section className="fondoCardsActividades">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div>
          <img src={imagenContacto} />
        </div>

        <div className="md:w-2/6 lg:w-2/6 w-96 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-blue-900 font-bold text-2xl text-center">Comunícate con nosotros</h1>
          <div className="mt-8 flex justify-center">
          <form className="w-full max-w-lg flex flex-col space-y-4">
            <div>
              <label htmlFor="" className="text-gray-700 text-sm font-bold">Nombre</label>
            </div>
            <div>
              <input type="text" placeholder="Ingrese su nombre" className="w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>

            <div>
              <label htmlFor="" className="text-gray-700 text-sm font-bold">Email</label>
            </div>
            <div className="mt-2">
              <input type="email" placeholder="Ingrese su email" className="w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>

            <div>
              <label htmlFor="" className="text-gray-700 text-sm font-bold">Email</label>
            </div>
            <div className="mt-2">
              <textarea className="w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4" />
            </div>
            <button className="inline-block px-6 py-4 bg-blue-900 text-white font-semibold rounded-lg text-sm uppercase">Enviar mensaje</button>
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
