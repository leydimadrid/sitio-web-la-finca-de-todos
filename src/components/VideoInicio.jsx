import videoinicio from "../assets/videos/videoinicio.mp4";

export const VideoInicio = () => {
  return (
    <>
    <section className="pt-20 md:px-40 px-5 md:py-6">
    <div className="flex justify-center md:mb-4 mb-10 shadow-md">    
    <video controls muted autoPlay loop md:width="75%">
          <source src={videoinicio} type="video/mp4" />
        </video>
    </div>
    </section>
    </>
  );
};
