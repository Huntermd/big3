import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import Delete from './DeleteButton'

export default function UpdateDelete({Open,Close,Del,id,url,get}) {
  return (
    <Modal visible={Open} transparent={true}>
      <View style={styles.centeredView}>
      <View style={styles.container}>
      <Text style={styles.Textcolor}>UpdateDelete</Text>
      <Delete  fullClose={Close} Delete={Del} id={id} url={url} get={get}/>
    </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        height:'5%',
        width: '40%',
        borderColor:'grey',
        borderWidth:1,
        flexDirection: 'row'
    },
    Textcolor:{
        borderColor:'red',
        borderWidth:1,
        width:'50%'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    }
})