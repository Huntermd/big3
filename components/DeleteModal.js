import { StyleSheet, Text, View,Modal,Pressable } from 'react-native'
import React from 'react'

export default function DeleteModal({Open,Close,Delete,id,fullClose,url,get}) {
  return (
   <Modal
   visible={Open} transparent={true}>
     <Pressable style={styles.centeredView} onPress={()=> {Close(false); fullClose(false)}}>
      <View style={styles.Container}>
        <View style={styles.TextContainer}>
            <Text style={styles.TextStyle}>Are you sure?</Text>
        </View>
        <View style={styles.ButtonsContainer}>
            <Pressable style={styles.Button} onPress={()=> {Delete(id,url);Close(false); fullClose(false); get()}}>
                <Text style={styles.TextStyle}>Yes</Text>
            </Pressable>
            <Pressable style={styles.Button}onPress={()=> {Close(false); fullClose(false)}}>
                <Text style={styles.TextStyle}>No</Text>
            </Pressable>
        </View>
      </View>
      </Pressable>
   </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      Container:{
        width: '80%',
        height: '15%',
        backgroundColor:'white'
        
      },
      ButtonsContainer:{
        borderColor:'grey',
        borderWidth:1,
        flexDirection: 'row',
        width: '100%',
        height:'40%'
      },
      Button:{
        width:'50%',
        height: '100%',
        borderColor:'grey',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        
      },
      TextContainer:{
        height:'60%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
      },
      TextStyle:{
        fontSize: 30
      }
})