import { CardsTalleres } from "../components/CardsTalleres";
import { cardstalleres } from "../database/cardstalleres";

export const TalleresPedagogicos = () => {
  return (
    <>
      <section className="bg-white">
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center md:pt-36 text-gray-800">
            Idea/Misión
          </h1>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </div>
        <div className="parrafo-nuestra-mision my-auto pt-6 md:pb-10 pb-6 md:text-xl text-base font-medium">
          <p className="text-gray-800 text-justify">
            Aquí en la Finca de todos, ¡La diversión y la educación van mano a
            mano!. Nuestros talleres han sido cuidadosamente planificados por
            docentes con años de experiencia y ayudarán a todos los estudiantes,
            con o sin discapacidad, a desarrollar las habilidades necesarias para
            convertirse en adultos saludables con conciencia. Aprender
            explorando en medio de la naturaleza despertará nuevas conexiones en
            sus cerebros, habilidades motrices y sensoriales mientras reforzamos
            conceptos del ingenio, la autoestima, la responsabilidad social, y
            la cooperación.
          </p>{" "}
        </div>
      </section>
      <section className="bg-white">
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center md:pt-36 text-gray-800">
          Categorías de talleres
          </h1>
          <hr className="linea-azul mx-auto mt-2"></hr>
        </div>
        <section className="md:py-6 mt-4 md:mb-4 mb-10">
          <div className="flex flex-wrap place-content-center">
            {cardstalleres.map((item) => (
              <CardsTalleres
                key={item.id}
                imagen={item.imagen}
                titulo={item.titulo}
                parrafo={item.parrafo}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
