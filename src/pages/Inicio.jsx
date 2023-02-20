import { BotonLaFinca } from "../components/BotonLaFinca";
import { VideoInicio } from "../components/VideoInicio";
import FontSizeChanger from "react-font-size-changer";

export const Inicio = () => {
  return (
    <section className="bienvenidos md:bg-cover bg-cover bg-no-repeat">
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
      <VideoInicio />
      <section id="contenedor" className="mt-20">
        <h1 className="titulo md:text-4xl text-3xl text-center text-blue-900 font-bold tracking-wide">
          BIENVENIDOS
        </h1>
        <div className="max-w-md my-auto mx-auto pt-6 md:pb-10 pb-6 text-center md:text-xl text-base font-medium text-gray-800">
          <p className="titulo leading-relaxed md:px-0 lg:px-0 px-4">
            ¡Este mundo es para disfrutarlo al máximo! Te invitamos a <span className="text-blue-900">
                La Finca de Todos{" "}
              </span>, un lugar hecho para todos.
          </p>
        </div>
        <div className="titulo text-center md:pb-20 pb-10">
          <BotonLaFinca />
        </div>
      </section>
    </section>
  );
};
