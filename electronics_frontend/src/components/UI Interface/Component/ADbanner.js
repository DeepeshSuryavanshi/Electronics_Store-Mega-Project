import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../services/FeatchNodeServices";
// main function 
export default function ADbanner()
{
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
                    
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:matches?false:true
   };
  var data=["banner1.webp","banner2.webp","banner1.webp","banner2.webp","banner1.webp","banner2.webp"]
  const AddSlider=()=>{
    return data.map((item)=>{
    return(<div style={{width:'100%'}}>
        <img src={`${serverURL}/images/AD%20banner/${item}`}  style={{width:'98%',margin:'5px'}}/>
    </div>)
    })
  }

  return(<div style={{width:'90%'}}>
  <Slider {...settings}>
    {AddSlider()}    
  </Slider>
  </div>)
}