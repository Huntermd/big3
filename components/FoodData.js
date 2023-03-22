import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
export default function FoodData() {
    const [modalOpen,setModalOpen] = useState(false);
  return (
    <Pressable style={styles.Contain} onPress={() => setModalOpen(true)}>
<View style={styles.container}>
    <View style={styles.Content}>
    <Text>Big Mac</Text>
    <Text>100 Calories</Text>
    <Text> 10g Protein</Text>
    <Text> 90g Carbs</Text>
    <Text> 90g Fats</Text>
    </View>
     
 </View>

 <Modal visible={modalOpen} transparent={true} >
       <View style={styles.centeredView}>
       <View style={styles.modalView}>
        <View style={styles.ModalContentName}>
        <Text style={styles.ModalContentNameText}>Big Mac</Text>
        </View>
       <Text>400cals</Text>
     <View style={styles.ContainNut}>
     <View style={styles.MicroNut}>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>

       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       <View style={styles.NutContent}>
       <Text>400cals</Text>
       <Text>Protein</Text>
       </View>
       


       </View>
     </View>

       <Pressable style={styles.backButton} onPress={() => setModalOpen(false)}>
        <Text style={{color: 'grey'}}>Back</Text>
      </Pressable>
       </View>
       </View>
      
      
     
    
    
      </Modal>




    </Pressable>
    
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
        backgroundColor: '#800000',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        width: '90%',
        height: '50%',
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
        fontSize: 30,
        fontWeight: '900'
      },
      MicroNut:{
        
        width: '90%',
        height: '70%',
        marginTop: 5,
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      ContainNut:{
        width: '100%',
        height: '100%',
        alignItems: 'center',

      },
      NutContent:{
        width: '40%',
        height: '15%',
        borderColor: 'black',
        borderWidth: 2,
        margin: 4,
        backgroundColor: 'white',
      }
})