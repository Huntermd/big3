import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function UpdateButton({setOpen, fullClose}) {
  return (
    <Pressable style={styles.container} onPress={()=> {setOpen(true); fullClose(false)}}>
      <Text>Update</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        
        width:'50%',
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center'
    }
})