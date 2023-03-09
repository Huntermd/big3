import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function CalorieTrackerScreen() {

   const [Breakfast, setBreakfast] = useState(0)
   const [Snack1, setSnack1] = useState(0)
   const [Lunch, setLunch] = useState(0)
   const [Snack2, setSnack2] = useState(0)
   const [Dinner, setDinner] = useState(0)

    const navigation = useNavigation();
  return (
    <View>
      <Text>CalorieTrackerScreen</Text>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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