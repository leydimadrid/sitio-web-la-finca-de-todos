import imagenDonaciones from "../assets/images/imagen-donaciones.jpg";
import { BotonAhora } from "../components/BotonAhora";

export const Donaciones = () => {
  return (
    <section className="fondoUbicacion md:bg-cover bg-cover bg-no-repeat">
      <div className="md:flex flex-row items-center justify-center pt-20">
        <div className="md:m-1">
          {" "}
          <img className="p-4" src={imagenDonaciones} alt="Niña con Síndrome de Down sonriendo" />
        </div>
        <div className="max-w-xl md:p-6 p-8">
          <p className="text-gray-800 md:text-xl text-base text-center">
            Tu apoyo es indispensable para crear el mundo de igualdad en el que
            queremos vivir.{" "}
            <span className="colorTextoDonaciones font-bold block">
              ¡Gracias por tu donación! 
            </span>
          </p>
          <p className="text-center text-gray-800 md:text-xl text-base mt-6">
            La Fundación La Finca de Todos es una Entidad sin Ánimo de Lucro,
            número de registro XXXX.
            <div className="text-center pt-10 md:text-2xl text-xl">
              <BotonAhora />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
