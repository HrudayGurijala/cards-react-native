import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image source={require('../img/image.png')} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Arizona,USA</Text>
            <Text style={styles.cardDescription}>somewhere in AR fkefgiefuwehfukehfheufhewhfoehflhohweifhoiehfioewhfoiewhfoiwehfiohweoifhewiofho</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
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
    card:{
        height:350,
        width:340,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:8,

    },
    elevated:{
        elevation:5,
        backgroundColor:'#ffffff'
    },
    cardImage:{
        height:180,
        width:340,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:8
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardDescription:{
        fontSize:16,
        marginBottom:10
    },
    cardFooter:{
        color:'#999999'
    }
})