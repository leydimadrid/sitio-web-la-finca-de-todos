import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";

export const Slider = () => {
  return (
    <section className="flex justify-center">
    <div className="slider pt-1 mt-10 md:w-3/5 md:h-3/5 m-4">
          <ul>
            <li>
              {" "}
              <img src={img1} alt="Niña diciendo te amo en Lengua de Señas Colombiano" />
            </li>
            <li>
              {" "}
              <img src={img2} alt="Paisaje de montañas y un rio en Colombia " />
            </li>
            <li>
              {" "}
              <img src={img3} alt="Un par de abuelos caminando felizmente en medio de la naturaleza con su nieto tomandosen de la mano" />
            </li>
            <li>
              {" "}
              <img src={img4} alt="Niños y niñas en un césped, sonriendo para tomarsen una foto" />
            </li>
            <li>
              {" "}
              <img src={img5} alt="Abuela abrazando a su nieta y a un perro felices" />
            </li>
            <li>
              {" "}
              <img src={img6} alt="Niña afrodescendiente sonriendo con un huevo de gallina en su mano" />
            </li>
            <li>
              {" "}
              <img src={img7} alt="Niño dando de comer en su mano a una gallina" />
            </li>
          </ul>
        </div>
        </section>
  )
}
