import { BotonLaFinca } from "../components/BotonLaFinca";
import { VideoInicio } from "../components/VideoInicio";


export const Inicio = () => {
  return (
    <section className="bienvenidos md:bg-cover bg-cover bg-no-repeat">
        <VideoInicio/>
      <section className="">
        <h1 className="md:text-4xl text-3xl text-center text-blue-900 font-bold tracking-wide">BIENVENIDOS</h1>
        <div className="my-auto mx-auto pt-6 md:pb-10 pb-6 text-center md:text-xl text-base font-medium text-gray-800">
        <p>
          Is simply dummy text of the
          <span className="block">printing and typesetting.</span>
          <span className="block">Lorem Ipsum has been the </span>
          <span className="block">industry's standard dummy.</span> 
        </p>
        </div>
        <div className="text-center md:pb-20 pb-10">
        <BotonLaFinca/>
        </div>
      </section>
    </section>
  );
};
