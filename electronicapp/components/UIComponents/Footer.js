import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign';
import TextBox from './TextBox';

export default function Footer() {
  return (
    <View style={styles.main} >
        <View style={{marginVertical:6}} ><Text style={{fontSize:24,fontWeight:800,color:'#ffff'}}>Contact us</Text></View>
        <View><TextBox Icon={"envelope"} helperTest={"Wrong email id"} message={'Enter Email ID'} w={.94}/></View>
        <View style={styles.icon_view} >
            <Icon name='twitter' size={30} color={"#fff"} />
            <Icon name='github' size={30} color={"#fff"} />
            <Icon name='linkedin-square' size={30} color={"#fff"} />
            <Icon name='facebook-square' size={30} color={"#fff"} />
            <Icon name='instagram' size={30} color={"#fff"} />
        </View>
        <Text style={{color:'#fff', fontSize:20,fontWeight:800}} >Links </Text>
        <View style={{display:'flex',flexWrap:'wrap',width:"100%",height:'38%',gap:1}}>
            <Text style={styles.text} >About croma</Text>
            <Text style={styles.text} >Customer care</Text>
            <Text style={styles.text} >Store loccation</Text>
            <Text style={styles.text} >FAQ's</Text>
            <Text style={styles.text} >Help and Support</Text>
            <Text style={styles.text} >Buying Guide</Text>
            <Text style={styles.text} >B2B Order</Text>
            <Text style={styles.text} >E-waste</Text>
            <Text style={styles.text} >Site Map</Text>
            <Text style={styles.text} >Return Policy</Text>
            <Text style={styles.text} >Discalamers</Text>
            <Text style={styles.text} >Terms of Use</Text>
            <Text style={styles.text} >Croma E-Start</Text>
        </View>
        <Text style={{color:'#fff', fontSize:20,fontWeight:800}} >Carrer At Croma </Text>
        <View style={{display:'flex',flexWrap:'wrap',width:"100%",height:'37%',gap:1}}>
            <Text style={styles.text} >Products</Text>
            <Text style={styles.text} >Services</Text>
            <Text style={styles.text} >New Products</Text>
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'40%',
        padding:10,
    },
    icon_view:{
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        marginVertical:15,
    },
    text:{
        color:'#fff',
        fontSize:20,
        marginRight:20
    }
})