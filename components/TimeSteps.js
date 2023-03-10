import { StyleSheet, Text, View, Pressable, Modal, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pedometer } from 'expo-sensors';
import { useState, useEffect } from 'react';
import MealCalTracker from './MealCalTracker';


export default function TimeSteps({title}) {
const [modalOpen,setModalOpen] = useState(false);
const [Calories, setCalories] = useState(2000)
const [CurrentCalories, setCurrentCalories] = useState(0)

  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  const burned = pastStepCount / 20

  const navigation = useNavigation();

  return (
    <View style = {styles.Contain}>
    <View style={styles.Container}>
      <View style={styles.time}>
      <Text style={styles.TimeText}>11:30am</Text>
      </View>
      <View style={styles.steps}>
     
    <Text style={styles.StepsText}>{pastStepCount} steps </Text>
    <Text>{Math.round(burned)} Cal burned</Text>
      </View>
       </View>

       <Modal visible={modalOpen} transparent={true} >
        <View style = {styles.centeredView}>
        <View style = {styles.modalView} >
      <Text>Change your Calories:</Text>
      <TextInput style={styles.CalInput} 
      placeholder='2000'
      onChangeText={(val) => setCalories(val)}
      />
      
      <Pressable style={styles.backButton} onPress={() => setModalOpen(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
        </View>
    
      </Modal>
        
    <View style={styles.FoodTracker} >
    <Pressable style={styles.Calories} onPress={() => setModalOpen(true)}>
      <Text>Daily Calories</Text>
        <Text style={styles.CaloriesText}>{CurrentCalories}/{Calories}Cal</Text>
      </Pressable>
     
      <Pressable onPress={() => navigation.navigate(title)} style={styles.CalorieTrackerContainer}>
      <Text>Daily Calories</Text>
      <MealCalTracker meal='Breakfast' val= '0'/>
      <MealCalTracker meal='Snack1' val= '0'/>
      <MealCalTracker meal='Lunch' val= '0'/>
      <MealCalTracker meal='Snack2' val= '0'/>
      <MealCalTracker meal='Dinner' val= '0'/>
      </Pressable>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        justifyContent: 'center',
        
        borderLeftColor: 'black',
        borderWidth: 5,
        borderBottomWidth: 0
    },
    time:{
        borderColor: 'black',
        borderWidth: 5,
        height: 100,
        width: 200,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    steps:{
        borderColor: 'black',
        borderWidth: 5,
        width: 200,
        height:200,
        backgroundColor: 'orange',
        borderBottomStartRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    FoodTracker:{
      width: 410,
      height: 500,
      borderColor: 'black',
        borderWidth: 5,
        borderTopWidth: 0,
      marginTop: 0,
      
      
        
        
    },
    Contain:{
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    Calories:{
      alignItems: 'center',
      justifyContent: 'center',
      
      width: 200,
      height: 100,
      marginTop: -100

    },
    CaloriesText:{
      fontSize: 17,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1 
    },
    TimeText:{
      fontSize: 40,
      backgroundColor: 'white'
    },
    StepsText:{
      fontSize: 25
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
    CalorieTrackerContainer:{
      
      height: '100%',
      alignItems: 'center',
      backgroundColor:'lightgrey',
      justifyContent: 'space-evenly'
    }
})