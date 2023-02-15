export const CardsFinDeSemanaPosterior = ({imagen, parrafo, alt}) => {


  return (
    <section className="p-4">
      <div className="bg-white">
      <div  className="fondoCardsActividades flex items-center rounded-lg shadow-lg md:max-w-4xl">
      <div className="items-center p-4 leading-normal md:w-96 w-64 text-center">
          <p className="mb-2 font-normal md:text-xl text-base tracking-tight text-gray-800 leading-relaxed text-left">
            {parrafo}
          </p>
        </div>
      <img 
          className="lg:w-96 w-64 md:rounded-r-lg rounded-r-lg"
          src={imagen}
          alt={alt}
        />
        
      </div>
      </div>
    </section>
  );
};
