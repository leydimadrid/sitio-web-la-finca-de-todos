import imagenUbicacion from "../assets/images/imagen-ubicacion.jpg";
import mapaCali from "../assets/images/mapa-cali.jpg";
import FontSizeChanger from 'react-font-size-changer';

export const Ubicacion = () => {
  return (
    <div>
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
    <section id="contenedor" className="fondoUbicacion md:bg-cover bg-cover bg-no-repeat">
      <div className="md:flex flex-row items-center justify-center md:pt-20">
        <div className="max-w-xl md:p-6 p-8 md:mr-28 lg:mr-1">
          <p className="titulo text-gray-800 md:text-xl text-base text-center">
            Si necesitas transporte accesible{" "}
            <span className="titulo font-bold block text-blue-900">
              ¡Te recogemos! 
            </span>
          </p>
          <p className="titulo text-center text-gray-800 md:text-xl text-base mt-6">
            <span className="titulo font-bold block text-gray-800">
              Sábado y Domingo
            </span>{" "}
            Paradas gratuitas en buseta accesible.
          </p>
          <p className="titulo text-gray-800 font-bold md:text-xl text-base text-center mt-6">
            Las paradas serán decididas en un futuro. 
          </p>
        </div>
        <div className="md:m-1">
          {" "}
          <img
            className="p-4"
            src={imagenUbicacion}
            alt="Hombre en silla de ruedas, subiendo a un carro accesible"
          />
        </div>
      </div>
      <p className="titulo text-gray-800 font-semibold md:text-xl text-base text-center mt-6">
        Aún estamos buscando el lugar perfecto para <span className="titulo text-blue-900 font-semibold">
                La Finca de Todos{" "}
              </span>{" "}
      </p>
      <div className="md:m-1">
          {" "}
          <img
            className="p-4 shadow-lg"
            src={mapaCali}
            alt="Hombre en silla de ruedas, subiendo a un carro accesible"
          />
        </div>
    </section>
    </div>
  );
};
