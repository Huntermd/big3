import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodList } from '../helpers/FoodHelper'
export default function NutInfoRow({info}) {
  return (
    <View style={styles.InfoContainer}>
        <Text>
            {FoodList[info.attr_id][1]} :
        </Text>
        <Text>
            { Math.round(info.value)}
        {FoodList[info.attr_id][2]}
        </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    InfoContainer:{
        borderColor: 'black',
        borderWidth: 3,
        width: '100%',
        height: 'auto',
        
        padding: 5,
        flexDirection: 'row'
      }
})