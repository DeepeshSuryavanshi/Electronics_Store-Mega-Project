import React, {useState, useEffect, useSyncExternalStore} from 'react';
import {TouchableOpacity,Image, Dimensions, View,Text, Touchable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather"
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import SerchBar from './SerchBar';
 
const {width, height} = Dimensions.get('window');

export default function AppHeader(props) {
  var navigation = useNavigation();
  var cartItems=useSelector((state)=>state.mycart)
  var keys=Object.keys(cartItems)
  let Mobile = "1234567890"
  return (
    <View style={styles.main}>
        <View style={styles.topContainer}>
        <View>
            <MCI name='menu' size={40} color={"#fff"} />
        </View>
        <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require('../../assets/logo.png')}  />
        </View>
        <View style={styles.iCon}>
            {/* acccount icon */}
            <TouchableOpacity onPress={()=>navigation.navigate("Login")} >
                 <MCI name='account' size={30} color={"#14DBA8"} />
            </TouchableOpacity>
            {/* Cart icon  */}
            <TouchableOpacity onPress={()=>navigation.navigate("cart")}>
            <View style={styles.CartIcon}>
                <View style={{position:'absolute',top:-10,right:-2,zIndex:3,justifyContent:'center',alignItems:'center', width:18,height:18,borderRadius:9,backgroundColor:'#fff'}} >
                    <Text style={{fontSize:11,color:'#000'}}>{keys.length}</Text>
                </View>
                <Icon name='shopping-cart' size={30} color={"#14DBA8"}/>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.BottomContent}>
            <SerchBar width={.95} /> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#000',
        display: 'flex',
        width: width,
        height: height * 0.2,
    },
    topContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
    },
    BottomContent:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    logoContainer:{
        
    },
    logoImage:{
        width:100,
        height:50,
        resizeMode:'contain',
    },
    iCon:{
        flexDirection:'row',
        gap:5,
        marginRight:10,
        marginTop:5,
    },
    CartIcon:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})


