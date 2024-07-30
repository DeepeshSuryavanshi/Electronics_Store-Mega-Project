import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  const {width, height} = Dimensions.get('window');


// button
  function MyButton({fontSize,message,Background,w=0.9,h,onPress,textColor,...props}){
//  styles
const styles = StyleSheet.create({
   view:{
    width: width * w,
    height:height*h,
    padding:5,
    borderWidth:1,
    borderRadius:5,
    borderColor:"gray",
    Display:'flex',
    justifyContent:'center',
     alignItems:'center',
    flexDirection:'row',
    backgroundColor:Background
   },
   text:{
    color:textColor,
    fontSize:fontSize,
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

export default MyButton;