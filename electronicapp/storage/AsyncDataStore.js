import AsyncStorage from "@react-native-community/async-storage";

// checking data
export async function CheckSyncData(){
    try {
        const key = await AsyncStorage.getAllKeys();
        if(key.length == 0) return false;
        else return key;
        
    } catch (error) {
        console.log('Key_Getting CheckAsync Storage',error);
        return false;
    }
}
// getkeys
export  async function getSyncKeys(key) {
    try {
        const value = await AsyncStorage.getItem(`${key}`)
            if (value!== null) {
                var userData = JSON.parse(value)
                return userData;
            } else {
                return null;
            }
    } catch (error) {
        console.log("Error IN GetSyncKey: ",error);
        return null;
    }
    
}
// set data 
export async function storeDatasync(key, body) {
    try {
      await AsyncStorage.setItem(`${key}`,JSON.stringify(body));
      return {status:true,message:'sucess'}
    } catch (e) {
      console.log('Error in saving data', e);
      return {status:false,message:'unsucessfull'}
    }
  }
 
// Remove Data
export async function removeDatasync(key) {
    try {
      const data = await AsyncStorage.removeItem(`${key}`);
    } catch (e) {
      console.log('Error in saving data',e);
      return false;
    }
  }