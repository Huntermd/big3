import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TimeSteps() {
  return (
    <View style={styles.Container}>
      <View style={styles.time}>
      <Text >11:30am</Text>
      </View>
      <View style={styles.steps}>
      <Text >11:30am</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    time:{
        borderColor: 'black',
        borderWidth: 5,
        height: 50,
        width: 100
    },
    steps:{
        borderColor: 'black',
        borderWidth: 5,
        width: 100,
        height:100,
        backgroundColor: 'orange'
    }
})