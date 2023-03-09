/* eslint-disable react/no-unknown-property */
import videofinca from "../assets/videos/video-finca-3d.mp4";

export const VideoFinca = () => {
  return (
    <section className="md:px-40 px-5 md:mt-10 mt-10">
    <div className="flex justify-center md:mb-2 mb-2 shadow-md">    
    <video controls md:width="75%">
          <source src={videofinca} />
        </video>
    </div>
    </section>
  );
};
