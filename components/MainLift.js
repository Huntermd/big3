import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../helpers/data';

export default function MainLift(props) {
  return (
    <View>
    <View style = {styles.rowContainer}>
        <View  style={styles.barTitle}>
        <Text style={styles.barTitle}>{props.lift}</Text>
        </View>
        <View style={styles.barSection}>
        <Text>Sets</Text>
        <Text>{props.sets}</Text>
        </View>
        <View style={styles.barSection}>
        <Text>reps</Text>
        <Text>{props.reps}</Text>
        </View>
        <View style={styles.barSection}>
        <Text>Weight</Text>
        <Text>{props.weight}{data.units}</Text>
        </View>
    </View>
    <View style = {styles.rowContainer}>
        <View>
            
        <Text  style={styles.barTitle} >{props.lift}</Text>
        </View>
        <View style={styles.barSection}>
            <Text>Sets</Text>
        <Text>{props.downSets}</Text>
        </View>
        <View style={styles.barSection}>
            <Text>reps</Text>
        <Text>{props.downReps}</Text>
        </View>
        <View style={styles.barSection}>
        <Text>Weight</Text>
        <Text>{props.downWeight}{data.units}</Text>
        </View>
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