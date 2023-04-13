import { StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import NutInfoRow from './NutInfoRow'
import { ServingSize } from '../helpers/ServingSizeHelper'
export default function FoodDataModel({Open, Close, Nutt,nutrition,id, Food, Facts,Calories, setCalories, multi, serving1, serving2}) {
  const CaloriesItem = Facts.filter(item => item.attr_id === 208)
  const Num =  Math.round(CaloriesItem[0].value);
    const InfoPress = () =>{
        const Array = nutrition.filter(item => item.id === id )
        let I = Array.length;
        if (I > 1){
            let index =  nutrition.indexOf(id);
         const NewArray =  nutrition.splice(index,1)
         Nutt(NewArray)
        }
        if (I <= 1){
         const NewArray = nutrition.filter(item => item.id !== id)
         Nutt(NewArray)
        }
        let Num1 = Num * multi
        setCalories(Calories + Math.round(Num1) )
       
    
    }
  return (
   <Modal
   visible={Open} transparent={true}
   >
 <View style={styles.centeredView}>
       <View style={styles.modalView}>
        <View style={styles.ModalContentName}>
     <View style={styles.ButtonRow}>
     <Pressable  onPress={() => Close(false)}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold'}}> X</Text>
      </Pressable>
      <Pressable style={styles.AddButton} onPress={() => {Close(false); InfoPress();}}>
        <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}> DELETE</Text>
      </Pressable>
     </View>
        <Text style={styles.ModalContentNameText}>{Food}</Text>
        </View>
        <View style={styles.ServingSize}>
            <Text>{multi} serving size</Text>
        </View>
     <View style={styles.ContainNut}>
    <ScrollView style={styles.Container}>
       
        {Facts.map((data) => {
        return  <NutInfoRow info={data} multi={multi}/>

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
      ModalContentName:{
        

      },
      ModalContentNameText:{
        fontSize: 12,
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
 

})