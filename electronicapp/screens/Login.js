import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button pressed');
  };

  const handleOTP = () => {
    // Add your OTP logic here
    console.log('OTP button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.otpButton} onPress={handleOTP}>
        <Text style={styles.otpButtonText}>Get OTP</Text>
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
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
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
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  otpButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default LoginScreen;