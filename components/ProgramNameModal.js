import { StyleSheet, Text, View,Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import ModalProgram from './ProgramModal';

export default function ProgramNameModal({Open, Close, array,setarray}) {
    const [Name,setName] = useState('');
    const [ProgramModal,setProgramModel] = useState(false);
    const OpenProgram = () =>{
        setProgramModel(true)
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
                Enter your Name for the Program
            </Text>
        </View>
        <Pressable style={styles.Button} onPress={() =>  { setProgramModel(true)}}>
        
      </Pressable>
      <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                create your program
            </Text>
            </View>
       
        </View>

<ModalProgram Open={ProgramModal} Close={setProgramModel} Name={Name} Close2={Close} array={array} setarray={setarray}/>
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