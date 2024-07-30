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
export default function HeightLight(props) {
 
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
  
  var settings = {
    arrows: matches_md||matches_sm? false:true,
    dots: false,
    color: "#ffff",
    infinite: true,
    speed: 500,
    slidesToShow:matches_md?2 :matches_sm?1 :3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };
 var data=[
    {Image:'b1.webp'},
    {Image:'b2.webp'},
    {Image:'b3.webp'},
    {Image:'b4.webp'},
    {Image:'b5.webp'},
    {Image:'b6.webp'},
    {Image:'b7.webp'},
]

var sata=[
  {Image:'p1.webp'},
  {Image:'p2.webp'},
  {Image:'p3.webp'},
  {Image:'p4.webp'},
  {Image:'p5.webp'},
  {Image:'p6.webp'},
  {Image:'p7.webp'},
  {Image:'p8.webp'},
]

  const addSlider = () => {
    return data.map((item) => {
      return (
        <div style={{width:'100%'}}>
       <div style={{ width:'95%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',borderRadius:100}}>
        {/* <div style={{width:'95%',height:'100%',borderRadius:50}}> */}
        <img src={`${serverURL}/images/higntlight%20Banner/${item.Image}`}  style={{width:'100%'}}/>
        {/* </div> */}
       </div>
    </div>
      );
    });
  };

  const addSlider2 = () => {
    return sata.map((item) => {
      return (
        <div style={{width:'100%'}}>
       <div style={{ width:'95%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',borderRadius:100}}>
        {/* <div style={{width:'95%',height:'100%',borderRadius:50}}> */}
        <img src={`${serverURL}/images/higntlight%20Banner/${item.Image}`}  style={{width:'100%'}}/>
        {/* </div> */}
       </div>
    </div>
      );
    });
  };
  return (
    <div style={{ width: "90%" }}>
      <h2 style={{color:'#FFF',fontWeight:500}}>{props.title}</h2>
      <Slider {...settings}>{addSlider()}</Slider>
      <Slider {...settings}>{addSlider2()}</Slider>
    </div>
  );
}
