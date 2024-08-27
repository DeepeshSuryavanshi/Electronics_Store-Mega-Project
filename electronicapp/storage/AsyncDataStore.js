import AsyncStorage from "@react-native-community/async-storage";

// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// checking data
export async function CheckSyncData(){
  console.log("CheckAsyncStorage Run");
    try {
        const key = await AsyncStorage.getAllKeys();
        console.log("Keys Get from Check Storage",key.length);
        if(key.length == 0) return false;
        else return key;
        
    } catch (error) {
        console.log('Key_Getting CheckAsync Storage',error);
        return false;
    }
}
// getkeys
export  async function getSyncKeys(key) {
  console.log("get Async Data Run");
    try {
        const value = await AsyncStorage.getItem(`${key}`)
        console.log("Get Async Data:",value);
            if (value!== null) {
                var userData = JSON.parse(value)
                console.log("User data from asyn: ",userData);
                return userData;
            } else {
                console.log("No User FOund in Async:",value);
                return null;
            }
    } catch (error) {
        console.log("Error IN GetSyncKey: ",error);
        return null;
    }
    
}
// set data 
export async function storeDatasync(key, body) {
  console.log("store Async Data Run");
    try {
      await AsyncStorage.setItem(`${key}`,body);
      return {status:true,message:'sucess'}
    } catch (e) {
      console.log('Error in saving data', e);
      return {status:false,message:'unsucessfull'}
    }
  }
 
// Remove Data
export async function removeDatasync(key) {
  console.log("Remove all Keys Run");
    try {
      const data = await AsyncStorage.removeItem(`${key}`);
      console.log("Data in the remove async storage",{data});
    } catch (e) {
      console.log('Error in saving data',e);
      return false;
    }
  }