/* eslint-disable react/prop-types */
export const CardsFinDeSemana = ({imagen, titulo, alt}) => {

  return (
    <section className="p-4">
      <div className="bg-white">
      <div className="fondoCardsActividades flex items-center rounded-lg shadow-lg lg:max-w-4xl ">
      <img 
          className="lg:w-96 w-52 md:rounded-l-lg rounded-l-lg"
          src={imagen}
          alt={alt}
        />
        <div className="items-center p-4 leading-normal lg:w-96 w-52 text-center">
          <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-800 leading-relaxed">
            {titulo}
          </h5>
        </div>
      </div>
      </div>
    </section>



  
  );
};
