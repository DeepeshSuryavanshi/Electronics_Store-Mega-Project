import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { serverURL } from '../services/FetchNodeServices';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../screens/Cart';
import ProductDetailScreen from '../screens/ProductDetails';
import AppHeader from './UIComponents/AppHeader';
import Login from '../screens/Login';
import SubmitOPTScreen from '../screens/Submitotp';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigator(props) {
  
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

// Drowser component
  function CustomDrawerContent(props) {
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
            source={{uri:`${serverURL}/images/Admin%20Pic/TheDeepeshx.jpeg`}}
          />
          <Text style={{fontWeight: 'bold'}}>{'Deepesh Singh'}</Text>
          <Text>+91 8516815519</Text>
          <Text style={{fontSize: 12}}>{'Deepeshsuryavanshi56@gmail.com'}</Text>
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
