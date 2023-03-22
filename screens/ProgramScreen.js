import { StyleSheet, Text, View, Pressable, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'
import MainLift from '../components/MainLift'
import Accesorys from '../components/Accesorys'
import { useState } from 'react'
import data from '../helpers/data'

export default function ProgramScreen({navigation}) {

   const [component,setComponent] = useState([]);

  const handlePress = () => {
      
      
    setComponent(component => [...component, '1']);
  }

  const RemovePress = ( ) => {


    component.pop();
    
    setComponent(
    ( component) => [...component]
      //component.filter(component => component !== component)
      //component => component.pop()
    );

  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.myText}>Week 1 Day 1</Text>
      <MainLift lift = 'squat' sets = '1' reps = '4' weight = '270'  downSets = '4' downReps = '4' downWeight = '250'/>
      <Accesorys  />
      <Accesorys   />
      <Accesorys   />

    {  component.map((data) => {
        return <Accesorys key={data.id} />;
      })}


     <View style={styles.RemoveAdd}>
     <Pressable  onPress={handlePress} >
      
      <View>
        <Text> Press me </Text>
      </View>
    </Pressable>

    <Pressable  onPress={RemovePress} >
    
    <View>
      <Text> delete  me </Text>
    </View>
  </Pressable>
     </View>
      
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
    </ScrollView>
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
    
    
  },
  RemoveAdd:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
   
})