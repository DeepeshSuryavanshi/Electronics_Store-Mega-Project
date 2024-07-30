import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default function PlueMinusButton({
  fontSize,
  Background,
  w = 0.9,
  h,
  textColor,
  qty,
  ...props
}) {
  const styles = StyleSheet.create({
    view: {
      width: width * w,
      height: height * h,
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      Display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Background,
    },
    text: {
      color: textColor,
      fontSize: fontSize,
      letterSpacing: 1,
    },
    PM: {
      flexDirection: 'row',
      width: width * w,
      height: height * h,
      padding: 5,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'gray',
      Display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    PMButton: {
      backgroundColor: Background,
      borderRadius: 50,
      height: height * 0.07,
      width: width * 0.12,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const [count, setCount] = useState(qty);

  // console.log("PM count:",count);
  // console.log("PM qty:",qty);

  const handleAdd = () => {
    var c = count + 1;
    setCount(c);
    props.onChange(c);
  };
  const handleMinus = () => {
    var c = count - 1;
    if (c >= 0) setCount(c);
    props.onChange(c);
  };

  useEffect(()=>{
    setCount(0)
  },[])
  return (
    <View>
      {count === 0 ? (
        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.view}>
            <Text style={styles.text}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.PM}>
          <TouchableOpacity onPress={() => handleAdd()}>
            <View style={styles.PMButton}>
              <Text style={{fontSize: 31, color: '#fff'}}>+</Text>
            </View>
          </TouchableOpacity>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#fff'}}>{count}</Text>
          </View>

          <TouchableOpacity onPress={() => handleMinus()}>
            <View style={styles.PMButton}>
              <Text style={{fontSize: 30, color: '#fff'}}>--</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
