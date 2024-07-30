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
export default function AppleProduct(props) {
 
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
  
  var settings = {
    arrows: matches_md||matches_sm? false:true,
    dots: false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow:matches_md?2 :matches_sm?1 :4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
 var data=[
    {Image:'a1.webp'},
    {Image:'a2.webp'},
    {Image:'a3.webp'},
    {Image:'a4.webp'},
    {Image:'a5.webp'},
]
  const addSlider = () => {
    return data.map((item) => {
      return (
        <div style={{ width: "100%" }}>
        <div
          style={{
            width: "95%",
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
            src={`${serverURL}/images/AppleAtCroma/${item.Image}`}
            style={{ width: "100%" ,borderRadius:'11px',justifyContent:'center'}}
          />
        </div>
      </div>
      );
    });
  };

  return (
    <div style={{ width: "90%" }}>
       <h2 style={{color:'#fff',fontWeight:500}} >{props.title}</h2>
      <div style={{display:'flex',width:'99%',marginBottom:10}}>
        <div style={{margin:7}} >
        <img src={`${serverURL}/images/AppleAtCroma/top1.webp`} style={{ width: "100%" ,borderRadius:'11px',justifyContent:'center'}} />
        </div>
        <div style={{margin:7}}>
        <img src={`${serverURL}/images/AppleAtCroma/top2.webp`} style={{ width: "100%" ,borderRadius:'11px',justifyContent:'center'}} />
        </div>
      </div>
      <Slider {...settings}>{addSlider()}</Slider>
    </div>
  );
}
