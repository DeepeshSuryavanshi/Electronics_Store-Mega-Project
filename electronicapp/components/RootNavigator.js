import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { serverURL } from '../services/FetchNodeServices';
import {NavigationContainer} from '@react-navigation/native';
import {Alert, Image, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../screens/Cart';
import ProductDetailScreen from '../screens/ProductDetails';
import AppHeader from './UIComponents/AppHeader';
import Login from '../screens/Login';
import SubmitOPTScreen from '../screens/Submitotp';
import SignIn from '../screens/SignIn';
import { CheckSyncData,getSyncKeys, removeDatasync } from '../storage/AsyncDataStore';
import { useDebugValue, useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigator(props) {
// Data of user setup
var dispatch = useDispatch()
const [userData,setUserData]=useState({})  

const  Getuserdata = async ()=>{
  var key= await CheckSyncData()
  var data= await getSyncKeys(key[0])
  JSON.parse(data);
  if(data == null)console.log("Userdata is null",data);
  else setUserData(JSON.parse(data));
}
useEffect(() => {
  Getuserdata()
}, []);

  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
          headerShown: false,
          drawerIcon: () => <MCI name={'menu'} size={20} />,
          }}
        />
      </Drawer.Navigator>
    );
  };
  dispatch({type:'ADD_USER',payload:[userData["mobileno"] ,userData]});
// Drowser component
  function CustomDrawerContent(props) {

    function handleLogOut(){
      removeDatasync(userData?.mobileno)
    }


    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{padding: 10, alignItems: 'center', flexDirection: 'column'}}>
          <Image
            style={{
              marginBottom: 5,
              borderRadius: 50,
              resizeMode: 'contain',
              width: 100,
              height: 100,
            }}
            source={{uri:`${serverURL}/images/user.png`}}
          />
          <Text style={{fontWeight: 'bold'}}>{userData?.username}</Text>
          <Text>+91 {userData?.mobileno}</Text>
          <Text style={{fontSize: 12}}>{userData?.emailid}</Text>
        </View>

        <DrawerItemList {...props} />
        <DrawerItem
          label="My Profile"
          onPress={() => alert('hi')}
          icon={() => <MCI name={'account-box'} size={24} />}
        />
        <DrawerItem
          label="Settings"
          icon={() => <MCI name={'account-settings'} size={24} />}
        />
        <DrawerItem
          label="Logout"
          onPress={()=>handleLogOut()}
          icon={() => <MCI name={'logout'} size={24} />}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Mainscreen'}>
        <Stack.Screen
          name="Mainscreen"
          component={ProjectDrawer}
          options={{header: AppHeader}}
        />
        <Stack.Screen
          component={ProductDetailScreen}
          name={'productdetails'}
          options={{headerShown:false}}
        />
        <Stack.Screen
          component={Cart}
          name={'cart'}
          options={{headerShown: false}}
        />
        <Stack.Screen
         component={Login}
         name='Login'
         options={{headerShown:false}}
        />
        <Stack.Screen
         component={SubmitOPTScreen}
         name='Submiotp'
         options={{headerShown:false}}
        />
        <Stack.Screen
        component={SignIn}
        name='UserSignin'
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
