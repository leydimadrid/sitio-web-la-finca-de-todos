import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import { useTranslation } from 'react-i18next';

export const Slider = () => {
  const [t] = useTranslation('global');
  return (
    <section className="flex justify-center">
    <div className="slider pt-1 mt-10 md:w-3/5 md:h-3/5 m-4 rounded-lg" >
          <ul>
            <li>
              {" "}
              <img src={img1} alt={t('aboutUsSliderAltText.img-1')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img2} alt={t('aboutUsSliderAltText.img-2')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img3} alt={t('aboutUsSliderAltText.img-3')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img4} alt={t('aboutUsSliderAltText.img-4')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img5} alt={t('aboutUsSliderAltText.img-5')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img6} alt={t('aboutUsSliderAltText.img-6')} tabIndex={0} className="rounded-lg"/>
            </li>
            <li>
              {" "}
              <img src={img7} alt={t('aboutUsSliderAltText.img-7')} tabIndex={0} className="rounded-lg"/>
            </li>
          </ul>
        </div>
        </section>
  )
}
