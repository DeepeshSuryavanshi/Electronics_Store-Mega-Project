import { View, Text, StyleSheet, Dimensions,Image } from 'react-native'
import React from 'react'
import { serverURL } from '../../services/FetchNodeServices';

const {height, width} = Dimensions.get('window')

export default function Cartproductcard(data) {
    let products = data.data;
    return products.map((item)=>{
        console.log("Item in product-=cart",item);
        return(
            <View style={style.main}> 
                <Image
              style={style.image}
              source={{uri: `${serverURL}/images/${item.image.split(',')[0]}`}}
            />
                <View style={style.content}>
                    <Text style={style.ProductName}>{item.brandname}{item.productname} </Text>
                </View>
            </View>
        )});
}

const style = StyleSheet.create({
    main:{
        backgroundColor:'#F5F5F5',
        padding:10,
        borderRadius:10,
        borderColor:'#000',
        borderWidth:1,
        display:'flex',
        flexDirection:'row',
        height:height*.3
    },
    image:{
        height: height * 0.15,
        width: width * 0.3  ,
        borderRadius: 10,
        margin:4
    },
    content:{
        width:width*.57,
    },
    ProductName:{
        fontSize:16,
        fontWeight:700,
        height:height*.067
    }
})