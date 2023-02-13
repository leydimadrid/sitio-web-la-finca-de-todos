import videoinicio from "../assets/videos/videoinicio.mp4";

export const CardsLenguaDeSeñas = () => {


  return (
    <section className="p-4 fondoCardsActividades">
      <div className="items-center p-4 leading-normal md:w-64 w-40 text-center">
          <p className="mb-2 md:text-xl text-md font-bold tracking-tight text-gray-800">
          Únete todos los fines de semana a nuestra Hora de Cuentos en Lengua de Señas Colombiana (LSC). Descubre este hermoso idioma y ayuda a tu hijo con el desarrollo del lenguaje. Presentada por una persona sorda o un intérprete, acompañado en voz alta.
          </p>
        </div>
      
      
      <div className="flex justify-center md:mb-4 mb-10 shadow-md">    
    <video controls muted autoPlay loop md:width="75%">
          <source src={videoinicio} type="video/mp4" />
        </video>
    </div>
        
    </section>
  );
};
