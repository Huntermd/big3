import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import bg from '../assets/belt2.jpg';
import { useState } from 'react';
import data from '../helpers/data';
const DeadLiftScreen = ({navigation}) => {

 


const [Summary, setText] = useState(data.Summary.Squat.BackSquat);

const handlePress = () => {
      
  data.Summary.Squat.FrontSquat
setText(data.Summary.Squat.FrontSquat);
}


  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage} >
      <Text style={{color: 'white'}}>DeadLiftScreen</Text>

    <Text style={styles.Header}>{Summary.Header} </Text>

<Pressable style={styles.backButton} onPress={handlePress}>
  <Text style={{color: 'white'}}>Press me </Text>
</Pressable>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'white'}}>Back</Text>
      </Pressable>

      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

export default DeadLiftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12
  },
  Header:{
    color: 'white',
    fontSize: 20
  }
});
