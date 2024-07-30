// Dashbord 
import React from "react";
//router and routes
import {Routes, Route} from "react-router-dom"
// component import
import Category from "../components/Dashboard component/Category";
import DisplayAllCategory from "../components/Dashboard component/DisplayAllCategroy";
import Brands from "../components/Dashboard component/Brand";
import DisplayAllBrands from "../components/Dashboard component/DisplayAllBrands";
import Products from "../components/Dashboard component/product";
import DisplayAllProducts from "../components/Dashboard component/DisplayAllProducts";
import Productdetails from "../components/Dashboard component/productdetails";
import Banner from "../components/Dashboard component/banner";
import DisplayAllProductsdetails from "../components/Dashboard component/DisplayAllProductDetails";
import CategoryBanner from "../components/Dashboard component/categorybanner";
import TopCategory from "../components/Dashboard component/top categroies";
import DisplayAlltopCategory from "./Dashboard component/DisplaytopCategories";
// 
import { Button, Grid,List,ListItem,ListItemButton,TextField } from "@mui/material";
import { useState,useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Navigation, json, useNavigate } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { serverURL } from '../services/FeatchNodeServices';
// icons
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PermMediaIcon from '@mui/icons-material/PermMedia';
 var usestyle=makeStyles({
  main:{
    display:'flex',
    width: "100vw",
    height: "100vh",
  },
  div1:{
    display:'flex',
    height:'100%',
    width:'260px'
  },
  div2:{
    display:'rap',
    // justifyContent:'center',
    // alignItems:'center',
    height:'100%',
    width:'100%'
    
  },
  toolbar:{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#F5F5F5',
    height:'100%',
    width:'260px',
    borderColor:'black',
    border:'2px'
  },
  navbar:{
    display:'flex',
    alignItems:'center',
    height:'74px',
    width:'100%'
  },
  function:{
    display:'flex',
    height:'100%',
    widht:'100px',
  }

 });
 // list item
 const listItems = [
  {
      icon: <LeaderboardIcon />,
      title: 'Dashboard',
      link: ''
  },
  {
      icon: <CategoryIcon />,
      title: 'Categories',
      link:'/Dashboard/Display_all_Category'
  },
  {
    icon: <CategoryIcon />,
    title: 'Top Categories',
    link:'/Dashboard/DisplayAlltopCategory'
  },
  {
      icon: <StoreIcon />,
      title: 'Brands',
      link: '/Dashboard/Display_all_Brands'
  },
  {
      icon: <ShoppingCartIcon />,
      title: 'Products',
      link: '/Dashboard/Display_all_Products'
  },
  {
      icon: <ShoppingCartIcon />,
      title: 'Specification',
      link: '/Dashboard/Display_all_Productdetails'
  },
  {
      icon: <PanoramaIcon />,
      title: 'Banners',
      link: '/Dashboard/Banner'
  },
  {
      icon: <PermMediaIcon />,
      title: 'Category Banners',
      link: '/Dashboard/categorybanner'
 }
]   

 // main function 
 export default function Dashbord(){
    var admin=JSON.parse(localStorage.getItem('ADMIN'))
    var navigate=useNavigate();
   var styles=usestyle();
  return(
    <div className={styles.main}>  
      <div className={styles.div1}>
     <Grid container spacing={0} className={styles.toolbar}>
      <Grid  style={{display:'flex',justifyContent:'center',height:'60px',width:'170px',
      backgroundColor:'#E0E0E0',marginTop:'15px',borderRadius:'20px'}} >
        <div style={{display:'flex',height:'100%',width:'100%',alignItems:'center',fontSize:'14px',fontWeight:'800'}} >
          <img src={`${serverURL}/images/Admin Pic/${admin.image}`}
               style={{display:'flex',height:'50px',width:'50px',borderRadius:'50%',marginLeft:'3%',marginRight:'3%'}}/>
               <span>{admin.username}</span>
        </div>
              </Grid>
              
             
      <Grid style={{display:'flex',marginTop:0}} >
                            <List 
                                component="nav">
                                {listItems.map((item, i) => {
                                    return (
                                        <ListItemButton  onClick={()=>navigate(item.link)}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText style={{ opacity: '80%' }}>{item.title}</ListItemText>
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid styles={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button  variant="contained" style={{backgroundColor:'#78909C',width:'-1px',height:'25px'}}>
                  <p style={{fontSize:'10px'}} >Log Out</p>
                 </Button>
              </Grid>
     </Grid>
     </div>
     <div className={styles.div2}>
      <Grid className={styles.navbar}>
         <Grid xs={10} style={{display:'flex',alignItems:'center',width:'80%',marginLeft:'10px'}} >
          <TextField label="search" fullWidth/>
         </Grid>
         <Grid xs={2} style={{display:'flex',spacing:'10px',alignItems:'center',padding:'30px'}} >
         <Badge badgeContent={10} color="success" style={{ marginRight: '8%' }}>
                                    <EmailIcon color="action" style={{ width: 25, height: 25 }} />
                                </Badge>
                                <Badge badgeContent={2} color="error" style={{ marginRight: '10%' }}>
                                    <NotificationsIcon color="action" style={{ width: 25, height: 25 }} />
                                </Badge>
         </Grid>
      </Grid>
      <div className={styles.function} styles={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
        <Grid styles={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Routes>
     <Route element={<Category/>} path="/Category"caption="New Category" link="Display_all_Category" />
     <Route element={<TopCategory/>} path="/topCategories" caption="Top Categories"  link="Display_all_topcategories" />
     <Route element={<DisplayAllCategory/>} path="/Display_all_Category" caption="Category List" />
     <Route element={<DisplayAlltopCategory/>} path="/DisplayAlltopCategory" caption="Top Category List" />
     <Route element={<Brands/>} path="/Brands"  caption="Brands"  link="Display_all_Brands" />
     <Route element={<DisplayAllBrands/>} path="/Display_all_Brands"  caption="Brands List" />
     <Route element={<Products/>} path="/Products" caption="Products" link="Display_all_Product"/>
     <Route element={<DisplayAllProducts/>} path="/Display_all_Products" caption="Products List" />
     <Route element={<Productdetails/>} path="/Productdetails" caption="Product-Details" link="Display_all_Productdetails"/>
     <Route element={<Banner/>} path='/banner' caption="Banner" />
     <Route element={<DisplayAllProductsdetails/>} path='/Display_all_productdetails' caption="Display Product-Details"/>
     <Route element={<CategoryBanner/>} path="/categorybanner" caption="Category Banner"  />
            </Routes>
        </Grid>
      </div>
     </div>
    </div> // mina div end
  )

 }//main "end". 