import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GetData, serverURL} from '../services/FetchNodeServices';
import CategorySliderComponent from '../components/UIComponents/CategorySliderComponent';
import BrandSliderComponent from '../components/UIComponents/BrandSliderComponent';
import SerchBar from '../components/UIComponents/SerchBar';
import MainSlider from '../components/UIComponents/MainSlider';
import ProductCard from '../components/UIComponents/ProductCard';

var data = [
  'a1.webp',
  'a2.webp',
  'a3.webp',
  'a4.webp',
  'a5.webp',
  'a6.webp',
  'a7.webp',
];

function Home() {
  const [Category, setCategory] =useState([]);
  const [Brand,setBrand] =useState([])
  const [Products,setProducts]=useState([])

  const featchAllCategroy = async () => {
    var result = await GetData('Category/Dispaly_all_category');
    setCategory(result.data.data);
  };
  const featchAllBrand = async () => {
    var result = await GetData('Brand/Display_all_Brands');
    setBrand(result.data.data);
  };
  const featchAllProducts = async () => {
    var result = await GetData('productdetails/Display_productdetails');
    setProducts(result.data.data);
  };
  useEffect(
    function () {
      featchAllCategroy();
      featchAllBrand();
      featchAllProducts();
    },[],
  );
  return (
    <View style={style.main}>
      <ScrollView>
      {/* <SerchBar width={.95} /> */}
      <MainSlider Data={data} />
      <CategorySliderComponent title={"Categoryes"} DATA={Category} />
      <ProductCard title={"Top Product"} DATA={Products}/>
      <BrandSliderComponent title={"Top Brands"}  DATA={Brand}/>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#191919',
  },
});
export default Home;
