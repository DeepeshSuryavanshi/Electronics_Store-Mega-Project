import Header2 from "../header2";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Swal from "sweetalert2"
//icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DevicesIcon from '@mui/icons-material/Devices';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
export default function MyAcocunt(){
    const theme = useTheme();
   var navigate=useNavigate()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
const handlesigneout=()=>{
   Swal.fire({
      title: "Do you want Signe Out?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Signout",
      denyButtonText: `Cancle`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         localStorage.removeItem("User");
         navigate('/')
         Swal.fire("SignOut!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("you are not signOut", "", "error");
      }
    });
}
    return(
    <div style={{backgroundColor:'#191919'}}  >
            <Header2/>
              <div style={{marginLeft:matches?10:100,marginRight:matches?10:100,display:'flex',flexDirection:'column',height:'100%'}} >
                <br/>
                <p style={{ fontSize:matches?24:26,fontWeight:600,color:'white'}} >My  Account</p>
                
                    <Grid container spacing={5} columns={matches?4:0}> 
                     <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350}}>
                <div style={{margin:25}} >
                <AccountCircleIcon style={{ fontSize:30}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Account</div>
                <div>Edit your Basic Details</div>
                </div>
                </div> 
             </div>
          </Grid> 
                   <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <HomeIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Address</div>
                <div>Manage your Saved Address</div>
                </div>
                </div> 
             </div>
          </Grid> 
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <LocalShippingIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Order</div>
                <div>View,Truck,Cancle Order and Buy Again</div>
                </div>
                </div> 
             </div>
          </Grid>
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <MilitaryTechIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Rewards</div>
                <div>Exclusive offers and reward for you.</div>
                </div>
                </div> 
             </div>
          </Grid>  
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <FavoriteIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My WishList</div>
                <div>Have a Look At You favourite Product</div>
                </div>
                </div> 
             </div>
          </Grid>
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <DevicesIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Device & Plan</div>
                <div>Manage Your Devices And Plan.</div>
                </div>
                </div> 
             </div>
          </Grid>
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}>
                <div style={{margin:25}} >
                <MessageIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>My Service Requiest</div>
                <div >Manage Complainites,service requiest</div>
                </div>
                </div> 
             </div>
          </Grid>
          <Grid item xs={4} >
      <div style={{color:'#fff',display:'flex',alignItems:'center',border:'2px solid #353535',
                borderRadius:20,height:80,width:350 }}
                onClick={handlesigneout}
                >
                <div style={{margin:25}} >
                <LogoutIcon style={{ fontSize:40}} />
                </div>
                <div style={{color:'#fff',display:'flex'}} > 
                <div style={{margin:25}}>
                <div style={{fontSize:20,fontWeight:500}}>signe Out</div>
                <div >Signe out From Store</div>
                </div>
                </div> 
             </div>
          </Grid>
          </Grid>
          <div style={{height:'120px'}} ></div>
        </div>
        <Footer/>
    </div>)
}