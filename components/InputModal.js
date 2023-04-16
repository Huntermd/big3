import { StyleSheet, Text, View,Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import AccesorysModal from './AccesorysModal'
import TopSet1 from './TopSet1'

export default function InputModal({Open, Close, accesory,topset1, }) {
    const [ModalOpen, setModalOpen] = useState(false)
    const [ModalOpen2, setModalOpen2] = useState(false)
    const [Sets,setSets] = useState();
    const [Reps, setReps] = useState();
    const [Weight, setWeight] = useState();
    const [Exercise, setExercise] = useState();
    const [BackdownSets,setBackdownSets] = useState();
    const [BackdownReps, setBackdownReps] = useState();
    const [BackdownWeight, setBackdownWeight] = useState();
  

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
        <Pressable style={styles.Button} onPress={() =>  { setModalOpen(true)}}>
        
      </Pressable>
      <Pressable style={styles.Button2} onPress={() =>  { setModalOpen2(true)}}>
        
        </Pressable>
      <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                create your program
            </Text>
            </View>
       
        </View>

<AccesorysModal Open={ModalOpen} Close={setModalOpen} sets={setSets} reps={setReps} weight={setWeight} exercise={setExercise} array={accesory} sets2={Sets} reps2={Reps} weight2={Weight} exercise2={Exercise} close2={Close} />
   <TopSet1  Open={ModalOpen2} Close={setModalOpen2} sets={setSets} reps={setReps} weight={setWeight} exercise={setExercise} array={topset1} sets2={Sets} reps2={Reps} weight2={Weight} exercise2={Exercise} close2={Close} backdownreps={setBackdownReps} backdownreps2={BackdownReps} backdownset={setBackdownSets} backdownset2={BackdownSets} backdownweight={setBackdownWeight} backdownweight2={BackdownWeight}/>
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
      },
      Button2:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'aqua',
        alignSelf: 'center'
      }
})