import { View,Text,Dimensions } from "react-native";
import { useSelector } from "react-redux";
import {useState,useEffect} from 'react'
import MyButton from "./Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import RazorpayCheckout from 'react-native-razorpay';
import { CheckSyncData,getSyncKeys } from "../../storage/AsyncDataStore";
import { serverURL } from "../../services/FetchNodeServices";
var {width,height}=Dimensions.get('window');

export default function PriceDetails(props){
    var productFromRedux = useSelector(state=>state.mycart)
    var product = Object.values(productFromRedux)
    var keys = Object.keys(productFromRedux)
    var navigation=useNavigation()
    var dispatch=useDispatch()

    const [btnStatus, setBtnStatus] = useState('Continue to Buy');
    const [userData,setUserData]=useState({})

    var totalamount=product.reduce((p1,p2)=>{
        var amt = p2.qty*p2.price
        return p1+amt
    },0);
    var amount=product.reduce((p1,p2)=>{
        var amt = p2.qty*(p2.offerprice!==0?p2.offerprice:p2.price)
        return p1+amt
    },0);

    var discountAmt = totalamount-amount
    var netamount = totalamount-discountAmt
    
    const  GetUSerdata = async ()=>{
        var key= await CheckSyncData()
        var data= await getSyncKeys(key[0])
        console.log("User Data From AsyncStorage",data)
       if(key)
       {  setUserData(data) 
          setBtnStatus('Make Payment')
       }
       return null;
    }

    useEffect(() => {
        props.setPageRefresh(!props.pageRefresh);
        GetUSerdata()
    }, []);

    const makePayment=async()=>{
        var options = {
            description: 'Credits towards consultation',
            image: `${serverURL}/images/logo.png`,
            currency: 'INR',
            key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
            amount: netamount*100,
            name: userData?.username,
            prefill: {
              email: userData?.emailid,
              contact: userData?.mobileno,
              name: userData?.username
            },
            theme: {color: '#F37254'}
          }
       RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
            dispatch({type:'REMOVE_PRODUCT',payload:[]})

          }).catch((error) => {
            // handle failure
            alert(`Error: ${error} | ${error.description}`);
          });

    }

    const handlePress = async () => {
        var key= await CheckSyncData()
        console.log("HandlePress Key Featch Key",key);
        
        if(key)
        {
            makePayment()
            // alert("make payment")
        }    
        else{
            navigation.navigate("Login")
        }

    }
    console.log("Userdaa iin priceseecion sonctaxxxxxxx", userData);
    
    return(<View>
        {keys.length==0 ? 
            <View style={{alignItems:'center',justifyContentL:'center',marginTop:60}}>
                <Text style={{color:'#000',fontSize:18,fontWeight:'600'}}>Oops no items were found...😞</Text>
            </View>
            :
            <View style={{margin:10,width: width * 0.945, height: height * 0.38, borderWidth: 2, borderColor: 'gray', marginBottom: 20, borderRadius: 10 }}>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500', paddingLeft: 10,paddingTop:5 }}>Price Details</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Text style={{ color: '#000', fontSize: 16, paddingLeft: 15 }}>MRP ({keys.length} items)</Text>
                    <Text style={{ color: '#000', fontSize: 16, paddingRight: 15 }}>&#8377;{totalamount}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Text style={{ color: '#000', fontSize: 16, paddingLeft: 15 }}>Discount</Text>
                    <Text style={{ color: '#009432', fontSize: 16, paddingRight: 15 }}>-  &#8377;{discountAmt}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                    <Text style={{ color: '#000', fontSize: 16, paddingLeft: 15 }}>Delivery Fee</Text>
                    <Text style={{ color: '#000', fontSize: 16, paddingRight: 15 }}>&#8377;40</Text>
                </View>

                <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, backgroundColor: '#000', marginLeft: 5, marginRight: 5, borderRadius: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 16, paddingLeft: 10, fontWeight: '600' }}>Total Amount</Text>
                    <Text style={{ color: '#fff', fontSize: 16, paddingRight: 10, fontWeight: '600' }}>&#8377;{netamount + 40}</Text>
                </View>

                <View style={{ flexDirection: 'column', marginBottom: 15 ,height:height*.2}}>
                        <Text style={{ color: '#009432', fontSize: 16, paddingLeft: 15, fontWeight: '500' }}>You will save &#8377;{discountAmt} on this order </Text>
                    <View style={{ alignItems: 'center'}}>
                        <MyButton onPress={()=>handlePress()} icon={'chevron-right'} fontSize={16} message={btnStatus} Background={"#000"} w={.9} h={.08} textColor={"#fff"} />
                    </View>
                </View>
        </View>
        }
        </View>
    )
}