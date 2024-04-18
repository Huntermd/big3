import { StyleSheet, Text, View,Pressable, ImageBackground } from 'react-native'
import React from 'react'
import img from '../assets/ProgramPic.jpeg';
import ProgramNameModal from './ProgramNameModal';
import { useState } from 'react';
import SavedModalProgram from './SavedProgramModal';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



export default function YourProgramButton({data, name,url,get}) {
  let reqInstance = axios.create({
    headers:{
      'content-type': 'application/json',
      'accept': 'application/json'
      
    }
    
    });
  const navigation = useNavigation();
 const Open = () =>{
  reqInstance.put(`${url}update-timestamp/${data.logId}`).then((res)=>{
    

  }).catch((err) =>{
    
    console.log(err)
  })
  navigation.navigate("Program", {logId: data.logId,name:name})
}

  
 
  return (
    
<Pressable style={styles.containerContain} onPress={()=>{Open();get();}}>
       <ImageBackground source={img} resizeMode="cover" style={styles.container} >
        <Text style={styles.myText}>{name}</Text>
        </ImageBackground>
       
    </Pressable>
    
    
  )
}

const styles = StyleSheet.create({
    container :{
        width: 150 ,
        height: 150,
       flexDirection: 'column-reverse',
        color: 'black',
        borderRadius: 15,
       
        
    
       },
       myText:{
        backgroundColor: 'black',
        color: 'yellow',
       },
       containerContain:{
        alignItems: 'center',
        marginLeft: 5
       }
})