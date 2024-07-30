import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import { FlatList } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { serverURL } from '../../services/FetchNodeServices'
const {height,width} = Dimensions.get('window')


export default function CategorySliderComponent({DATA}) {
  
  const ItemView =(Data)=>{
    var data = Data.Data
    // console.log(data.image);
    return(
        <View style={styles.ItemView}>
            <Image style={styles.itemImage} source={{uri:`${serverURL}/images/Category%20slider/${data.image}`}} />
            <Text
            numberOfLines={2}
            style={styles.itemText}>{data.Categoryname}</Text>
        </View>
    )
  }  
  return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={DATA}
        renderItem={(item) => <ItemView Data={item.item}/>}
        keyExtractor={item => item.Categoryid}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    },
    ItemView:{
        height:height*0.2,
        width:width*0.3,
        justifyContent:'center',
        alignItems:'center',
    },
    itemText:{
      color:'#fff',
      fontSize:16
    },
    itemImage:{
      width:width*0.3,
      height:height*0.1,
      resizeMode:'contain',
      margin:0
    }
  });