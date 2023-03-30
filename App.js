import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DeadLiftScreen from './screens/DeadLiftScreen';
import PressScreen from './screens/PressScreen';
import SquatScreen from './screens/SquatScreen';
import ProgramScreen from './screens/ProgramScreen';
import HealthScreen from './screens/HealthScreen';
import CalorieTrackerScreen from './screens/CalorieTrackerScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimeSteps from './components/TimeSteps';
import Provider from './components/Provider';
import CameraComponent from './components/CameraComponent';
import Scanner from './components/Scanner';

const Stack = createNativeStackNavigator();
// <Stack.Screen name="Scanner" component={Scanner}/>
export default function App() {
  return (
    <NavigationContainer>

      
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="Cal" component={CalorieTrackerScreen}/>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="Deadlift" component={DeadLiftScreen} />
        <Stack.Screen name="Press" component={PressScreen} />
        <Stack.Screen name="Squat" component={SquatScreen} />
        <Stack.Screen name="Program" component={ProgramScreen} />
        <Stack.Screen name="Health" component={HealthScreen}/>
        <Stack.Screen name="Camera" component={CameraComponent}/>
        <Stack.Screen name="Scanner" component={Scanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

