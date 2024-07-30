import React from "react";
import { AppBar, Box, Toolbar, Menu, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  postData,
  getData,
  serverURL,
} from "../../../services/FeatchNodeServices";
// Logo

export default function MenuComponent() {
  const [Categories, setcategories] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [product, setproduct] = useState([]);

  var featchAllCateegory = async () => {
    var responce = await getData("Category/Dispaly_all_category");
    setcategories(responce.data);
  };
  var featchAllproduct = async (Categoryid) => {
    var responce = await postData("useinter/Display_all_Products_for_menu",{categoryid:Categoryid});
    setproduct(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    featchAllproduct(event.target.value)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Categorymenu = () => {
    return Categories.map((item) => {
      return (
        <MenuItem  style={{color:'#fff'}} onClick={handleClick} value={item.Categoryid} >
          {item.Categoryname}
        </MenuItem>
      );
    });
  };

 
  const showmenuitem = () => {
    return product.map((item) => {
      return (
        <MenuItem onClick={handleClick}>
          {item.productname}
        </MenuItem>
      );
    });
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            display: "flex",
            width: "100%",
            height: 30,
            justifyContent: "center",
            backgroundColor: '#000',
          }}
        >
          <Toolbar style={{display:'flex',alignItems:'center'}}>
            {/* <p style={{fontSize:18,fontWeight:600}}>Menu</p> */}

            {Categorymenu()}
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
             {showmenuitem()}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
} // main end
