import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html';
const {height,width} =Dimensions.get('window')

export default function FeatcherHTML(props) {
    const html = props.data.description
  return (
    <View style={styles.main}>
      <View style={styles.Container}>
        <RenderHTML 
        tagsStyles={{ body: { color: '#fff', fontSize: 15, fontWeight: 600} }}
        contentWidth={width}
        source={{ html}} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        marginTop:5,
        marginLeft:5
    },
    Container:{
        width:width*.96,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#90A4AE',
        paddingVertical:0,
        paddingHorizontal:5
    }

})