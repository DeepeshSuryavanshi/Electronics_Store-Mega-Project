// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL, getData } from "../../../services/FeatchNodeServices";
import useMediaQuery from "@mui/material/useMediaQuery";
//import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Rating, Checkbox, makeStyles, Hidden, Box } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
// categroy banner
export default function ProductComponent(props) {
  var data = props.Data
  const navigate=useNavigate()
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
  var settings = {
    arrows: matches_md || matches_sm ? false : true,
    dots: matches_md || matches_sm ? false : false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow: matches_md ? 2 : matches_sm ? 1 : 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
  
  // navigate function 
  const handleClick=(item)=>{
  //  alert(item.productname)
   navigate('/purchase',{state:{product:item}})
  }

  const productSlider = () => {
    return data.map((item) => {
      return (
        <div onClick={()=>handleClick(item)} style={{ width: "100%"}} >
          <div
            style={{
              width: "90%",
              margin:10, 
              background: "#121212",
              // padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              cursor:'pointer',
            }}
          >
            <div style={{ color: "#fff", marginLeft: "auto" }}>
              <Checkbox
                icon={<FavoriteBorder style={{ color: "#fff" }} />}
                checkedIcon={<Favorite style={{ color: "#fff" }} />}
              />
            </div>
            
            <img
              src={`${serverURL}/images/${item.image.split(",")[0]}`}
              style={{ width: "80%",marginTop:0 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                width: "80%",
                marginTop:0,
              }}
            >
              <div
                style={{ color: "#fff", fontWeight: 600,fontSize:16,height:50}}
              >
                <p style={{
                  marginTop:0,
                  WebkitLineClamp:2,
                  WebkitBoxOrient:'vertical',
                  overflow:'hidden',
                  display:'-webkit-Box'
                }}>
                {item.brandname} {item.productname} {item.modelno}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop:0,
                }}
              >
                <div
                  style={{ color: "#fff", fontWeight: 400, fontSize:matches_sm?12:16}}
                >
                  <s>&#8377;{item.price}</s>
                </div>
                <div
                  style={{ color: "#fff", fontWeight: 600, fontSize:matches_sm?14:18 }}
                >
                  &#8377;{item.offerprice}
                </div>
              </div>
              <Rating
                style={{ margintop: 2,
                         margibottom: 5,
                         fontSize:25,
                        }}
                name="simple-controlled"
                value={item.rating}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ width: "80%" }}>
      <h2 style={{ color: "#fff", fontWeight: 500 }}>{props.title}</h2>
      <Slider {...settings}>{productSlider()}</Slider>
    </div>
  );
}
