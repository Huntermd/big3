import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, createContext } from 'react'

import CalorieTrackerScreen from '../screens/CalorieTrackerScreen';
import MealCalTracker from './MealCalTracker';

export const BreakContext = createContext(0);
export default function Breakfast() {
  
    const [Breakfast,setBreakfast] = useState(100);
  return (
    
    <BreakContext.Provider value={Breakfast}>
      <CalorieTrackerScreen/>
      <MealCalTracker/>
    </BreakContext.Provider>
  )
}

const styles = StyleSheet.create({
    Number:{
        fontSize: 25,
        
    },
})