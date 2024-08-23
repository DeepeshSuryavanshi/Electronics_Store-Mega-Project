import React from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import {serverURL, PostData, GetData} from "../services/FetchNodeServices"
const {height,width} = Dimensions.get('window')
import PoductListCart from '../components/UIComponents/PoductListCart';

function Cart() {
    var cart = useSelector(state => state.mycart);
    var data = Object.values(cart)
    var key = Object.keys(cart)

    return(
        <View style={styles.main}>
            <View style={styles.navbar}>
                <Text style={{ textAlign: 'start', color: '#fff', fontSize: 20 }} >Home {'>'}</Text>
                <Text style={{ textAlign: 'start', color: '#fff', fontSize: 20 }} > My Cart</Text>
            </View>
            <Text style={{ textAlign: 'right',marginRight:10, color: '#000', fontSize: 20 }} > Item:{key.length}</Text>
            <ScrollView style={styles.MainDisplayProduct} >
                <PoductListCart Data={data}/>
            </ScrollView>
        </View>
    )
}


// main end
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff',
    },
    navbar:{
        width:'100%',
        height:43,
        backgroundColor:'#000',
        flexDirection:'row',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:5
    },
    MainDisplayProduct:{
        flex:1
    }
})
export default Cart;