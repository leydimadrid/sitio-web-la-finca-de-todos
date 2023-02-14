import videoinicio from "../assets/videos/videoinicio.mp4";

export const CardsLenguaDeSeñas = () => {
  return (
    <section className=" bg-white flex justify-center">
      <div className="max-w-5xl">
      <div className="fondoCardsActividades  items-center leading-normal text-center rounded-lg p-10">
        <h5 className="mb-2 md:text-xl text-base font-bold tracking-tight text-gray-800 p-4">
          Hora de cuentos en Lengua de Señas Colombiano
        </h5>
        <div className="flex justify-center">
          <p className="mb-2 md:text-xl text-sm tracking-tight text-gray-800 max-w-4xl text-justify pb-4">
            Únete todos los fines de semana a nuestra Hora de Cuentos en Lengua
            de Señas Colombiana (LSC). Descubre este hermoso idioma y ayuda a tu
            hijo con el desarrollo del lenguaje. Presentada por una persona
            sorda o un intérprete, acompañado en voz alta.{" "}
          </p>
        </div>
        <div className="flex justify-center">
        <div className=" shadow-md max-w-4xl">
          <video
            controls
            muted
            autoPlay
            loop
            md:width="75%"
            className="rounded-lg"
          >
            <source src={videoinicio} type="video/mp4" />
          </video>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};
