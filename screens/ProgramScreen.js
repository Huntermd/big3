import { StyleSheet, Text, View, Pressable, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'
import MainLift from '../components/MainLift'
import Accesorys from '../components/Accesorys'
import { useState ,useEffect} from 'react'
import data from '../helpers/data'
import axios from 'axios'
import AccesorysModal from '../components/AccesorysModal'

export default function ProgramScreen({navigation,route}) {
  const url = data.url
  let reqInstance = axios.create({
    headers:{
      'content-type': 'application/json',
      'accept': 'application/json'
      
    }})
   const {logId} = route.params;
   const{name} = route.params;
   
   const [call,setCall] = useState(true);
   const[logData,setlogData] = useState(false)
   const [component,setComponent] = useState([]);
   const [ModalOpen, setModalOpen] = useState(false)

   const getlogData = () =>{
    reqInstance.get(`${url}get-logdata/${logId}`).then((res)=>{
        console.log(res.data.data)
        setlogData(res.data.data)
        


    }).catch((err)=>{
      console.log(err)
    })
      
   }

   useEffect(()=>{
    getlogData()
   },[])
   

  const handlePress = () => {
      
      
  
  }

  const RemovePress = ( ) => {


    component.pop();
    
    setComponent(
    ( component) => [...component]
      //component.filter(component => component !== component)
      //component => component.pop()
    );

  }

  if(!logData){
    return <Text>Loading</Text>
  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.myText}>{name}</Text>
      {/* <Accesorys data={logData[0]} /> */}
      

    {  logData.map((data) => {
        return <Accesorys key={data.movementId} data={data}  />;
      })}


     <View style={styles.RemoveAdd}>
  
     <Pressable style={styles.OpenButton}  onPress={() => {setModalOpen(true)}}>
        <Text style={{color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: -8}}>+</Text>
      </Pressable>
   
     </View>
      
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
      <AccesorysModal Open={ModalOpen} Close={setModalOpen} index={logData.length} logId={logId} get={getlogData}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   container:{
    marginTop: 50
   },
   myText:{
    fontSize: 20
   },
   backButton: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 12,
    
    
  },
  RemoveAdd:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  OpenButton:{
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth:4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
   
})