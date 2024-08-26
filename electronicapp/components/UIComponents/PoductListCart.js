import { View,Text,Image,Dimensions } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
import MyButton from "./Button";
import { useDispatch } from "react-redux";
var {width,height}=Dimensions.get('window');


export default function PoductListCart(props){
    const productFromRedux = props.Data
    var dispatch = useDispatch()
    var productDetails = Object.values(productFromRedux)


    const removeProduct=(item)=>{
        dispatch({type:'REMOVE_PRODUCT',payload:[item?.productdetailsid,item]})
        props.setPageRefresh(!props.pageRefresh)
        // console.log("REMOVE PRODUCT: ",item)
    }
    const AddtoWishList = (Id) =>{
        alert("to wisht list",Id)
    }
   
    const CartBox = () =>{
        return productDetails?.map((item,i)=>{
        return(
            <View>
             <View key={i} style={{justifyContent:'space-between',flexDirection:'row',width:width*0.945,height:height*0.33,borderWidth:2,borderColor:'gray',borderRadius:10,margin:10,backgroundColor:'#dfe6e9'}}>
                {/* image of the product */}
                <View style={{alignItems:'center',justifyContent:'center',width:'40%'}}>
                    <Image style={{width:130,height:130}} source={{uri: `${serverURL}/images/${item.image.split(',')[0]}`}} />
                </View>
                {/* Product detail */}
                <View style={{flexDirection:'column',width:'60%',marginRight:2}}>
                <View style={{marginTop:5,height:height*.066}}>
                    <Text style={{color:'#000',fontSize:16,fontWeight:'600'}}>{item.brandname}{item.productname}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginTop:2}}>
                    <Text style={{color:'#000',fontSize:14,fontWeight:'600',textDecorationLine:'line-through',opacity:0.6}}>&#8377;{item.price}</Text>
                </View>
                <View style={{marginLeft:5,marginTop:2}}>
                    <Text style={{color:'#000',fontSize:17,fontWeight:'600'}}>&#8377;{item.offerprice}</Text>
                </View>
                
                </View>
                <Text style={{color:'gray',fontSize:13}}>(Incl. all Taxes)</Text>
                <View style={{marginTop:4}}>
                    <Text style={{color:'#000',fontSize:12}}>Express delivery by today | &#8377;99</Text>
                    <Text style={{color:'#000',fontSize:12}}>Quentiy in Cart:{item.qty}</Text> 
                </View>
                <View style={{flexDirection:'row',gap:10,margin:5}}> 
                    <MyButton onPress={()=>AddtoWishList(item.productdetailsid)} fontSize={16} message={'Add to Wishlist'} Background={"#000"} w={.25} h={.08} textColor={'#fff'} />
                    <MyButton onPress={()=>removeProduct(item)} fontSize={16} message={'Remove'} Background={"#000"} w={.24} h={.08} textColor={"#fff"} />
                </View>
                </View>
             </View>
             </View>
        )})
    }

    return(CartBox())
}