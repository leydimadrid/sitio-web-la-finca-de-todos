import { CardsTalleres } from "../components/CardsTalleres";
import { InfografiaPasaDia } from "../components/InfografiaPasaDia";
import { cardstalleres } from "../database/cardstalleres";
import asistirTalleres from "../assets/images/imagen-asistir-talleres.jpg";
import { BotonContactenos } from "../components/BotonContactenos";

export const TalleresPedagogicos = () => {
  return (
    <div>
      <section className="bg-white">
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center md:pt-28 pt-4 text-gray-800">
            Idea/Misión
          </h1>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </div>
        <div className="parrafo-nuestra-mision my-auto pt-6 md:pb-10 pb-6 md:text-xl text-base font-medium">
          <p className="text-gray-800 text-justify">
            Aquí en la Finca de todos, ¡La diversión y la educación van mano a
            mano!. Nuestros talleres han sido cuidadosamente planificados por
            docentes con años de experiencia y ayudarán a todos los estudiantes,
            con o sin discapacidad, a desarrollar las habilidades necesarias
            para convertirse en adultos saludables con conciencia. Aprender
            explorando en medio de la naturaleza despertará nuevas conexiones en
            sus cerebros, habilidades motrices y sensoriales mientras reforzamos
            conceptos del ingenio, la autoestima, la responsabilidad social, y
            la cooperación.
          </p>{" "}
        </div>
      </section>
      <section className="fondoTalleres md:bg-cover bg-cover bg-no-repeat">
        <div>
          <h1 className="font-bold md:text-2xl text-xl text-center pt-10 text-gray-800">
            Categorías de talleres
          </h1>
          <hr className="linea-azul mx-auto mt-2"></hr>
        </div>
        <section className="md:py-6 px-4 mt-4 md:mb-4 mb-10">
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
      <InfografiaPasaDia />
      <section className="fondoAsistirTalleres md:bg-cover bg-auto bg-no-repeat">
        <div className="flex justify-center pt-10">
          <h1 className="FondoFucsiaTalleres py-4 md:text-2xl text-xl font-bold text-white rounded-lg text-center md:w-96 px-3">
            ¿Cómo asistir a los talleres?
          </h1>
        </div>
        <div className="md:pt-14 md:flex flex-row items-center justify-center">
          <div className="max-w-xl md:p-6 p-8 md:mr-28">
            <h1 className="font-bold md:text-2xl text-lg text-center mb-4">
              Para colegios y escuelas
            </h1>
            <p className="text-justify text-gray-800 md:text-xl text-base">
              Cuéntanos sobre el currículum de tus clases y podemos integrarlo a
              nuestros talleres para enriquecer los conceptos que están
              aprendiendo tus estudiantes. Nuestra misión es ofrecer un día de
              esparcimiento y aprendizaje, tanto a los estudiantes como a los
              docentes que nos visiten.
            </p>
            <h1 className="font-bold md:text-2xl text-lg pt-6 text-center mb-4">
              Para particulares
            </h1>
            <p className="text-justify text-gray-800 md:text-xl text-base">
              De martes a viernes contamos con programación interactiva y
              educacional,  a la cual estás cordialmente invitado. Contáctenos
              para programar tu próxima experiencia. Estamos dispuestos para
              hacer modificaciones y ajustes de acuerdo con las necesidades de
              nuestros visitantes.
            </p>
          </div>
          <div>
            {" "}
            <img className="p-4" src={asistirTalleres} />
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <h1 className="md:text-2xl text-xl font-bold rounded-lg text-center w-96 px-3">
            Cursos
          </h1>
        </div>
        <div className="md:flex flex-row items-center justify-center">
          <div className="max-w-xl md:p-6 p-8">
            <p className=" text-center text-gray-800 md:text-xl text-base">
              is simply dummy text of the printing and typesetting. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took of type and scrambled it to make a
              type specimen book.
            </p>
            <div className="flex justify-center">
            <ul >
              <li className="font-bold md:text-2xl text-lg pt-6 text-center mb-4 m-4">
                6-8
              </li>
              <li className="font-bold md:text-2xl text-lg text-center mb-4  m-4">
                9-11
              </li>
            </ul>

            <ul>
              <li className="font-bold md:text-2xl text-lg pt-6  text-center mb-4  m-4">
                12-14
              </li>
              <li className="font-bold md:text-2xl text-lg text-center mb-4  m-4">
                15-17
              </li>
            </ul>
            </div>

            <h1 className="font-bold md:text-2xl text-lg pt-6 text-center mb-4">
              Horarios
            </h1>
            <p className="text-gray-800 md:text-xl text-base text-center">
              Martes a Viernes <span className="block">9am - 4pm</span>
            </p>
          </div>
        </div>
        <div className="text-center md:mt-6 md:text-2xl text-xl md:mb-10 mb-6">
          <BotonContactenos />
        </div>
      </section>
    </div>
  );
};
