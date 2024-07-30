// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";
import { serverURL, getData } from "../../../services/FeatchNodeServices";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
// categroy banner
export default function TopCategories(props) {
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));

  var settings = {
    arrows: matches_md || matches_sm ? false : true,
    dots: false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow: matches_md ? 2 : matches_sm ? 1 : 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
  const [Categories, setCategories] = useState("");

  // get Data
  const [Category, setCategory] = useState([]);
  var featchAllCateegory = async () => {
    var responce = await getData("topcategories/Dispaly_all_category");
    setCategory(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);

  const addSlider = () => {
    return Category.map((item) => {
      return (
        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "92%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              borderRadius:'10px',
              border: '2px solid #353535'
            }}
          >
            <img
              src={`${serverURL}/images/TopCategories/${item.topcategoriesimage}`}
              style={{ width: "100%" ,borderRadius:'11px',justifyContent:'center'}}
            />
            <div>
               <h3 style={{color:'#fff'}} >{item.topcategoriesname}</h3>
                
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ width: "90%" }}>
      <h2 style={{color:'#FFF',fontWeight:500}}>{props.title}</h2>
      <Slider {...settings}>{addSlider()}</Slider>
    </div>
  );
}
