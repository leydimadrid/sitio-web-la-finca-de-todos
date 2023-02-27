import { CardsTalleres } from "../components/CardsTalleres";
import { InfografiaPasaDia } from "../components/InfografiaPasaDia";
import { cardstalleres } from "../database/cardstalleres";
import asistirTalleres from "../assets/images/imagen-asistir-talleres.jpg";
import { BotonContactenos } from "../components/BotonContactenos";
import FontSizeChanger from "react-font-size-changer";
// import infografiaPasaDia from "../assets/images/infografia-pasa-dia.jpg";

export const TalleresPedagogicos = () => {
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
      <div id="contenedor">
        <section className="bg-white">
          <div>
            <h1 className="titulo font-bold md:text-2xl text-xl text-center md:pt-28 pt-4 text-gray-800 leading-relaxed" tabIndex={0}>
              Idea/Misión
            </h1>
            <hr className="linea-fucsia mx-auto mt-2" tabIndex={0}></hr>
          </div>
          <div className="grid justify-center my-auto pt-6 md:pb-10 pb-6 px-4 md:text-xl text-base font-medium">
            <p className="titulo text-gray-800 md:text-justify text-center max-w-5xl leading-relaxed" tabIndex={0}>
              Nuestros talleres son planificados por maestros con amor a la
              enseñanza que ayudarán a todos los estudiantes, con o sin
              discapacidad, a convertirse en adultos con conciencia. El contacto
              con la naturaleza despierta nuevas conexiones en el cerebro
              mientras que la variedad de temas y actividades refuerzan
              conceptos de ingenio, autoestima, responsabilidad social y
              cooperación.
            </p>
            <p className="titulo text-gray-800 max-w-5xl leading-relaxed mt-1 text-center" tabIndex={0}>
              Aquí en{" "}
              <span className="titulo text-blue-900 font-semibold leading-relaxed">
                La Finca de Todos
              </span>
              ,{" "}
              <span className="titulo text-blue-900 font-semibold text-2xl leading-relaxed">
                ¡
              </span>
              La diversión y la educación van mano a mano
              <span className="titulo text-blue-900 font-semibold text-2xl leading-relaxed">
                !
              </span>
            </p>{" "}
          </div>
        </section>
        <section className="fondoTalleres md:bg-cover bg-cover bg-no-repeat">
          <div>
            <h1 className="titulo font-bold md:text-2xl text-xl text-center pt-10 text-gray-800 leading-relaxed" tabIndex={0}>
              Categorías de talleres
            </h1>
            <hr className="linea-azul-titulo mx-auto mt-2"></hr>
          </div>
          <section className="md:py-6 px-4 mt-4 md:mb-4 mb-10">
            <div className="titulo flex flex-wrap place-content-center">
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
        {/* <img className="w-auto mx-auto" src={infografiaPasaDia} /> */}
        <section className="fondoAsistirTalleres md:bg-cover bg-auto bg-no-repeat">
          <div className="flex justify-center pt-10">
            <h1 className="titulo FondoFucsiaTalleres py-4 px-2 md:text-2xl text-xl font-bold text-white rounded-lg text-center md:w-96 mx-3 leading-relaxed" tabIndex={0}>
              ¿Cómo asistir a los talleres?
            </h1>
          </div>
          <div className="md:pt-14 md:flex flex-row items-center justify-center">
            <div className="md:max-w-2xl max-w-sm md:p-6 p-8 md:mr-28 lg:mr-1">
              <h1 className="titulo font-bold md:text-2xl text-lg text-left mb-4 leading-relaxed" tabIndex={0}>
                Para colegios y escuelas
              </h1>
              <p className="titulo text-gray-800 md:text-xl text-base leading-relaxed" tabIndex={0}>
                Cuéntanos sobre el currículum de tus clases y podemos integrarlo
                a nuestros talleres para enriquecer los conceptos que están
                aprendiendo tus estudiantes. Nuestra misión es ofrecer un día de
                esparcimiento y aprendizaje, tanto a los estudiantes como a los
                docentes que nos visiten.
              </p>
              <h1 className="titulo font-bold md:text-2xl text-lg pt-6 text-left mb-4 leading-relaxed" tabIndex={0}>
                Para particulares
              </h1>
              <p className="titulo text-gray-800 md:text-xl text-base leading-relaxed" tabIndex={0}>
                De martes a viernes contamos con programación interactiva y
                educacional, a la cual estás cordialmente invitado. Contáctenos
                para programar tu próxima experiencia. Estamos dispuestos para
                hacer modificaciones y ajustes de acuerdo con las necesidades de
                nuestros visitantes.
              </p>
            </div>
            <div>
              {" "}
              <img
                className="p-4"
                src={asistirTalleres}
                alt="5 Personas de diferentes cuturas reunidas en un huerto, aprendiendo sobre este"
                tabIndex={0}
              />
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <h1 className="md:text-2xl text-xl font-bold rounded-lg text-center w-96 px-3" tabIndex={0}>
              Cursos
            </h1>
          </div>
          <div className="md:flex flex-row items-center justify-center">
            <div className="max-w-xl md:p-6 p-8">
              <p className="titulo text-center text-gray-800 md:text-xl text-base leading-relaxed" tabIndex={0}>
                Nuestros talleres son aptos para las siguientes etapas de
                desarrollo académico:
              </p>
              <div className="flex justify-center">
                <ul>
                  <li className="titulo font-bold md:text-2xl text-lg pt-6 text-center mb-4 m-4 leading-relaxed" tabIndex={0}>
                    6 a 8
                  </li>
                  <li className="titulo font-bold md:text-2xl text-lg text-center mb-4  m-4 leading-relaxed" tabIndex={0}>
                    9 a 11
                  </li>
                </ul>

                <ul>
                  <li className="titulo font-bold md:text-2xl text-lg pt-6  text-center mb-4  m-4 leading-relaxed" tabIndex={0}>
                    12 a 14
                  </li>
                  <li className="titulo font-bold md:text-2xl text-lg text-center mb-4 m-4 leading-relaxed" tabIndex={0}>
                    15 a 17
                  </li>
                </ul>
              </div>

              <h1 className="titulo font-bold md:text-2xl text-lg pt-6 text-center mb-4 leading-relaxed" tabIndex={0}>
                Horarios
              </h1>
              <p className="titulo text-gray-800 md:text-xl text-base text-center leading-relaxed" tabIndex={0}>
                Martes a Viernes{" "}
                <span className="titulo block leading-relaxed" tabIndex={0}>9am - 4pm</span>
              </p>
              <p className="titulo text-center text-gray-800 md:text-xl text-base leading-relaxed mt-6" tabIndex={0}>
                Transportación y almuerzo disponible
              </p>
              <p className="titulo text-center text-gray-800 md:text-xl text-base leading-relaxed" tabIndex={0}>
                Contáctenos para programar una consulta previa.
              </p>
            </div>
          </div>
          <div className="titulo text-center md:mt-4 md:text-2xl text-xl md:mb-10 mb-6">
            <BotonContactenos />
          </div>
        </section>
      </div>
    </div>
  );
};
