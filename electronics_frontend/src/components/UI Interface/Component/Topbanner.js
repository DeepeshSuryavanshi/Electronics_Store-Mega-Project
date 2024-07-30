// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../../services/FeatchNodeServices";
export default function Mainslider() {
  var settings = {
    dots: true,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  var data = [
    "a1.webp",
    "a2.webp",
    "a3.webp",
    "a4.webp",
    "a5.webp",
    "a6.webp",
    "a7.webp",
  ];

  const showslider = () => {
    return data.map((item) => {
      return (
        <div>
          <img src={`${serverURL}/images/Main%20banner/${item}`} width="100%" />
        </div>
      );
    });
  };

  return (
    <div styles={{ width: 80 }}>
      <Slider {...settings}>{showslider()}</Slider>
    </div>
  );
}
