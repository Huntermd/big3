import { StyleSheet, Text, View, Modal,Pressable,ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import InputModal from './InputModal';
import Accesorys from './Accesorys';
import Topset1Component from './Topset1Component';
export default function ModalProgram({Open,Close, Name,Close2,array,setarray}) {
const [ModalOpen,setModalOpen] = useState(false)
const [Accesory, setAccesory] = useState([]);
const [TopSet1, setTopSet1] = useState([]);

const InfoPress = ({accesory,topset,name}) =>{
  array(component => [...component, {accesory,topset, name} ])
 
}
useEffect(() => {
  console.log(Accesory)
  }, [Accesory]
  )

  return (
    <Modal
    visible={Open}
    >
        <View style={styles.centeredView}>
            <ScrollView style={styles.container}>
                <View style={styles.NameBar}>
                <Pressable  onPress={() => {Close(false); Close2(false)}}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold', margin:5}}> X</Text>
        
      </Pressable>
      <Text  style={{color: 'grey', fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{Name}</Text>
      <Pressable style={styles.Button} onPress={() =>  { Close(false); Close2(false); InfoPress(Accesory,TopSet1, Name)}}>
        
        </Pressable>
                </View>
                <View >
                {TopSet1.map((data) =>{
                 return <Topset1Component sets={data.sets} weight={data.weight} rep={data.reps} exercise={data.exercise} sets2={data.backdownsets} rep2={data.backdownreps} weight2={data.backdownweight}/>
                 })}
      {Accesory.map((data) =>{
        return <Accesorys sets={data.sets} weight={data.weight} rep={data.reps} exercise={data.exercise}/>
      })}
      


<Pressable style={styles.OpenButton}  onPress={ () =>  setModalOpen(true)
 }>
        <Text style={{color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: -8}}>+</Text>
      </Pressable>
</View>
         
            </ScrollView>
       
        </View>
     <InputModal Open={ModalOpen} Close={setModalOpen} accesory={setAccesory} topset1={setTopSet1} />
    </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 22,
      },
      container:{
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
      },
      NameBar:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '100%',
        height: 100,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
      Button:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'red',
        alignSelf: 'center'
      }
})