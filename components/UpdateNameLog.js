import { StyleSheet, Text, View,Modal,TextInput,Pressable } from 'react-native'
import React from 'react'
import axios from 'axios'
import data from '../helpers/data'
import { useState } from 'react'

export default function UpdateNameLog({logId,get,Open,Close}) {
    const [logName,setName] = useState('');
    const url = data.url
    let reqInstance = axios.create({
      headers:{
        'content-type': 'application/json',
        'accept': 'application/json'
        
      },
    })
    const updatelogName = () =>{
      reqInstance.put(`${url}update-single-log/${logId}`,
      {
        logName : logName
    }).then((res)=>{
          console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <Modal 
    visible={Open} transparent={true}
    >
        <View style={styles.centeredView}>
            <View style={styles.container}>
            <Pressable  onPress={() => Close(false)}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold'}}> X</Text>
      </Pressable>
        <View >
            <TextInput style={styles.TextInputStyle}
            onChangeText={(val) => setName(val)}
            />
            <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Enter your  new Name for the Log
            </Text>
        </View>
        <Pressable style={styles.Button} onPress={() =>  { Close(false);updatelogName();get()}}>
        
      </Pressable>
      <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Update your log
            </Text>
            </View>
       
        </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        backgroundColor: 'black',
        height: '40%',
        margin: 20,
        borderRadius: 20,
        padding: 5
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 22,
      },
      TextInputStyle:{
        backgroundColor: 'white',
        width: '70%',
        alignSelf: 'center',
        height: '30%'
      },
      Button:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'orange',
        alignSelf: 'center'
      }
})