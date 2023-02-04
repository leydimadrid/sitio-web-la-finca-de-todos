import { Accesibilidad } from "./Accesibilidad";
import videoFinca3d from "../assets/videos/video-finca-3d.mp4";
import { accesibilidad } from "../database/accesibilidad";
import { PrincipiosSostenibilidad } from "./PrincipiosSostenibilidad";
import { principiosSostenibilidad } from "../database/principiosSostenibilidad";
import { VideoFinca } from "../components/VideoFinca";

export const LaFinca = () => {
  return (
    <div>
      <section id="lafinca" className="fondoFinca3d md:bg-auto bg-auto bg-no-repeat">
        <div className="flex justify-center">
          <h1 className="md:max-w-lg max-w-sm font-bold md:text-2xl text-xl text-center md:pt-36 pt-28 text-gray-800">
            Modelo 3D de la finca y sus edificaciones
          </h1>
        </div>
        <hr className="linea-verde mx-auto mt-2"></hr>
        <VideoFinca/>
      </section>
      <section className="fondoAccesibilidad md:bg-cover bg-contain bg-no-repeat">
      <div className="flex justify-center">
        <h1 className="md:max-w-sm max-w-xs font-bold md:text-2xl text-xl text-center md:mt-14 text-gray-800">
          Consideraciones de accesibilidad
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:px-40 px-5 md:py-6">
      <div className="cardsAccesibilidad mx-auto flex flex-wrap">
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
      <section>
      <div className="flex justify-center">
        <h1 className=" flex flex-col md:max-w-xl max-w-sm font-bold md:text-xl text-xl text-center mt-10 text-gray-800">
        Objetivos de Desarrollo Sostenible
        <span className=" text-gray-800 md:text-base text-base">de acuerdo con la Organización de las Naciones Unidas (ONU)</span>
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:px-40 px-5 md:py-6">
      <div className="cardsAccesibilidad mx-auto flex flex-wrap md:mb-4 mb-10">
        {principiosSostenibilidad.map((item) => (
          <PrincipiosSostenibilidad
            key={item.id}
            imagen={item.imagen}
            titulo={item.titulo}
            alt={item.alt}
          />
        ))}
      </div>
      </section>
      </section>
    </div>
  );
};
