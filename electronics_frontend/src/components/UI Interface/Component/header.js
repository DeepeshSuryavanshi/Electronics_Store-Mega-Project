import AppBar from "@mui/material/AppBar";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ShoppingCart } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { getData } from "../../../services/FeatchNodeServices";

import Button from '@mui/material/Button';
// Logo
import SerchComponent from "./Serchcomponent";

export default function Header() {
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
  //menu icon system
  var featchAllCateegory = async () => {
    var responce = await getData("Category/Dispaly_all_category");
    setCategories(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [Categories, setCategories] = useState([]);
  const Categorymenu = () => {
    return Categories.map((item) => {
      return (
        <MenuItem
          style={{ color: "#000" }}
          onClick={handleClick}
          value={item.Categoryid}
        >
          {item.Categoryname}
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
            height: 70,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Toolbar>
            {matches_sm ? (
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  }
                  width={130}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <img
                  src={
                    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                  }
                  width={150}
                />
              </div>
            )}
            {matches_sm ? (
              <></>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "right",
                  backgroundColor: "",
                }}
              >
                 <Button variant="outlined">Home</Button>
                 <Button variant="outlined">MY Acoount</Button>
                 <Button variant="outlined">Cart</Button>
              </div>
            )}
            {matches_sm ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "30%",
                }}
              >
                <AccountCircle style={{ margin: 10, fontSize: 30 }} />
                <ShoppingCart style={{ margin: 10, fontSize: 30 }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "13%",
                }}
              >
                <AccountCircle style={{ margin: 15, fontSize: 27 }} />
                <ShoppingCart style={{ margin: 15, fontSize: 27 }} />
              </div>
            )}
          </Toolbar>
        </AppBar>

       
      </Box>
    </div>
  );
} // main end
