import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PostData } from '../services/FetchNodeServices';

 export default function SignIn(data){
    let navigation = useNavigation()
    let Mobile = data.route.params.Mobile;

  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState(Mobile);
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [title, settitle] = useState('Mr.');

  const handleSignin = async () => {
    alert("SIgn click")
    var body = {
        emailid:email,
        mobileno:mobileNo,
        username:username,
        address:address,
        pincode:pincode,
        title:title
    }
    const result = await PostData('useraccount/submit_useraccount',body)
    if (result.status) {
        alert(result.message)
        await storeDatasync(mobileNo,JSON.stringify(body))
        navigation.navigate('cart')
    }
    else{
        alert(result.message)
        navigation.navigate('Login')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account On Electronics Bazar</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email ID"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mobile No"
          placeholderTextColor="#003f5c"
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Pincode"
          placeholderTextColor="#003f5c"
          value={pincode}
          onChangeText={(text) => setPincode(text)}
        />
      </View>
        {/* Button */}
      <TouchableOpacity style={styles.buttonView} onPress={()=>handleSignin()}>
        <Text style={styles.submitBtn}>Create Account</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
  },
  buttonView:{
    backgroundColor:'#12daa8',
    padding:10,
    width:'80%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  submitBtn:{
    fontSize:18,
    color:'#ffff',
  }
});