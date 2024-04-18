import { StyleSheet, Text, View,Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import data from '../helpers/data'
import axios from 'axios';

export default function AccesorysModal({Open, Close,index,logId ,get}) {
  const url = data.url
  const [ModalOpen, setModalOpen] = useState(false)
  const [Sets,setSets] = useState();
  const [Reps, setReps] = useState();
  const [Weight, setWeight] = useState();
  const [Exercise, setExercise] = useState();
  let reqInstance = axios.create({
    headers:{
      'content-type': 'application/json',
      'accept': 'application/json'
      
    },
  })
   
    const saveLogData =() =>{
        reqInstance.post(`${url}add-logdata/${logId}`,
        {
          idx : index,
          exerciseName : Exercise,
          weight: Weight,
          sets: Sets,
          reps: Reps
    
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
        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Choose your exercise
            </Text>
        <SelectDropdown
       
       data = {data.exercises.Legs}
       onSelect={(selectedItem, index) => {
        setExercise(selectedItem)
        console.log(selectedItem, index);
        
      }}
      defaultButtonText={'Exercises'}
      
      buttonTextAfterSelection={(selectedItem, index) => {
        
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }} 
      buttonStyle={styles.dropdown} />
           
        </View>
        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your sets
            </Text>
        <TextInput style={styles.TextInputStyle}
        onChangeText={(val) => setSets(parseInt(val)) }
        />
        
     
            <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your reps
            </Text>
            <TextInput style={styles.TextInputStyle}
            onChangeText={(val) => setReps(parseInt(val))}
            />
      
     
            <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your weight
            </Text>
            <TextInput style={styles.TextInputStyleWeight}
            onChangeText={(val) => setWeight(parseInt(val))}
            />
  
      

                  <Pressable style={styles.Button} onPress={() =>  { Close(false);saveLogData();get()}}>
        
      </Pressable>
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
        width: '10%',
        alignSelf: 'center',
        height: '10%'
      },
      Button:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'orange',
        alignSelf: 'center'
      },
      dropdown:{
        alignSelf: 'center'
      },
      TextInputStyleWeight:{
        backgroundColor: 'white',
        width: '10%',
        alignSelf: 'center',
        height: '10%'
      },
})