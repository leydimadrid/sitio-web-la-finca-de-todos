import imagenUbicacion from "../assets/images/imagen-ubicacion.jpg";

export const Ubicacion = () => {
  return (
    <section className="fondoUbicacion md:bg-cover bg-cover bg-no-repeat">
      <div className="md:flex flex-row items-center justify-center pt-20">
        <div className="max-w-xl md:p-6 p-8 md:mr-28">
          <p className="text-gray-800 md:text-xl text-base text-center">
            Si necesitas transporte accesible <span className="font-bold block text-blue-900">¡Te recogemos! </span> 
          </p>
          <p className="text-center text-gray-800 md:text-xl text-base mt-6">
          <span className="font-bold block text-gray-800">Sábado y Domingo</span>  Paradas gratuitas en buseta accesible.
          </p>
          <p className="text-gray-800 font-bold md:text-xl text-base text-center mt-6">
          Las paradas serán decididas en un futuro. 
          </p>
        </div>
        <div className="md:m-1">
          {" "}
          <img className="p-4" src={imagenUbicacion} alt="Hombre en silla de ruedas, subiendo a un carro accesible"/>
        </div>
      </div>
    </section>
  );
};
