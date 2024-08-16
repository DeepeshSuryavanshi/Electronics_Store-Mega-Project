import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Cartproductcard from '../components/UIComponents/cartproductcard';

function Cart(params) {
    var cart = useSelector(state => state.mycart);
    var data = Object.values(cart)


    return(
        <View style={styles.main}>
            <View style={styles.navbar}>
                <Text style={{ textAlign: 'start', color: '#fff', fontSize: 20 }} >Home {'>'}</Text>
                <Text style={{ textAlign: 'start', color: '#fff', fontSize: 20 }} > My Cart</Text>
            </View>
            <View style={styles.productcard} >
                <Cartproductcard data={data} />
            </View>
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
    // product cart styles here start
    productcard:{
        // backgroundColor:'royalblue',
        padding:10,
        width:'100%'
    }
})
export default Cart;