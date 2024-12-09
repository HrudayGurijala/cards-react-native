import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            Tap
        </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            me
        </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            to
        </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            scroll
        </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            more
        </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
        <Text>
            👾
        </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:15
    },
    container:{
        padding:8
    },
    card:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width:100,
        borderRadius:5,
        margin:5,
    },
    elevated:{
        backgroundColor:'#cad5e2',
        elevation:4
    }
})