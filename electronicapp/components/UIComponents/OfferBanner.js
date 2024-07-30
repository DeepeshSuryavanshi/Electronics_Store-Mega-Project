import { View, Text, StyleSheet,Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import {serverURL } from '../../services/FetchNodeServices'
const {height, width} = Dimensions.get('window')

export default function OfferBanner() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Super Saver Offer (2)</Text>
      <View style={styles.imageContainer}>
        <ScrollView
        horizontal={true}
        >
      <Image
      id='112'
        style={styles.Banner}
        source={{uri: `${serverURL}/images/AD%20Banner/banner1.webp`,}}
      />
      <Image
      id='021'
        style={styles.Banner}
        source={{uri: `${serverURL}/images/AD%20Banner/banner2.webp`,}}
      />
     </ScrollView>
      </View>
    </View>
  )
}
const styles =StyleSheet.create({
    main:{
        margin:5,
    },
    title:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
    },
    imageContainer:{
        flexDirection:'row',
        height:height*.12,
        width:width*1,
        alignItems:'center',
        justifyContent:'center',
    },
    Banner:{
        height:height*.12,
        width:width*.95,
        backgroundColor:'#263238',
        borderRadius:10,
        marginRight:10,
        resizeMode:'contain'
    }
})