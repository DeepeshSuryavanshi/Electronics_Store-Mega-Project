import Header2 from "../header2";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ShoppingComponent from "../user/ShoppingComponent"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmallScreenCartComponent from "../SmallScreenCartComponent";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLocation } from "react-router-dom";
import DeliveryAddress from "../DeliveryAddressComponent"
export default function Cartscreen()
{   var location=useLocation()
    var mobileno=location?.state?.mobileno
    var status=location?.state?.status
    var userData=location?.state?.user
    // alert(JSON.stringify(userData))
    // console.log( "my checking login",status,JSON.stringify(userData));
    var navigate=useNavigate()
    var cart=useSelector(state=>state.mycart)
    var productCart=Object.values(cart)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md')); 
    
    const showAddress=()=>{

        return(<div>{userData[0]?.username}</div>)
    }
    const handleShop=()=>{
     navigate('/cart')
    }
    return(<div>
       <div>
        <Header2/>
       </div>
       <div style={{width:'100%',background:'#f1f2f6',display:'flex',flexDirection:'row'}}>
       <div style={{width:'70%'}}>
        {status?
        <DeliveryAddress userData={userData} />
        :
       <ShoppingComponent mobileno={mobileno}/>
       }
       </div>
       <div style={{width:'30%'}}>
       <div >
       <KeyboardBackspaceIcon onClick={handleShop} fontSize="large" style={{marginLeft:'70%',marginBottom:'-10%',cursor:'pointer'}}/></div>
       <SmallScreenCartComponent title={"Proceed to payment"} user={userData} productCart={productCart}/>
       </div>
       </div>
     
    </div>)
}