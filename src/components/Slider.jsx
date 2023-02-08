import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

export const Slider = () => {
  return (
    <section className="flex justify-center">
    <div className="slider pt-1 mt-10 md:w-3/5 md:h-3/5 m-4">
          <ul>
            <li>
              {" "}
              <img src={img1} alt="" />
            </li>
            <li>
              {" "}
              <img src={img2} alt="" />
            </li>
            <li>
              {" "}
              <img src={img3} alt="" />
            </li>
            <li>
              {" "}
              <img src={img4} alt="" />
            </li>
            <li>
              {" "}
              <img src={img5} alt="" />
            </li>
            <li>
              {" "}
              <img src={img6} alt="" />
            </li>
          </ul>
        </div>
        </section>
  )
}
