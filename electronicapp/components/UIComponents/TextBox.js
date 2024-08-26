import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/EvilIcons';
import EIcons from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');


function TextBox({error,Icon,helperTest, w = 0.9, h = 0.08,message, isSecure = false,Type = 'text'}) {
  //  styles
const styles = StyleSheet.create({
    content:{
      backgroundColor:'#fff',
        width: width * w,
        height:height*h,
        padding:2,borderWidth:1,
        borderRadius:5,
        borderColor:error?'#e74c3c':color,
        Display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
   
})
// styles end
const [color,setColor] = useState("#000")
const [eyeIcon,setEyeIcon] = useState('eye')
const [password,setPassword] = useState (isSecure)
const [condition,setcondition] = useState(isSecure)
// change eye icone
const handleEyeIcon = () =>{
  if (condition == true) {
    setcondition(false)
    setEyeIcon('eye-off')
    setPassword(false)   
  }else{
    setcondition(true)
    setEyeIcon('eye')
    setPassword(true)
  }
}
  return (
    <View>
    <View style={styles.content}>
      <Icons name={Icon} size={40} />
      <TextInput secureTextEntry={password} onFocus={()=>setColor("#4834d4")} onBlur={()=>setColor('gray')}
      style={styles.textField}
      keyboardType={Type} placeholder={message}/> 
      
        {Type === 'password'? <EIcons name={eyeIcon} onPress={handleEyeIcon} size={25} style={{marginLeft:'auto',padding:10}} />:<></>}
    </View>
    {error? <Text style={{color:'#e74c3c'}}>{helperTest}</Text> : <></>}
    </View>
  );
}

export default TextBox;
