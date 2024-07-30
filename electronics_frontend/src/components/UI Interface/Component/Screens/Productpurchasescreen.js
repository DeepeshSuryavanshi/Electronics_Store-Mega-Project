import Header2 from "../header2";
import ImageVerticalSlider from "../imageverticalslider";
import ProductDescription from "../ProductDescription";

//style
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./Projectcss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProductPurchasescreen(Props) {
 var location=useLocation();
//  console.log("data:",location);
 var p=location.state.product
 const style=useStyles();
 const theme = useTheme();
 const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
 const [Product,setProduct]=useState(p)
 const [refresh,setRefresh]=useState(false)
//  console.log("product psc",p);
  return (
    <div className={style.ProductPurchaseScreen_Root}  style={{  color:'#fff'}}>
     <div style={{position: 'sticky', top: 0, zIndex: 2}} >
       <Header2 />
      </div>
      {/* main screen start */}
      <div className={style.ProductScreen_Main_Box} style={{ flexDirection: matches_sm ? 'column' : 'row' }}>
         <div className={style.ProductPurchaseScreen_Left_Box} style={{ width: matches_sm ? '100%' : '50%' }}>
            <div style={{ width: '100%', display: matches_sm ? 'flex' : '', justifyContent: matches_sm ? 'center' : '' }}>
                <ImageVerticalSlider  product={Product} />
             </div>
         </div>
         
     {/* productdescription */}
     <div className={style.ProductPurchaseScreen_Right_Box} style={{ width: matches_sm ? '100%' : '50%', display: matches_sm ? 'flex' : '', justifyContent: matches_sm ? 'center' : '' }}>
          <ProductDescription setRefresh={setRefresh} refresh={refresh} setProduct={setProduct} product={Product} />
    </div>
      

      </div>
    </div>
  );
}
