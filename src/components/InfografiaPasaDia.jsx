import infografiaPasaDia from "../assets/images/infografia-pasa-dia.jpg"


export const InfografiaPasaDia = () => {
  return (
    <section>
       {/* Inicio Título infografía */}
       <div className="p-4">
            <h1 className="font-bold md:text-6xl text-3xl text-center md:pt-24 text-pink-600">
              Pasadía para niños
            </h1>
            <h1 className="block font-bold md:text-6xl text-3xl text-center text-pink-600">
              de <span className="text-blue-900">4to de primaria</span>
            </h1>
            <div className="flex justify-center px-4 ">
            <p className="text-gray-800 font-normal lg:text-xl text-sm max-w-4xl text-justify leading-relaxed">
            Un pequeño encuentro con el descanso y la diversión.
            </p>
            </div>
            <hr className="linea-azul h-1 max-w-xl md:mx-auto mx-auto mt-2"></hr>
          </div>
          {/* Final Título infografía */}
    </section>
  )
}
