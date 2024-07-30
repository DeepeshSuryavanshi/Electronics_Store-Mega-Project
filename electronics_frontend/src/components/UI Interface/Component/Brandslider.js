// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from '@mui/material/useMediaQuery';
import { serverURL, getData } from "../../../services/FeatchNodeServices";
import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
// import { useMediaQuery } from "@mui/material";
// categroy banner
export default function BrandSlider(props) {
  // get Data
  const [brand, setbrand] = useState([]);
  var featchAllCateegory = async () => {
    var responce = await getData("Brand/Display_all_Brands");
    setbrand(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
  var settings = {
    arrows: matches_md||matches_sm? false : true,
    dots: false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow:matches_md?3 :matches_sm?2 :8,
    slidesToScroll: 1,
    autoplay:matches_md||matches_sm?true: false,
    autoplaySpeed: 2000,
  };

  const BrandSlider = () => {
    return brand.map((item) => {
      return (
        <div style={{width:'100%'}}>
       <div style={{ width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'80%',height:'80%',borderRadius:'40%'}}>
        <img src={`${serverURL}/images/Brands/${item.logo}`}  style={{width:'100%'}}/>
        </div> 
        <div style={{color:'#fff',display:'flex'}}>{item.brandname}</div>
        </div>
    </div>
      );
    });
  };

  return (
    <div style={{ width: "90%" }}>
      <h2 style={{color:'#FFF',fontWeight:500}}>{props.title}</h2>
      <Slider {...settings}>{BrandSlider()}</Slider>
    </div>
  );
}
