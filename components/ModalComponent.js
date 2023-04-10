import { StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import NutInfoRow from './NutInfoRow'

export default function ModalComponent({Open, Close, Facts, Food,Pressing,Nutt, id, Calories, setCalories}) {
  const CaloriesItem = Facts.filter(item => item.attr_id === 208)
  const Num =  Math.round(CaloriesItem[0].value);
    const InfoPress = (data, id, name) =>{
        Nutt(component => [...component, {data, id, name  }]);
        
      setCalories(Calories - Num )
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
      <Pressable style={styles.AddButton} onPress={() => {Close(false); Pressing(false); InfoPress(Facts, id, Food)}}>
        <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}> ADD</Text>
      </Pressable>
     </View>
        <Text style={styles.ModalContentNameText}>{Food}</Text>
        </View>
       
     <View style={styles.ContainNut}>
    <ScrollView style={styles.Container}>
       
        {Facts.map((data) => {
        return  <NutInfoRow info={data}/>

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
        fontSize: 15,
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
  }

})