import { useState } from "react";
import emailjs from "@emailjs/browser";
import Error from "./Error";
import Swal from "sweetalert2";

export const Formulario = () => {
  const [error, setError] = useState(false);

  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, contacto, mensaje].includes("")) {
      setError(true);
      return;
    }

    setNombre("");
    setContacto("");
    setMensaje("");

    setError(false);

    emailjs
      .sendForm(
        "service_35mx0t7",
        "template_y63tqvl",
        e.target,
        "hOByMRfajx3LnyXzm"
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Mensaje enviado con éxito 😀",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));

  };

  return (
    <div className="mt-8 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3">
        <div>
          <label
            htmlFor=""
            className="titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed"
          >
            Nombre
          </label>
        </div>
        <div>
          <input
            id="nombre"
            type="text"
            name="nombre_usuario"
            placeholder="Ingrese su nombre"
            className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor=""
            className="titulo text-gray-700 md:text-md lg:text-md text-sm font-bold leading-relaxed"
          >
            Medio de contacto
          </label>
        </div>
        <div className="mt-2">
          <input
            id="contacto"
            name="contacto_usuario"
            placeholder="Ingrese su email"
            className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor=""
            className="titulo leading-relaxed text-gray-700 md:text-md lg:text-md text-sm font-bold"
          >
            Mensaje
          </label>
        </div>
        <div className="mt-2">
          <textarea
            id="mensaje"
            name="mensaje_usuario"
            className="titulo leading-relaxed w-full ring-2 ring-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="titulo leading-relaxed inline-block px-6 py-4 bg-blue-900 text-white font-semibold rounded-lg text-sm uppercase"
          value="Enviar mensaje"
        />
        {error && <Error />}
      </form>
    </div>
  );
};
