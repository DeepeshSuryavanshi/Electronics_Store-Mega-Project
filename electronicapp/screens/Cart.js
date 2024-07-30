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

function Cart(params) {
    var cart = useSelector(state => state.mycart);
    console.log("Dat inside the cart",cart);

    const ProductCard = (data) =>{
        console.log("data in the productcard",data);
        return  data.data.map((item)=>{
                return(
                    <View>
                        <Text>productdata{item}</Text>
                    </View>
                )
            }) }

    return(
        <View style={styles.main}> 
        <View style={styles.navbar}>
           <Text style={{textAlign:'start',color:'#000',fontSize:20}} >Home {'>'}</Text>
           <Text style={{textAlign:'start',color:'#000',fontSize:20}} > My Cart</Text>
        </View>
                <ProductCard data={cart}/>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff'
    },
    navbar:{
        width:'100%',
        height:43,
        backgroundColor:'#dcdde1',
        flexDirection:'row',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:5
    }
})
export default Cart;