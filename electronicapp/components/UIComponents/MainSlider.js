import { Image,View, Text,Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { serverURL } from '../../services/FetchNodeServices';

export default function MainSlider({Data}) {
  const {width,height }= Dimensions.get('window');
  return (
    <View style={{height:height*.2}}>
         <Carousel
                loop
                width={width*1}
                height={height * 0.3}
                autoPlay={true}
                scrollAnimationDuration={1000}
                data={Data}
                renderItem={({item}) => (
                    <View
                        style={{
                            height:height*.2,
                            justifyContent: 'center'
                        }}
                    >
                        <Image style={{
                            width:width*1,
                            height:height*.3,
                            resizeMode:'contain'
                        }} source={{uri:`${serverURL}/images/Main%20banner/${item}`}} />
                    </View>
                )}
            />
    </View>
  )
}