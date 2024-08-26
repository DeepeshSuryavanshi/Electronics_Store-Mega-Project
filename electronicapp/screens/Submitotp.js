import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { GetData,PostData } from '../services/FetchNodeServices';

const SubmitOPTScreen = (data) => {
  var navigation = useNavigation()
  const [OTP, setOTP] = useState('');
  let otp = data.route.params.otp;
  let Mobile = data.route.params.mobileNo;
  const submitOTP = async () => {
      if(OTP == otp){
         const user = await PostData('useraccount/check_account',{mobileno:Mobile});
         console.log(user);
         
         if (user.status) {
            alert(`login Sucessfull ${user.data[0].username}`)
            navigation.navigate('cart')
         }
         else{
          alert(user.message)
          navigation.navigate('UserSignin',{Mobile})}
      }
      else{
        alert("Submit valid OTP...")  
      }
   
  };

  return (
    <View style={styles.container}>
      <View style={{borderColor:'#fff',borderRadius:10,borderWidth:2,padding:10}}>
          <Text style={styles.title}>Verify Your OTP</Text>
      </View>
      <Text style={{fontSize:16,color:'#fff',marginTop:10,marginBottom:10}}>Sended to +91 {Mobile}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 4Digit OTP"
        value={OTP}
        onChangeText={(text) => setOTP(text)}
        keyboardType="number"
      />
      <Text style={{color:'#fff',margin:10,}}>By continuing you agree to our Terms of Use & Privacy Police</Text>
      <TouchableOpacity style={styles.otpButton} onPress={()=>submitOTP()}>
        <Text style={styles.otpButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // dark theme
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    height: 50,
    width:'90%',
    color:'#000',
    borderColor: '#fff',
    backgroundColor:'#b2bec3',    
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  otpButton: {
    backgroundColor: '#12daa8',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    width:'90%',
    justifyContent:'center',
    alignItems:'center'
  },
  otpButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SubmitOPTScreen;