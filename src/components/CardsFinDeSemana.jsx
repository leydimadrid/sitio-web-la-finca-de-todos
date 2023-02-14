export const CardsFinDeSemana = ({imagen, titulo, alt}) => {
  const handleClick = () => {
    
  };


  return (
    <section className="p-4">
      <div className="bg-white">
      <div  className="fondoCardsActividades flex items-center rounded-lg shadow-lg md:max-w-xl">
      <img 
      onClick={handleClick}
          className="md:w-64 w-40 md:rounded-l-lg rounded-l-lg"
          src={imagen}
          alt={alt}
        />
        <div className="items-center p-4 leading-normal md:w-64 w-40 text-center">
          <h5 className="mb-2 md:text-xl text-base font-bold tracking-tight text-gray-800">
            {titulo}
          </h5>
        </div>
      </div>
      </div>
    </section>
  );
};
