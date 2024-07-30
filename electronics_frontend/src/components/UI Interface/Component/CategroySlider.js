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
export default function CategorySlider() {
  // get Data
  const [Category, setCategory] = useState([]);
  var featchAllCateegory = async () => {
    var responce = await getData("Category/Dispaly_all_category");
    setCategory(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
  var settings = {
    arrows: matches_md||matches_sm? false:true,
    dots: false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow:matches_md?3 :matches_sm?2 :8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  const categorySlider = () => {
    return Category.map((item) => {
      return (
        <div style={{width:'100%'}}>
       <div style={{ width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'80%',height:'80%',borderRadius:'40%'}}>
        <img src={`${serverURL}/images/Category%20slider/${item.image}`}  style={{width:'100%'}}/>
        </div> 
       <div style={{color:'#fff',display:'flex'}}>{item.Categoryname}</div>
      </div>
    </div>
      );
    });
  };

  return (
    <div style={{ width: "90%" }}>
      <Slider {...settings}>{categorySlider()}</Slider>
    </div>
  );
}
