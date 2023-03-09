import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealCalTracker({meal, val}) {
  return (
    <View style={styles.container}>
      <Text>{meal}</Text>
      <Text>{val}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%'
    }
})