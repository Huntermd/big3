import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NavCal({name, cal}) {
  return (
    <View>

    <View style={styles.Container}>
      <Text><Text style={styles.Number}>{cal}</Text> Cal</Text>
      <Text>{name}</Text>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
Number:{
    fontSize: 25,
    
},
Container:{
    alignItems: 'center'
},

})