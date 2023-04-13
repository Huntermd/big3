import { StyleSheet, Text, View, TextInput, Modal,Pressable } from 'react-native'
import React from 'react'
import data from '../helpers/data'
import SelectDropdown from 'react-native-select-dropdown';
import { useState, useEffect } from 'react';



export default function Accesorys({}) {
   
  const [modal1Open,setModal1Open] = useState(false);
  const [modal2Open,setModal2Open] = useState(false);
  const [modal3Open,setModal3Open] = useState(false);
  const [weight, setWeight] = useState(225);
  const [rep,setReps] = useState(5);
  const [sets,setSets] = useState(3);
  return (
    <View style = {styles.rowContainer}>
      <View style={styles.barTitle}>
       
      <SelectDropdown
       
       data = {data.exercises.Legs}
       onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText={'Exercises'}
      buttonTextAfterSelection={(selectedItem, index) => {
        
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}  />
    
    </View>
    <Pressable style={styles.barSection}  onPress={() => setModal3Open(true)}>
    <Text>Sets</Text>
      <Text>{sets}</Text>
    </Pressable>
    <Pressable style={styles.barSection} onPress={() => setModal2Open(true)}>
    <Text>Reps</Text>
      <Text>{rep}</Text>
    </Pressable>

    <Modal visible={modal1Open} transparent={true} >
        <View style = {styles.centeredView}>
        <View style = {styles.modalView} >
      <Text>Select your weight:</Text>
      <TextInput style={styles.CalInput} 
      placeholder='2000'
      onChangeText={(val) => setWeight(val)}
      />
      
      <Pressable style={styles.backButton} onPress={() => setModal1Open(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
        </View>
    
      </Modal>

      <Modal visible={modal2Open} transparent={true} >
        <View style = {styles.centeredView}>
        <View style = {styles.modalView} >
      <Text>Select your reps:</Text>
      <TextInput style={styles.CalInput} 
      placeholder='2000'
      onChangeText={(val) => setReps(val)}
      />
      
      <Pressable style={styles.backButton} onPress={() => setModal2Open(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
        </View>
    
      </Modal>


    <Pressable style={styles.barSection} onPress={() => setModal1Open(true)} >
      <Text>Weight</Text>
      <Text>{weight}</Text>
    </Pressable>


    <Modal visible={modal3Open} transparent={true} >
        <View style = {styles.centeredView}>
        <View style = {styles.modalView} >
      <Text>Select your Sets:</Text>
      <TextInput style={styles.CalInput} 
      placeholder='2000'
      onChangeText={(val) => setSets(val)}
      />
      
      <Pressable style={styles.backButton} onPress={() => setModal3Open(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
        </View>
    
      </Modal>

    
    </View>
  )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 6,
        borderRadius: 15,
        marginLeft: 8,
        marginRight: 8,
        padding: 6
    },
    barTitle: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    barTitleText: {
        color: 'black',
        fontSize: 24,
        marginLeft: 16,
    },
    barSection: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barSectionTitle: {
        color: '#777',
        fontSize: 16
    },
    DropDown:{
      width: 30,
      height: 10
    },
    dropdown1BtnStyle: {
      width: '60%',
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdownStyle: {
      width: '130%',
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    CalInput:{
      borderColor: 'black',
      borderWidth: 1,
      width: 60,
      height: 35,
      
      
    },
    backButton: {
      width: '35%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 32,
      borderWidth: 2,
      borderColor: 'grey',
      borderRadius: 12,
      
      
    },

})