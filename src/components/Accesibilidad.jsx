export const Accesibilidad = ({ imagen, titulo, alt }) => {
  return (
    <section className="mt-6 max-w-sm p-4">
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imagen} alt={alt} />
      <div className="px-2 py-4 text-center">
        <h1 className="font-bold text-lg text-blue-900 leading-normal">{titulo}</h1>
      </div>
    </div>
    </section>
  );
};
