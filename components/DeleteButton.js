import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import DeleteModal from './DeleteModal'

export default function Delete({Delete,id,fullClose,url,get}) {
    const [ModalOpen, setModalOpen] = useState(false)
  return (
    <Pressable style={styles.container} onPress={()=> setModalOpen(true)}>
      <Text>Delete</Text>
      <DeleteModal Open={ModalOpen} Close={setModalOpen} Delete={Delete} id={id} fullClose={fullClose} url={url} get={get}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        
        width:'50%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})