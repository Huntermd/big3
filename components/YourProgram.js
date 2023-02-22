import { BlurView } from "expo-blur";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import data from '../helpers/data';
import img from '../assets/ProgramPic.jpeg';

const YourProgram = ( { title} ) => {

    const navigation = useNavigation();

    return (
        <View style={styles.containerContain}>
        <Pressable  onPress={() => navigation.navigate(title)}>
            <ImageBackground source={img} resizeMode="cover" style={styles.container} >
        <Text style={styles.myText}>Your Program</Text>
        </ImageBackground>
        </Pressable>
        </View>
        
    );
}


export default YourProgram;

const styles = StyleSheet.create({
   container :{
    width: 150 ,
    height: 150,
   flexDirection: 'column-reverse',
    color: 'black',
    

   },
   myText:{
    backgroundColor: 'grey'
   },
   containerContain:{
    alignItems: 'center'
   }
});