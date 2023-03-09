/* eslint-disable react/no-unknown-property */
import videoinicio from "../assets/videos/videoinicio.mp4";

export const VideoInicio = () => {
  return (
    <>
      <section className="pt-10 md:px-40 px-5 md:pt-6">
        <div className="flex justify-center md:mb-4 mb-4 shadow-md">
          <video controls md:width="75%">
            <source src={videoinicio} type="video/mp4" />
            <source src={videoinicio} type="video/webm" />
          </video>
        </div>
      </section>
    </>
  );
};
