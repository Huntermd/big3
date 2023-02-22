import { BlurView } from "expo-blur";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import data from '../helpers/data';
import React, {useState} from 'react';
const SummaryBar = ( { title, orm, tm } ) => {

    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const Total = reps + weight
    return (
        <View>
            <View>
            <Text> Estime one rep max</Text>
            </View>
            <View>
                <Text>Weight</Text>
                <TextInput
                 style={{height: 40}}
                 placeholder= '250'
                 onChangeText={newText => setWeight(newText)}
                 />
                </View>
                <View>
                <Text>Reps</Text>
                <TextInput
                 style={{height: 40}}
                 placeholder="5"
                 onChangeText={newText => setReps(newText)}
                 
                 />
                </View>
                <View>
                <Text>{Total}</Text>
                </View>
        </View>
    );
}


export default SummaryBar;

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
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
});