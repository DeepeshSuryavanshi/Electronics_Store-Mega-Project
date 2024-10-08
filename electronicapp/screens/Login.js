import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  var navigation = useNavigation()
  const handleOTP = (data) => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    alert('OTP: '+otp);
    navigation.navigate('Submiotp',{otp:otp,mobileNo:mobileNumber})
  };

  return (
    <View style={styles.container}>
      <View style={{borderColor:'#fff',borderRadius:10,borderWidth:2,padding:10}}>
          <Text style={styles.title}>Login or Create Account</Text>
      </View>
      <Text style={{fontSize:16,color:'#fff',marginTop:10,marginBottom:10}}>Please enter your Email ID or Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number or Email Address"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        keyboardType=""
      />
      <Text style={{color:'#fff',margin:10,}}>By continuing you agree to our Terms of Use & Privacy Police</Text>
      <TouchableOpacity style={styles.otpButton} onPress={()=>handleOTP(mobileNumber)}>
        <Text style={styles.otpButtonText}>Continue</Text>
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

export default LoginScreen;