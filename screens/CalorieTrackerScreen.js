import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect, useContext, createContext  } from 'react';
import { useNavigation } from '@react-navigation/native';
import NavCal from '../components/NavCal';
import FoodData from '../components/FoodData';
import axios from 'axios';

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
  const [NutData, setNutData] = useState();

  useEffect(() => {
    reqInstance.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple').then(  (response) => 
 { console.log(response);
  setNutData(response.Object.data);
  
})
.catch((error) => {
  console.log(error);
})
 

}, []);
  
  const [Nutrient,setNutrient] = useState([]);
   const navigation = useNavigation();
   const [Breakfast,setBreakfast] = useState(100);
const [Lunch,setLunch] = useState(100);
const [Dinner,setDinner] = useState(199);


  return (
    <ScrollView>
     





     <View style={styles.Container}>
    <View style={styles.NavBar}>
    <NavCal name = 'Breakfast' cal = {Breakfast}/>
    <NavCal name = 'Breakfast' cal = {Lunch}/>
    <NavCal name = 'Breakfast' cal = {Dinner}/>
    </View>
    <Text>{NutData.branded[0].food_name}</Text>
    {  Nutrient.map((data) => {
        return <FoodData/>;
      })}



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
    
  }
})

