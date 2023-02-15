import { CardsLenguaDeSeñas } from "../components/CardsLenguaDeSeñas";
import FontSizeChanger from "react-font-size-changer";
import { ActividadMariposario } from "../components/ActividadMariposario";
import { ActividadSembrados } from "../components/ActividadSembrados";
import { ActividadInvernadero } from "../components/ActividadInvernadero";
import { ActividadSimulador } from "../components/ActividadSimulador";
import { ActividadCaminoYJardin } from "../components/ActividadCaminoYJardin";
import { ActividadAnimales } from "../components/ActividadAnimales";
import { ActividadJardinZen } from "../components/ActividadJardinZen";
import { ActividadCasaSostenible } from "../components/ActividadCasaSostenible";
import { ActividadMuroEscalar } from "../components/ActividadMuroEscalar";
import { ActividadCafeteria } from "../components/ActividadCafeteria";

export const FinDeSemana = () => {
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
      <section className="fondoFinDeSemana md:bg-cover bg-auto bg-no-repeat">
        <div id="contenedor">
          <section>
            <div className="flex justify-center">
              <h1 className="titulo font-bold max-w-lg md:text-2xl text-xl text-center md:pt-28 pt-4 text-gray-800 leading-relaxed">
                Actividades fin de semana
              </h1>
            </div>
            <hr className="linea-fucsia mx-auto mt-2"></hr>
          </section>
           <section className="md:py-6 px-2 mt-4 flex justify-center">
            <div className="titulo flex flex-wrap lg:max-w-full justify-center cursor-pointer">
              <ActividadMariposario/>
              <ActividadSembrados/>
              <ActividadInvernadero/>
              <ActividadSimulador/>
              <ActividadCaminoYJardin/>
              <ActividadAnimales/>
              <ActividadJardinZen/>
              <ActividadCasaSostenible/>
              <ActividadMuroEscalar/>
              <ActividadCafeteria/>
            </div>
          </section>
          <div className="titulo">
            <CardsLenguaDeSeñas />
          </div>
        </div>
      </section>
    </>
  );
};
