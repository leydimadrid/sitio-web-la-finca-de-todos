import { cardsfindesemana } from "../database/cardsfindesemana";
import { CardsFinDeSemana } from "../components/CardsFinDeSemana";

export const FinDeSemana = () => {
  return (
    <>
      <section className="fondoFinDeSemana md:bg-cover bg-cover bg-no-repeat">
        <section>
          <div className="flex justify-center">
            <h1 className="font-bold max-w-lg md:text-2xl text-xl text-center md:pt-36 pt-28 text-gray-800">
              Actividades fin de semana
            </h1>
          </div>
          <hr className="linea-fucsia mx-auto mt-2"></hr>
        </section>
        <section className="md:py-6 mt-4 md:mb-4 mb-10">
          <div className="flex flex-wrap place-content-center">
            {cardsfindesemana.map((item) => (
              <CardsFinDeSemana
                key={item.id}
                imagen={item.imagen}
                titulo={item.titulo}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
