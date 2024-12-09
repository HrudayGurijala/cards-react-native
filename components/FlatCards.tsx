import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text>red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>
                    red
                </Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>
                    red
                </Text>
            </View>
        </View>
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
        flex:1,
        flexDirection:'row',
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:5,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#ef5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB4',
    },
    cardThree:{
        backgroundColor:'#5da3fa',
    }
})