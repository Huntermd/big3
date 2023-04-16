import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import ModalComponent from './ModalComponent';
import { useState } from 'react';
export default function CommonTile({name, cal,Press, info, Nut,id,Calories, setCalories ,save,array}) {
  const [modalOpen,setModalOpen] = useState(false);

  const CaloriesItem = cal.filter(item => item.attr_id === 208)

  const Num =  Math.round(CaloriesItem[0].value);

  // if(cal.attr_id = 208){
  //    
  //    const item = 'cal'
  // }

  const Open = () => (
    setModalOpen(true)
  
  
  )
  return (
    <Pressable style={styles.Container} onPress={Open}>
         
      <View>
      <Text>{name}</Text>
      <Text>{Num} Cal</Text>
      </View>
      <ModalComponent Open={modalOpen} Close={setModalOpen} Facts={info} Food={name} Pressing={Press} Nutt={Nut} id={id} Calories={Calories} setCalories={setCalories} save={save} array={array}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
         borderColor: 'black' ,
         borderWidth: 2,
        justifyContent: 'space-evenly',
        borderRadius: 10
        
    },
    
})