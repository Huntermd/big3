import { StyleSheet, Text, View,Pressable, ImageBackground } from 'react-native'
import React from 'react'
import img from '../assets/ProgramPic.jpeg';
import ProgramNameModal from './ProgramNameModal';
import { useState } from 'react';
import SavedModalProgram from './SavedProgramModal';


export default function YourProgramButton({data, name, array,setarray}) {
    const [ModalOpen, setModalOpen] = useState(false);
    const Open = () => (
        setModalOpen(true)
      
      
      )
  return (
    
<Pressable style={styles.containerContain} onPress={Open}>
       <ImageBackground source={img} resizeMode="cover" style={styles.container} >
        <Text style={styles.myText}>{name}</Text>
        </ImageBackground>
       <SavedModalProgram data={data} Name={name} Open={ModalOpen} Close={setModalOpen} array={array} setarray={setarray}/>
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