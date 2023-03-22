import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'
import TimeSteps from '../components/TimeSteps'
import { BreakfastContext } from './CalorieTrackerScreen';

export default function HealthScreen({navigation}) {
  
  return (
    <View>
      <Text style={styles.HeadlineText}>Health and Fitness</Text>
      <TimeSteps title='Cal' />
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
  HeadlineText:{
    color: 'grey',
    fontSize: 40,
    margin: 30
  },
  
})