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
import CommonTile from '../components/CommonTile';
import { Data } from '../helpers/DataFood';
import { Food } from '../helpers/FoodInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const TextColor = () => {
    let color;
    if (Calories >= 0){
      color = 'green';
    }
    if (Calories < 0){
      color = 'red';
    }
    return color;
  };

  const [Calories, setCalories] = useState(2000);
  const [NutData, setNutData] = useState(Food);
  const [Call,setCall] = useState('apple');

  const storeData =  async (value) =>{
    try {
      await AsyncStorage.setItem('@Food_Key', JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
    
  }

  const getData = async () =>{
    try {
      const myArray = await AsyncStorage.getItem('@Food_Key');
      if (myArray !== null) {
        // We have data!!
        setNutrient(JSON.parse(myArray))
        console.log(JSON.parse(myArray));
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@Food_Key')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

 const handlePress = (  ) => {
 
  reqInstance.get('https://trackapi.nutritionix.com/v2/search/instant?query='+ Call +'&self=true&branded=true&branded_food_name_only=false&common=true&common_general=true&common_grocery=true&common_restaurant=true&detailed=true&claims=false&taxonomy=false').then(  (response) => 
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
        
       <View style={styles.SearchView}>
       <Pressable  onPress={() => {CloseApi();}}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold'}}> X</Text>
      </Pressable>
       <View style={styles.SearchRow}>
        <TextInput style={styles.SearchInput}
         placeholder='Apple'
         onChangeText={(val) => setCall(val)}
        
        />
       <Pressable style={styles.SearchButton} onPress={handlePress}>
        <Text style={{color: 'black'}}>Press </Text>
      </Pressable>
       </View>

       <ScrollView style = {styles.ContentContainer} >
       {NutData.branded.map((data) => {
        return <BrandedCommonTile  name={data.brand_name_item_name} cal={data.nf_calories}  info={data.full_nutrients} Press={setApiOpen} Nut={setNutrient} id={data.nix_item_id} Calories={Calories} setCalories={setCalories}/>

       })}
        {NutData.common.map((data) => {
        return <CommonTile  name={data.food_name} cal={data.full_nutrients}  info={data.full_nutrients} Press={setApiOpen} Nut={setNutrient} id={data.tag_id} Calories={Calories} setCalories={setCalories}/>

       })}
    
       </ScrollView>
        
      
   

  
       </View>
       </View>
      
      
     
    
    
      </Modal>
     





     <View style={styles.Container}>
    <View style={styles.NavBar}>
    <Text style={{fontSize: 30, color: TextColor()}}>{Calories} Calories Left</Text>
    </View>
    {/* <Pressable style={styles.backButton} onPress={() => navigation.navigate('Scanner')}>
      <Text>Pressssedddd</Text>
    </Pressable> */}
  
    <ScrollView style={styles.ScrollContainer}>
    {  Nutrient.map((data) => {
        return <FoodData info={data.data} id={data.id} name={data.name} state={Nutrient} nut={setNutrient} data={data} Calories={Calories} setCalories={setCalories} serving1={data.serving1} serving2={data.serving2} multi={data.multi}/>;
      })}
    </ScrollView>
    

{console.log(Nutrient)}

<View >
<Pressable style={styles.OpenButton}  onPress={ () => { OpenApi(); }
 }>
        <Text style={{color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: -8}}>+</Text>
      </Pressable>
</View>



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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
    
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    
    width:'100%',
    height: '88%',
    borderBottomColor: 'black',
    borderBottomWidth: 4
  },
  BrandedContainer:{
    width: '50%',
    borderColor: 'black',
    borderWidth: 5,
  },
  SearchView:{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    width: '92%',
    height: '90%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  OpenButton:{
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth:4,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  ScrollContainer:{
    height: 'auto',
    width: '100%'
  }

})

