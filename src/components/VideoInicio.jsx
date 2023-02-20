import videoinicio from "../assets/videos/videoinicio.mp4";

export const VideoInicio = () => {
  return (
    <>
      <section className="pt-20 md:px-40 px-5 md:py-6">
        <div className="flex justify-center md:mb-4 mb-10 shadow-md">
          <video controls autoPlay loop md:width="75%" alt="Hola">
            <source src={videoinicio} type="video/mp4" />
          </video>
        </div>
        <p className="text-sm md:text-md lg:text-md">
          <span className="block">Video compuesto de los siguientes clips:{" "}</span>
          <span className="font-semibold"> 1- </span> Mariposa sobre una hoja
          moviendo sus alas. <span className="font-semibold"> 2- </span> Niña
          sonriente caminando entre la naturaleza con la asistencia de un
          andador. <span className="font-semibold"> 3- </span> Paisaje de montañas
          colombianas. <span className="font-semibold"> 4- </span> Un par de
          abuelos abrazan felizmente a su nieto sentados en el césped.{" "}
          <span className="font-semibold"> 5- </span> Tres cabras curiosas se
          acercan a la cámara. <span className="font-semibold">6-</span> Una madre besa a su hijo en la mejilla que está
          sonriendo en su silla de ruedas eléctrica.{" "}
          <span className="font-semibold"> 7- </span>Logo de La Finca De Todos.
        </p>
      </section>
    </>
  );
};
