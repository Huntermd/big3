import { StyleSheet, Text, View, Modal,Pressable,ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Accesorys from './Accesorys';
export default function SavedModalProgram({Open,Close, Name,data,array,setarray}) {


const Delete = () =>{
  let NewArray = array.filter(item => item.Name !== Name)
  setarray(NewArray)
 
}
// useEffect(() => {
//   console.log(Accesory)
//   }, [Accesory]
//   )

  return (
    <Modal
    visible={Open}
    >
        <View style={styles.centeredView}>
            <ScrollView style={styles.container}>
                <View style={styles.NameBar}>
                <Pressable  onPress={() => {Close(false); }}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold', margin:5}}> X</Text>
        
      </Pressable>
      <Text  style={{color: 'grey', fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{Name}</Text>
      <Pressable style={styles.Button} onPress={() =>  { Delete() ;Close(false);  }}>
        
        </Pressable>
                </View>
                <View >
               
      {data.Accesory.map((data) =>{
        return <Accesorys sets={data.sets} weight={data.weight} rep={data.reps} exercise={data.exercise}/>
      })}
      



</View>
         
            </ScrollView>
       
        </View>
     
    </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 22,
      },
      container:{
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
      },
      NameBar:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '100%',
        height: 100,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      },
      OpenButton:{
        height: 30,
        width: 30,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth:4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      },
      Button:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'red',
        alignSelf: 'center'
      }
})