import { StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import NutInfoRow from './NutInfoRow'
import SelectDropdown from 'react-native-select-dropdown';
import data from '../helpers/data';
import { useState, useEffect } from 'react';
import { ServingSize } from '../helpers/ServingSizeHelper';
export default function ModalComponent({Open, Close, Facts, Food,Pressing,Nutt, id, Calories, setCalories}) {
 
  const [Serving, setServing] = useState(1)
  const [ServingNum, setServingNum] = useState(1);
  const [Serving2, setServing2] = useState(null)
  const [ServingNum2, setServingNum2] = useState()
  const [Multi, setMulti] = useState(1);

  useEffect(() => {
    console.log(Multi)
    
  }, [Multi])

  const CaloriesItem = Facts.filter(item => item.attr_id === 208)
  const Num =  Math.round(CaloriesItem[0].value);
    const InfoPress = (data, id, name, serving1, serving2, multi) =>{
        Nutt(component => [...component, {data, id, name, serving1, serving2, multi  }]);
         let Num = Serving + Serving2
      setCalories(Calories - Math.round(Num) )
    }
  return (
   <Modal
   visible={Open} transparent={true}
   >
 <View style={styles.centeredView}>
       <View style={styles.modalView}>
        <View >
     <View style={styles.ButtonRow}>
     <Pressable  onPress={() => Close(false)}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold'}}> X</Text>
      </Pressable>
      <Pressable style={styles.AddButton} onPress={() => {Close(false); Pressing(false); InfoPress(Facts, id, Food,ServingNum,ServingNum2,Multi)}}>
        <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}> ADD</Text>
      </Pressable>
     </View>
      <View >
      <Text style={styles.ModalContentNameText}>{Food}</Text>
     <View style={styles.ContentDropdown}>
     <SelectDropdown
       
       data = {data.ServingSize1}
       onSelect={(selectedItem, index) => {
        let NewNum = Num * selectedItem
        if (Serving2 === null){
          setMulti(selectedItem)
          setServingNum(selectedItem)
        }else{
          setMulti(selectedItem + ServingNum2)
          setServingNum(selectedItem)
        }
        // setServingNum(selectedItem)
        setServing(NewNum)
        // console.log(NewNum)
      }}
      defaultButtonText={'Size'}
      buttonTextAfterSelection={(selectedItem, index) => {
        
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }} 
      buttonStyle={styles.dropdown4BtnStyle}
      />
         <SelectDropdown
       
       data = {data.ServingSize2}
       onSelect={(selectedItem, index) => {
        let NewNum = Num * ServingSize[selectedItem][0]
        setMulti(ServingNum + ServingSize[selectedItem][0] )
        setServingNum2(ServingSize[selectedItem][0])
        setServing2(NewNum)
        // console.log(NewNum)
        // console.log(selectedItem)
        
      }}
      defaultButtonText={'Size'}
      buttonTextAfterSelection={(selectedItem, index) => {
        
        
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }} 
      buttonStyle={styles.dropdown4BtnStyle}
      />
     </View>
      
      </View>
        </View>
       
     <View style={styles.ContainNut}>
    <ScrollView style={styles.Container}>
       
        {Facts.map((data) => {
        return  <NutInfoRow info={data} multi={Multi}/>

       })}
       
    </ScrollView>
     </View>

     
       </View>
       </View>

   </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        height: '30%',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
    marginTop: 2,
    backgroundColor: 'lightgrey'       
        
    },
    Contain:{
        alignItems: 'center'
    },
    Content:{
        flexDirection: 'row',
        justifyContent: 'space-around'
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
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        width: '90%',
        height: '80%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 22,
      },
      ContentDropdown:{
       flexDirection: 'row',
       justifyContent: 'flex-end'

      },
      ModalContentNameText:{
        fontSize: 10,
        fontWeight: '900'
      },
      MicroNut:{
        
        width: '100%',
        height: '70%',
        marginTop: 5,
        
        flexDirection: 'column',
        
        justifyContent: 'space-around'
      },
      ContainNut:{
        width: '100%',
        height: '100%',
        alignItems: 'center',

      },
      NutContent:{
        width: '100%',
        height: '20%',
        borderColor: 'black',
        borderWidth: 2,
        margin: 4,
        backgroundColor: 'white',
        padding: 5,
        marginTop: 20
      },
      Container:{
        borderColor: 'black',
        borderWidth: 3,
        width: '100%',
        height: 'auto'
      },
  AddButton:{
    backgroundColor: 'red',
    width: '40%',
    height: '100%',
    borderRadius: 4,
    alignItems: 'center'
  },
  ButtonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -15
  },
  dropdown4BtnStyle: {
    width: 70,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },

})