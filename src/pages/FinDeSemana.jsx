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
import { useTranslation } from 'react-i18next';

export const FinDeSemana = () => {
  const [t] = useTranslation('global');
  return (
    <>
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
                <button
                  style={{
                    fontSize: "22px",
                    color: "white",
                    fontFamily: "sans-serif",
                  }}
                >
                  A<sup className="font-semibold">+</sup>
                </button>
              ),
              down: (
                <button
                  style={{
                    fontSize: "22px",
                    color: "white",
                    fontFamily: "sans-serif",
                  }}
                >
                  A<sup className="font-semibold">-</sup>
                </button>
              ),
              style: {
                backgroundColor: "#2F52A0",
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
              <h1 className="titulo font-bold max-w-lg md:text-2xl text-xl text-center md:pt-28 pt-16 text-gray-800 leading-relaxed" tabIndex={0}>
              {t('weekend.weekendActivities')}
              </h1>
            </div>
            <hr className="linea-fucsia mx-auto mt-2" tabIndex={0}></hr>
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
