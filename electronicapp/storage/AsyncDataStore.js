import AsyncStorage from "@react-native-community/async-storage";

// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// checking data
export async function CheckSyncData(){
  console.log("Check Async Data get all Keys Run");
    try {
        const key = await AsyncStorage.getAllKeys();
        console.log("KEYSSS_GET",key.length);
        if(key.length == 0) return false;
        else return key;
        
    } catch (error) {
        console.log('Error:Key_Getting Errors',error);
        return false;
    }
}
// getkeys
export  async function getSyncKeys(key) {
  console.log("get Async Data get keys all Keys Run");
    try {
        const Keys = await AsyncStorage.getItem(`${key}`)
        console.log("Async Data :",value);
            if (Keys!== null) {
                var userData = JSON.parse(Keys)
                console.log("User data from asyn: ",userData);
                return userData;
            } else {
                console.log("No User FOund in Async:",Keys);
                return null;
            }
    } catch (error) {
        console.log("Error IN Get Key: ",error);
        return null;
    }
    
}
// set data 
export   async function storeDatasync(key, body) {
  console.log("store Async keys Run");
    try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(body));
      return {status:true,message:'sucess'}
    } catch (e) {
      console.log('Error in saving data', e);
      return {status:false,message:'unsucessfull'}
    }
  }
 
// Remove Data
export   async function removeDatasync(key) {
  console.log("Remove all Keys Run");
    try {
      const data = await AsyncStorage.removeItem(`${key}`);
      console.log("Data in the remove async storage",{data});
    } catch (e) {
      console.log('Error in saving data',e);
      return false;
    }
  }