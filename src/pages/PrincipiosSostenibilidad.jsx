

export const PrincipiosSostenibilidad = ({ imagen, titulo, alt }) => {
  return (
    <section className="mt-6 max-w-sm ml-8">
    <div className="cardSostenibilidad max-w-sm rounded shadow-lg bg-white">
    <div className="px-6 py-6 flex justify-center">
      <img className="rounded-full shadow-lg" src={imagen} alt={alt}/>
      </div>
      <div className="px-6 py-2 text-center">
        <h1 className="font-bold text-lg text-gray-800 leading-normal">{titulo}</h1>
      </div>
    </div>
    </section>
  );
};
