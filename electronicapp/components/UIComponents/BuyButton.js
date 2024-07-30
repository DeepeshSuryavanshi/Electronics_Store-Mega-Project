import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');

export default function BuyButton({message,onPress,style}) {
    const styles = StyleSheet.create({
        view:{
         width:style.width,
         height:style.height,
         borderWidth:1,
         borderRadius:5,
         borderColor:"gray",
         margin:style.margin,
         Display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:style.backgroundColor
        },
        text:{
         color:style.color,
         fontSize:16,
         letterSpacing:1
        }
     })
         return(
             <TouchableOpacity onPress={onPress} >
             <View style={styles.view} >
                 <Text style={styles.text}>{message}</Text>
             </View>
             </TouchableOpacity>
         )
}