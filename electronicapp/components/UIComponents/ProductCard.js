import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { serverURL } from '../../services/FetchNodeServices';
import { useNavigation } from '@react-navigation/native';
import BuyButton from './BuyButton';
import CartButton from './CartButton';
const {height,width} = Dimensions.get('window')

export default function ProductCard({DATA,title}) {
    var navigation = useNavigation()
    const handleTouch=(data)=>{
        navigation.navigate('productdetails',{data:data})
    }

    const buynow = (data) =>{
        alert("hello buyer")
    }

    const AddCart = (data) =>{
        alert("Add to cart",)
    }
    const ItemView =(Data)=>{
        var data = Data.Data
        var image = data.image.split(",")[0]
        return(
         <TouchableOpacity onPress={()=>handleTouch(data)}>
            <View style={styles.ItemView}>
                <View style={styles.ImageView}>
                <Image style={styles.itemImage} source={{uri:`${serverURL}/images/${image}`}} />
                </View>
                <View style={styles.itemTextView} >
                <Text
                numberOfLines={1}
                style={styles.itemText}>{data.brandname}{' '}{data.productname}</Text>
                </View>
                <View style={styles.ItemViewMainRate} >
                    <View style={styles.itemViewTextRate}>
                        <Text style={styles.itemTextRate}>offerprice &#8377;{data.offerprice}</Text>
                    </View>
                    {/* <View style={styles.itemViewTextRate}>
                        <Text style={styles.itemTextRate}>&#8377;{data.price}</Text>
                    </View> */}
                </View>
                <View style={styles.ButtonSection} >
                    <View style={styles.BuyButton}>
                       <BuyButton message={"Buy"} onPress={()=>buynow(data)} style={{width:width*.16,margin:3,backgroundColor:'#191919',color:"#fff",height:height*.04}}/>
                    </View>
                    <View style={styles.BuyButton}>
                       <CartButton message={"Add"} onPress={()=>AddCart(data)} style={{width:width*.18,margin:3,backgroundColor:'#43A047',color:"#fff",height:height*.04}}/>
                    </View>
                </View>
            </View>
            </TouchableOpacity>  
        )
      }  

  return (
    <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        data={DATA}
        renderItem={(item) => <ItemView Data={item.item}/>}
        keyExtractor={item =>  item.productdetailsid}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        flex:1
    },
    title:{
        color:'#fff',
        fontSize:16,
        marginLeft:5,
        textAlign:'left',
    },
    ItemView:{
        height:height*0.2,
        width:width*0.45,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:20,
        backgroundColor:"#121212",
        margin:10,
        padding:0,
    },
    itemText:{
      color:'#fff',
      fontSize:16
    },
    itemTextRate:{
    color:'#000',
    fontSize:16,
    },
    itemViewTextRate:{
       display:'flex',
       backgroundColor:'#fff',
       padding:5,
       borderRadius:10,
    },
    itemImage:{
      alignSelf:'center',
      width:width*.9,
      height:height*0.17,
      resizeMode:'contain',
    },
    ImageView:{
        height:height*.17,
        width:width*.4,
    },
    itemTextView:{
        margin:5,
        alignSelf:'center'
    },
    ItemViewMainRate:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ButtonSection:{
        gap:0,
        margin:5,
        alignItems:'center',
        flexDirection:'row'
    },
})