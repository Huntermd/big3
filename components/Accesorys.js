import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../helpers/data'
import SelectDropdown from 'react-native-select-dropdown';



export default function Accesorys(props) {
   
  return (
    <View style = {styles.rowContainer}>
      <View style={styles.barTitle}>
      <SelectDropdown
       data = {data.exercises.Legs}
       onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}  />
    
    </View>
    <View style={styles.barSection}>
      <Text>{props.sets}</Text>
    </View>
    <View style={styles.barSection}>
      <Text>{props.reps}</Text>
    </View>
    <View style={styles.barSection}>
      <Text>{props.reps}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 6,
        borderRadius: 15,
        marginLeft: 8,
        marginRight: 8,
        padding: 6
    },
    barTitle: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    barTitleText: {
        color: 'black',
        fontSize: 24,
        marginLeft: 16,
    },
    barSection: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barSectionTitle: {
        color: '#777',
        fontSize: 16
    }

})