import { StyleSheet, Text, View,Pressable, ImageBackground } from 'react-native'
import React from 'react'
import img from '../assets/ProgramPic.jpeg';
import ProgramNameModal from './ProgramNameModal';
import { useState } from 'react';
import SavedModalProgram from './SavedProgramModal';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import UpdateDelete from './UpdateDelete';
import UpdateNameLog from './UpdateNameLog';




export default function YourProgramButton({data, name,url,get}) {
 const [modalOpen,setModalOpen] = useState(false);
 const [modalOpen2,setModalOpen2] = useState(false);
  
  
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
const Delete =(id,url) =>{
  reqInstance.delete(`${url}delete-single-log/${id}`).then((res)=>{
    

  }).catch((err) =>{
    
    console.log(err)
  })
}
  
 
  return (
    
<Pressable style={styles.containerContain} onPress={()=>{Open();get();}} onLongPress={() => setModalOpen(true) }>
       <ImageBackground source={img} resizeMode="cover" style={styles.container} >
        <Text style={styles.myText}>{name}</Text>
        </ImageBackground>
        <UpdateNameLog Open={modalOpen2} Close={setModalOpen2} logId={data.logId} get={get}/>
        <UpdateDelete Open={modalOpen} Close={setModalOpen} id={data.logId} url={url} Del={Delete} get={get} setOpen={setModalOpen2}/>
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