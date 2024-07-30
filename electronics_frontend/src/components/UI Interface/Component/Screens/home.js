// Home screen
import { useStyles } from "./Projectcss";
import Header from "../header";
import Header2 from "../header2";
import Mainslider from "../Topbanner";
import ADbanner from "../ADbanner";
import CategorySlider from "../CategroySlider";
import BrandSlider from "../Brandslider";
import ProductComponent from "../Productcard";
import HeightLight from "../Hightlightcards";
import TopCategories from "../Topcategories";
import PhotoProductcard from "../photoproductcard";
import AppleProduct from "../Apple";
import Footer from "./footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuComponent from "../menucompoent";
import {
  getData,
  serverURL,
  postData,
} from "../../../../services/FeatchNodeServices";
import { useEffect, useState } from "react";

export default function Home() {
  const style = useStyles();
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));

  const [product, setproduct] = useState([]);

  var featchAllProduct = async () => {
    var responce = await getData("productdetails/Display_productdetails");
    setproduct(responce.data);
  };
  useEffect(function () {
    featchAllProduct();
  }, []);

  return (
    <div className={style.home_root}>
      <div >
         <Header2 />
      </div>
      <div>{matches_sm ? <></> : <MenuComponent />}</div>
      
      <div style={{ backgroundColor: "" }}>
        <Mainslider />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ADbanner />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          background: "",
        }}
      >
        <CategorySlider />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50%",
          backgroundColor: "",
          justifyContent: "center",
        }}
      >
        <ProductComponent title={"Deals Of The Day"} Data={product} />
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <HeightLight title={"HightLight"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BrandSlider title={"Top Brands"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TopCategories title={"Top Categories"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PhotoProductcard title={"Festive Deals"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <AppleProduct title={"Apple At Croma"} />
      </div>
      <Footer />
    </div>
  );
}
