import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
import FoodDataModel from './FoodDataModel';

export default function FoodData({info, id, name, state, nut, data,Calories, setCalories, serving1, serving2,multi }) {
    const [modalOpen,setModalOpen] = useState(false);
    const CaloriesItem = info.filter(item => item.attr_id === 208)
    const Num =  Math.round(CaloriesItem[0].value);
    const ProteinItem = info.filter(item => item.attr_id === 203)
    const Pro =  Math.round(ProteinItem[0].value);
    const CarbsItem = info.filter(item => item.attr_id === 205)
    const Carbs =  Math.round(CarbsItem[0].value);
    const FatItem = info.filter(item => item.attr_id === 204)
    const Fat =  Math.round(FatItem[0].value);
  return (
    <Pressable style={styles.Contain} onPress={() => setModalOpen(true)}>
<View style={styles.container}>
 <View style={styles.ContentView}>
 <Text style={{fontSize: 10}}>{name}</Text> 
 <View style={styles.Content}>
   
    <Text>{Math.round(Num * multi)} Calories</Text>
    <Text> {Math.round(Pro * multi)}g Protein</Text>
    <Text> {Math.round(Carbs * multi)}g Carbs</Text>
    <Text> {Math.round(Fat * multi)}g Fats</Text>
    </View>
 </View>
     
 </View>
    
<FoodDataModel Open={modalOpen} Close={setModalOpen} Facts={info} nutrition={state} Food={name} Nutt={nut} id={id} data={data} Calories={Calories} setCalories={setCalories} multi={multi}/>



    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
    marginTop: 2,
    backgroundColor: 'lightgrey',
    borderRadius: 10       
        
    },
    Contain:{
        alignItems: 'center'
    },
    Content:{
        flexDirection: 'row',
        justifyContent: 'space-around'
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
      modalView: {
        margin: 20,
        backgroundColor: '#800000',
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
      ContenView:{
        flexDirection: 'column'
      }
})