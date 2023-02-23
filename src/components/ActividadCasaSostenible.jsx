import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import imagen1 from "../assets/images/actividades-casa-sostenible.jpg";
import imagen2 from "../assets/images/actividades-casa-sostenible-2.jpg";

export const ActividadCasaSostenible = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <section className="p-4">
        <div className="bg-white lg:max-w-3xl">
          <div
            onClick={handleClick}
            className="fondoCardsActividades rounded-lg shadow-lg lg:max-w-3xl flex flex-col items-center md:flex-row "
          >
            <img
              className="lg:w-96 w-64 lg:rounded-l-lg rounded-t-lg"
              src={imagen1}
              alt="Casa sostenible con muchas plantas hermosas"
            />
            <div className="items-center p-4 leading-normal lg:w-96 w-64 text-center">
              <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-800 leading-relaxed">
                Casa sostenible y accesible
              </h5>
            </div>
          </div>
        </div>
      </section>
        <section className="p-4">
          <div className="bg-white lg:max-w-3xl">
            <div onClick={handleClick} className="fondoCardsActividades rounded-lg shadow-lg md:max-w-3xl flex flex-col items-center md:flex-row ">
              <div className="items-center p-4 leading-normal md:w-96 w-64 text-center">
                <p className="mb-2 font-normal md:text-xl text-base tracking-tight text-gray-800 leading-relaxed text-left">
                  Explora una casa 100% accesible y hecha con principios de
                  mayor sostenibilidad. Aprende cómo reciclamos el agua de
                  lluvia, de qué están hechas las paredes y como prendemos el
                  wifi con tecnología para ayudar a nuestro planeta.
                </p>
              </div>
              <img
                className="lg:w-96 w-64 lg:rounded-r-lg rounded-b-lg"
                src={imagen2}
                alt="Persona con una cámara, tomando una fotografía a un panel solar"
              />
            </div>
          </div>
        </section>
    </ReactCardFlip>
  );
};
