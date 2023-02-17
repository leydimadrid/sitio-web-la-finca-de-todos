import { Accesibilidad } from "../components/Accesibilidad";
import { accesibilidad } from "../database/accesibilidad";
import { PrincipiosSostenibilidad } from "../components/PrincipiosSostenibilidad";
import { principiosSostenibilidad } from "../database/principiosSostenibilidad";
import { VideoFinca } from "../components/VideoFinca";
import FontSizeChanger from 'react-font-size-changer';

export const LaFinca = () => {
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
     <div id="contenedor">
      <section id="lafinca" className="fondoFinca3d md:bg-contain bg-auto bg-no-repeat">
        <div className="flex justify-center">
          <h1 className="titulo md:max-w-lg max-w-sm font-bold md:text-2xl text-xl text-center md:pt-24 pt-4 text-gray-800 leading-relaxed">
            Modelo 3D de la finca y sus edificaciones
          </h1>
        </div>
        <hr className="linea-verde mx-auto mt-2"></hr>
        <VideoFinca/>
      </section>
      <section className="fondoAccesibilidad md:bg-cover bg-contain bg-no-repeat">
      <div className="flex justify-center">
        <h1 className="titulo md:max-w-sm max-w-xs font-bold md:text-2xl text-xl text-center md:mt-14 mt-6 text-gray-800 leading-relaxed">
          Consideraciones de accesibilidad
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:py-6">
      <div className="titulo flex flex-wrap place-content-center leading-relaxed">
        {accesibilidad.map((item) => (
          <Accesibilidad
            key={item.id}
            imagen={item.imagen}
            titulo={item.titulo}
            alt={item.alt}
          />
        ))}
      </div>
      </section>
      </section>
      <section className="fondoSostenibilidad md:bg-cover bg-auto bg-no-repeat">
      <div className="flex justify-center">
        <h1 className="titulo flex flex-col md:max-w-xl max-w-sm font-bold md:text-xl text-xl text-center mt-10 text-gray-800 leading-relaxed">
        Objetivos de Desarrollo Sostenible
        <span className="titulo text-gray-800 md:text-base text-base leading-relaxed">de acuerdo con la Organización de las Naciones Unidas (ONU)</span>
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:py-6">
      <div className="titulo flex flex-wrap md:mb-4 mb-10 place-content-center leading-relaxed">
        {principiosSostenibilidad.map((item) => (
          <PrincipiosSostenibilidad
            key={item.id}
            imagen={item.imagen}
            parrafo={item.parrafo}
            alt={item.alt}
          />
        ))}
      </div>
      </section>
      </section>
      </div>
    </div>
  );
};
