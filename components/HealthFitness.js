import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YourProgram from './YourProgram';
import img from '../assets/ProgramPic.jpeg';



export default function HealthFitness() {
  return (
    <View style={styles.FitnessContainer}>
          <YourProgram title= "Program" name='Your Program' Image={img}/>
          <YourProgram title= "Health" name='Your Health' Image={img}/>
          </View>
  )
}

const styles = StyleSheet.create({
    FitnessContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }
})