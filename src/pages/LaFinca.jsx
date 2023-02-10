import { Accesibilidad } from "../components/Accesibilidad";
import { accesibilidad } from "../database/accesibilidad";
import { PrincipiosSostenibilidad } from "../components/PrincipiosSostenibilidad";
import { principiosSostenibilidad } from "../database/principiosSostenibilidad";
import { VideoFinca } from "../components/VideoFinca";

export const LaFinca = () => {
  return (
    <div>
      <section id="lafinca" className="fondoFinca3d md:bg-contain bg-auto bg-no-repeat">
        <div className="flex justify-center">
          <h1 className="md:max-w-lg max-w-sm font-bold md:text-2xl text-xl text-center md:pt-24 pt-4 text-gray-800">
            Modelo 3D de la finca y sus edificaciones
          </h1>
        </div>
        <hr className="linea-verde mx-auto mt-2"></hr>
        <VideoFinca/>
      </section>
      <section className="fondoAccesibilidad md:bg-cover bg-contain bg-no-repeat">
      <div className="flex justify-center">
        <h1 className="md:max-w-sm max-w-xs font-bold md:text-2xl text-xl text-center md:mt-14 mt-6 text-gray-800">
          Consideraciones de accesibilidad
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:py-6">
      <div className="flex flex-wrap place-content-center">
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
        <h1 className=" flex flex-col md:max-w-xl max-w-sm font-bold md:text-xl text-xl text-center mt-10 text-gray-800">
        Objetivos de Desarrollo Sostenible
        <span className=" text-gray-800 md:text-base text-base">de acuerdo con la Organización de las Naciones Unidas (ONU)</span>
        </h1>
      </div>
      <hr className="linea-fucsia mx-auto mt-2"></hr>
      <section className="md:py-6">
      <div className="flex flex-wrap md:mb-4 mb-10 place-content-center">
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
  );
};
