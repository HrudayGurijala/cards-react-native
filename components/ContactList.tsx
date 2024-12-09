import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts =[
        {
            uid: '1',
            name: 'hruday',
            status:'learning react-native',
            imageURL:'https://avatars.githubusercontent.com/u/e?email=myemail@mycompany.com&s=64'
        },
        {
            uid: '2',
            name: 'srikar',
            status:'learning react-native',
            imageURL:'https://avatars.githubusercontent.com/u/e?email=myemail@mycompany.com&s=64'
        },
        {
            uid: '3',
            name: 'harsha',
            status:'learning react-native',
            imageURL:'https://avatars.githubusercontent.com/u/e?email=myemail@mycompany.com&s=64'
        },
        {
            uid: '4',
            name: 'sravan',
            status:'learning react-native',
            imageURL:'https://avatars.githubusercontent.com/u/e?email=myemail@mycompany.com&s=64'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageURL})=>(
            <View key={uid}style={styles.userCard}>
                <Image source={{uri : imageURL}}
                style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:15
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:4,
        backgroundColor:'#cad5e2',
        elevation:4,
        marginBottom:10,
        borderRadius:8
    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 60 / 2,
        marginRight:12
    },
    userName:{
        fontSize:16,
        fontWeight:'600',

    },
    userStatus:{
        fontSize:12
    }
})