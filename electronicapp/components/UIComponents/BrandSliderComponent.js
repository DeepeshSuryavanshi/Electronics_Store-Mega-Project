import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import { FlatList } from 'react-native'
import React from 'react'
import { serverURL } from '../../services/FetchNodeServices'
const {height,width} = Dimensions.get('window')


export default function BrandSliderComponent({DATA,title}) {
  
  const ItemView =(Data)=>{
    var data = Data.Data
    // console.log(data.image);
    return(
        <View style={styles.ItemView}>
            <Image style={styles.itemImage} source={{uri:`${serverURL}/images/Brands/${data.logo}`}} />
            <Text
            numberOfLines={2}
            style={styles.itemText}>{data.brandname}</Text>
        </View>
    )
  }  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
        <FlatList
        horizontal
        data={DATA}
        renderItem={(item) => <ItemView Data={item.item}/>}
        keyExtractor={item => item.brandsid}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    },
    title:{
      fontSize:16,
      color:'#fff',
      marginLeft:5,
      textAlign:'left',
    },
    ItemView:{
        height:height*0.2,
        width:width*0.3,
        justifyContent:'center',
        alignItems:'center',
    },
    itemText:{
      color:'#fff',
      fontSize:16,
    },
    itemImage:{
      width:width*0.3,
      height:height*0.1,
      resizeMode:'contain',
      margin:0
    }
  });