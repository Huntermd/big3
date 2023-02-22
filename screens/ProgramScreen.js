import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import MainLift from '../components/MainLift'
import Accesorys from '../components/Accesorys'
export default function ProgramScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>Week 1 Day 1</Text>
      <MainLift lift = 'squat' sets = '1' reps = '4' weight = '270'  downSets = '4' downReps = '4' downWeight = '250'/>
      <Accesorys sets = '3'  reps= '10' weight = ''/>
      <Accesorys sets = '4'  reps= '8' weight = ''/>
      <Accesorys sets = '5'  reps= '15' weight = ''/>
      
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    marginTop: 50
   },
   myText:{
    fontSize: 20
   },
   backButton: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 12,
    
    
  }
   
})