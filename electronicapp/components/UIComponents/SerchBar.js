import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextBox from './TextBox'

export default function SerchBar({width}) {
    
    return (
    <View style={styles.main}>
        <TextBox w={width} Icon={'search'} message={"search Product"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        height:50,
        paddingLeft:3,
        paddingRight:3,
        margin:5
    }
})