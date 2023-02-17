import imagenDonaciones from "../assets/images/imagen-donaciones.jpg";
import { BotonAhora } from "../components/BotonAhora";
import FontSizeChanger from 'react-font-size-changer';

export const Donaciones = () => {
  return (
    <div>
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
    <section id="contenedor" className="fondoUbicacion md:bg-cover bg-cover bg-no-repeat">
      <div className="md:flex flex-row items-center justify-center md:pt-20">
        <div className="md:m-1">
          {" "}
          <img className="p-4" src={imagenDonaciones} alt="Niña con Síndrome de Down sonriendo" />
        </div>
        <div className="max-w-xl md:p-6 p-8 font-medium">
          <p className="titulo text-gray-800 md:text-xl text-base text-center leading-relaxed">
            Tu apoyo es indispensable para crear el mundo de igualdad en el que
            queremos vivir.{" "}
            <span className="titulo colorTextoDonaciones font-bold block leading-relaxed">
              ¡Gracias por tu donación! 
            </span>
          </p>
          <p className="titulo text-center text-gray-800 md:text-xl text-base mt-6 leading-relaxed">
            La Fundación La Finca de Todos es una Entidad sin Ánimo de Lucro,
            número de registro XXXX.
            <div className="titulo text-center pt-10 md:text-2xl text-xl leading-relaxed">
              <BotonAhora />
            </div>
          </p>
        </div>
      </div>
    </section>
    </div>
    
  );
};
