import { StyleSheet, Text, View, TextInput, Modal,Pressable } from 'react-native'
import React from 'react'
import data from '../helpers/data'
import SelectDropdown from 'react-native-select-dropdown';
import { useState, useEffect } from 'react';



export default function Accesorys({data}) {
   // weight, sets,rep, exercise

  
  return (
    <View style = {styles.rowContainer}>
      <View style={styles.barTitle}>
       
     <Text style={{color: 'orange', fontSize: 25, fontWeight: 'bold'}}>{data.exerciseName}</Text>
    
    </View>
    <View style={styles.barSection}  >
    <Text style={{color: 'orange'}}>Sets</Text>
      <Text style={{color: 'orange'}}>{data.sets}</Text>
    </View>
    <View style={styles.barSection} >
    <Text style={{color: 'orange'}}>Reps</Text>
      <Text style={{color: 'orange'}}>{data.reps}</Text>
    </View>

   

     


    <View style={styles.barSection}  >
      <Text style={{color: 'orange'}}>Weight</Text>
      <Text style={{color: 'orange'}}>{data.weight}</Text>
    </View>


    

    
    </View>
  )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        marginBottom: 6,
        borderRadius: 15,
        marginLeft: 8,
        marginRight: 8,
        padding: 6,
        marginTop: 5
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
        alignItems: 'center',
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