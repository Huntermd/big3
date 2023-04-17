import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import SummaryBar from '../components/SummaryBar';
import YourProgram from '../components/YourProgram';
import HealthFitness from '../components/HealthFitness';
import data from '../helpers/data';
import img from '../assets/ProgramPic.jpeg';
import ProgramButton from '../components/ProgramButton';
import { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import YourProgramButton from '../components/YourProgramButton';

import bg from '../assets/weight2.jpg';

const MainScreen = ({navigation}) => {
  const [Programs,setPrograms] = useState([]);
    
       const Total = data.ormPress + data.ormDeadlift + data.ormSquat
    
       useEffect(() => {
        console.log(Programs)
        }, [Programs]
        )

    return (
    <ScrollView style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage} >
        <View style={styles.topContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Big3</Text>
            <Text style={styles.subTitle}>Strength Training</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.combined}>Your Total is </Text>
            <Text style={styles.bigNumber}>{Total} {data.units}</Text>
            <Text style={styles.competeDays}>Compete in</Text>
            <Text style={styles.bigNumber}>22 days</Text>
          </View>
        </View>
       
        <View style={styles.summaryContainer}>
        <ScrollView  style={styles.ProgramRow} horizontal={true} >
          {Programs.map((data) => {
            return <YourProgramButton name={data.Name} data={data} array={Programs} setarray={setPrograms}/>
          })}
        <ProgramButton array={setPrograms} setarray={Programs}/>
         </ScrollView>
         
    
          <SummaryBar title="Deadlift" orm={data.ormDeadlift} tm={data.tmDeadlift} />
          <SummaryBar title="Press" orm={data.ormPress} tm={data.tmPress} />
          <SummaryBar title="Squat" orm={data.ormSquat} tm={data.tmSquat} />
          <HealthFitness/>
        </View>

     
        <View style={styles.calendarContainer}>
          <Calendar style={{ color: 'white', backgroundColor: 'rgba(52, 52, 52, 0.4)'}}
          headerStyle={{ color: 'white', backgroundColor: 'rgba(52, 52, 52, 0.4)'}}
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </ScrollView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  summaryContainer: {
    flex: 1,
    width: '100%',
    marginTop: 28
  },

  titleBox: {
    width: '35%',
    marginTop: 42,
    marginLeft: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  title: {
    color: 'white',
    width: '100%',
    fontSize: 38,
    marginTop: 42,
    marginLeft: 24
  },

  subTitle: {
    color: 'white',
    width: '100%',
    fontSize: 14,
    marginLeft: 24
  },

  calendarContainer: {
    width: '65%',
    alignSelf: 'center'

  },

  combined: {
    color: 'white'
  },

  bigNumber: {
    color: 'white',
    fontSize: 28,
  },

  competeDays: {
    color: 'white',
    marginTop: 12
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  summaryBox: {
    marginTop: 42,
    marginRight: 24,
    width: '33%',

    flexDirection: 'column',
    justifyContent: 'flex-end',

  },
  ProgramRow:{
flexDirection: 'row',


  }

});
