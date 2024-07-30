import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native';
import {PostData, serverURL} from '../services/FetchNodeServices';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../components/UIComponents/ColorCom';
import MyButton from '../components/UIComponents/Button';
import PlueMinusButton from '../components/UIComponents/PMbutton';
import OfferBanner from '../components/UIComponents/OfferBanner';
import FeatcherHTML from '../components/UIComponents/FeatcherHTML';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

function ProductDetailScreen(data) {
  const {params, name} = data.route;
  var navigate = useNavigation();
  var dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [ProductData, setProductData] = useState(params.data);
  var cart = useSelector(state => state.mycart);
  var keys = Object.keys(cart);
  var productCart=Object.values(cart)
 
  const isProductMatch = () =>
    {
      return productCart.find((item)=>{
      if(item.productdetailsid == ProductData.productdetailsid){
        return item
      }
      })
    }

  var qty = isProductMatch()?.qty

  // console.log("Quentity:",qty);
  // console.log("Function check in the main :",isProductMatch());
  // console.log('cart ProdctData in the Screen',cart);
  // console.log('Prodct Data in the Screen',ProductData.productdetailsid,ProductData);

  // Image section data config
  var images = ProductData.image.split(',');
  const [mainImage, setMainImage] = useState(images[0]);

  const handleQtyChange = value => {
        if (value == 0) {
          dispatch({
            type: 'REMOVE_PRODUCT',
            payload: [ProductData.productdetailsid],
          });
        } else {
          ProductData['qty'] = value;
          dispatch({
            type: 'ADD_PRODUCT',
            payload: [ProductData.productdetailsid, ProductData],
          });
        }
        // props.navigation.setParams('xxxxxx');
  };

  // item view in the product cart
  const ItemView = Data => {
    let image = Data.Data;
    return (
      <TouchableOpacity onPress={() => setMainImage(image)}>
        <View style={styles.imageItemview}>
          <Image
            style={styles.SmallimageStyle}
            source={{uri: `${serverURL}/images/${image}`}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setMainImage(images[0]);
  }, [ProductData]);

  return (
    <View style={styles.main}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 40,
          }}>
          <Icon
            name="hearto"
            style={{
              color: '#12daa8',
              fontSize: 20,
              alignSelf: 'flex-end',
              margin: 10,
            }}
          />
          <Icon
            name="sharealt"
            style={{
              color: '#12daa8',
              fontSize: 20,
              alignSelf: 'flex-end',
              margin: 10,
            }}
          />
        </View>
        <View style={styles.ImageContainer}>
          <View style={styles.MainImageContainer}>
            <Image
              style={{
                height: height * 0.35,
                width: width * 0.63,
                borderRadius: 10,
                backgroundColor: '#b2bec3',
              }}
              source={{uri: `${serverURL}/images/${mainImage}`}}
            />
          </View>
          <View style={styles.ImageScroll}>
            <FlatList
              horizontal
              data={images}
              renderItem={item => <ItemView Data={item.item} />}
              keyExtractor={item => item.index}
            />
          </View>
        </View>
        <View style={styles.NameDetails}>
          <Text
            style={{fontSize: 16, color: '#FFF', fontWeight: 700, margin: 5}}>
            {ProductData.brandname} {ProductData.productname}
          </Text>
        </View>
        <View
          style={{
            gap: 5,
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 5,
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 10,
            }}>
            &#x20B9;2000 off on Credi-Cad Payment
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 10,
            }}>
            9 Month's EMI
          </Text>
        </View>
        <Text
          style={{
            color: '#12daa8',
            marginLeft: 10,
            marginTop: 5,
            fontSize: 14,
          }}>
          4.5 <Icon name="star" style={{color: '#12daa8'}} /> Rating & 59 Review
        </Text>
        <View style={styles.PriceSection}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              textDecorationLine: 'line-through',
            }}>
            &#x20B9;{ProductData.price}{' '}
          </Text>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 700}}>
            &#x20B9;{ProductData.offerprice}
          </Text>
          <Text style={{fontSize: 16, color: '#fff'}}> (Inc) of All Tax</Text>
        </View>
        <View style={{flex: 1}}>
          <View>
            <Color data={ProductData} setproductdata={setProductData} />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: width * 0.95,
            height: height * 0.005,
            margin: 5,
            marginBottom: 0,
          }}>
          </View>
        <View>
          <OfferBanner />
        </View>
        <View>
          <FeatcherHTML data={ProductData} />
        </View>
        <View style={styles.ButtonSection}>
          <PlueMinusButton
            w={0.47}
            h={0.1}
            qty={qty == undefined ? 0 : qty }
            onChange={handleQtyChange}
            fontSize={19}
            textColor={'#fff'}
            Background={'#00b894'}
          />
          <MyButton
            message={'Buy Now'}
            w={0.47}
            h={0.1}
            fontSize={19}
            textColor={'#fff'}
            Background={'#000'}
          />
        </View>
        {/* <Text style={{fontSize:20,color:'#fff'}} >{ProductData.productdetailsid}</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#191919',
  },
  ImageContainer: {
    height: height * 0.5,
    width: width * 1,
    alignSelf: 'center',
    marginTop: 5,
  },
  MainImageContainer: {
    width: width * 1,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageScroll: {},
  imageItemview: {
    height: height * 0.12,
    width: width * 0.25,
    alignItems: 'center',
  },
  SmallimageStyle: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
    margin: 0,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#b2bec3',
  },
  NameDetails: {
    margin: 2,
  },
  PriceSection: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ButtonSection: {
    flexDirection: 'row',
    width: width,
    height: height * 0.12,
    padding: 5,
    marginTop: 10,
    gap: 10,
  },
});
export default ProductDetailScreen;
