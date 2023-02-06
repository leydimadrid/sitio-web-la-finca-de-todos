export const CardsFinDeSemana = ({imagen, titulo, alt}) => {
  return (
    <section className="p-4">
      <div className="fondoCardsActividades flex items-center rounded-lg shadow-lg md:max-w-xl">
      <img
          className="rounded-t-lg md:w-64 w-60 md:rounded-l-lg"
          src={imagen}
          alt={alt}
        />
        <div className="items-center p-4 leading-normal md:w-64 w-64 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
            {titulo}
          </h5>
        </div>
      </div>
    </section>
  );
};
