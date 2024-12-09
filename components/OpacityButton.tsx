import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function OpacityButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
        <Text>Press here</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding:10

    },
    button:{
        alignItems:'center',
        backgroundColor: '#dddddd',
        margin:10,
        padding:10,
        borderRadius:5
    }
})