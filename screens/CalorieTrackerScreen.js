import { Pressable, StyleSheet, Text, View, ScrollView, Modal, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect, useContext, createContext  } from 'react';
import { useNavigation } from '@react-navigation/native';
import NavCal from '../components/NavCal';
import FoodData from '../components/FoodData';
import axios from 'axios';
import { Camera , CameraType } from 'expo-camera';
import CameraComponent from '../components/CameraComponent';
import BrandedCommonTile from '../components/BrandedCommonTile';

let reqInstance = axios.create({
headers:{
  'x-app-id': 'bcdfedf4',
  'x-app-key': 'c0ba995c96bbbe9be1e53f50814145f0',
  'x-remote-user-id': '0',
  'content-type': 'application/json',
  'accept': 'application/json'
}

});



export const BreakfastContext = createContext()

export default function CalorieTrackerScreen() {

  
  const [NutData, setNutData] = useState({});
  const [count, setCount] = useState(0);

 const handlePress = ( ) => {
 
  reqInstance.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple').then(  (response) => 
  {  // console.log(response);
   
   setNutData(response.data); 
   
   
 })
 .catch((error) => {
   console.log(error);
 });

 
 }

const Open = () => (
  setModalOpen(true)


)
const Close = () => {
  setModalOpen(false)
}

const OpenApi = () => {
  setApiOpen(true)
}

const CloseApi = () => {
  setApiOpen(false)
}

useEffect(() => {
  console.log(NutData)
}, [NutData])


 const [modalOpen,setModalOpen] = useState(false);
 const [ApiOpen,setApiOpen] = useState(false);
  const [Nutrient,setNutrient] = useState([]);
   const navigation = useNavigation();
   const [Breakfast,setBreakfast] = useState(100);
const [Lunch,setLunch] = useState(100);
const [Dinner,setDinner] = useState(199);


  return (
    <ScrollView>
      <Modal visible={modalOpen} transparent={true} >
       <View style={styles.centeredView}>
       <View style={styles.modalView}>
        <View style={styles.ModalContentName}>
        <Text style={styles.ModalContentNameText}>Big Mac</Text>
        </View>
        <Pressable style={styles.backButton} onPress={() => {OpenApi(); Close();}}>
        <Text style={{color: 'grey'}}>Press me boy</Text>
      </Pressable>
   

       <Pressable style={styles.backButton} onPress={() => setModalOpen(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
       </View>
       </View>
      
      
     
    
    
      </Modal>

      <Modal visible={ApiOpen} transparent={true} >
       <View style={styles.centeredView}>
       <View style={styles.modalView}>
       <View style={styles.SearchRow}>
        <TextInput style={styles.SearchInput}/>
       <Pressable style={styles.SearchButton} onPress={handlePress}>
        <Text style={{color: 'black'}}>Press </Text>
      </Pressable>
       </View>

       <View style = {styles.ContentContainer}>
    <View style={styles.BrandedContainer}></View>

       </View>
        
      
   

       <Pressable style={styles.backButton} onPress={() => {CloseApi(); Open();}}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
       </View>
       </View>
      
      
     
    
    
      </Modal>
     





     <View style={styles.Container}>
    <View style={styles.NavBar}>
    <NavCal name = 'Breakfast' cal = {Breakfast}/>
    <NavCal name = 'Breakfast' cal = {Lunch}/>
    <NavCal name = 'Breakfast' cal = {Dinner}/>
    </View>
    <Pressable style={styles.backButton} onPress={() => navigation.navigate('Scanner')}>
      <Text>Pressssedddd</Text>
    </Pressable>
  
    <Text></Text>
    {  Nutrient.map((data) => {
        return <FoodData/>;
      })}

<Pressable style={styles.backButton}  onPress={ () => { Open() }
 }>
        <Text style={{color: 'grey'}}>Press me </Text>
      </Pressable>



    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
     </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container:{
   marginTop: 70,
   width: '100%',
   height: 'auto',
   borderColor: 'black',
   borderWidth: 2,
   minHeight: '90%',
   alignItems: 'center'

   
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
  NavBar:{
    flexDirection: 'row',
    width: '95%',
    borderColor: 'black',
    borderWidth: 2,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    width: '90%',
    height: '50%',
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
    alignItems: 'baseline',
    marginTop: 22,
  },
  ModalContentName:{
    

  },
  ModalContentNameText:{
    fontSize: 30,
    fontWeight: '900'
  },
  MicroNut:{
    
    width: '90%',
    height: '70%',
    marginTop: 5,
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  ContainNut:{
    width: '100%',
    height: '100%',
    alignItems: 'center',

  },
  NutContent:{
    width: '40%',
    height: '15%',
    borderColor: 'black',
    borderWidth: 2,
    margin: 4,
    backgroundColor: 'white',
  },
  SearchRow:{
    flexDirection: 'row',
  },
  SearchInput:{
    borderColor: 'black',
    borderWidth: 5,
    width:'80%',
    height: '100%'
  },
  SearchButton:{
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 12,
    backgroundColor: 'red',
    height: '10%',
    
  },
  ContentContainer:{
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 5,
    width:'100%',
    height: '80%'
  },
  BrandedContainer:{
    width: '50%',
    borderColor: 'black',
    borderWidth: 5,
  }
})

