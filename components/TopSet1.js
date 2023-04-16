import { StyleSheet, Text, View,Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import data from '../helpers/data'

export default function TopSet1({Open, Close, reps, sets, weight, exercise,array , reps2, sets2, weight2, exercise2,close2,backdownset,backdownreps,backdownweight,backdownset2,backdownreps2,backdownweight2}) {
    const [ModalOpen, setModalOpen] = useState(false)

    const InfoPress= (reps, sets,weight,exercise,backdownreps, backdownsets,backdownweight) =>{
      array(component => [...component, {reps,sets,weight,exercise,backdownreps, backdownsets,backdownweight} ])
    }

  return (
    <Modal 
    visible={Open} transparent={true}
    >
        <View style={styles.centeredView}>
            <View style={styles.container}>
            <Pressable  onPress={() => Close(false)}>
        <Text style={{color: 'grey', fontSize: 25, fontWeight: 'bold'}}> X</Text>
      </Pressable>
        <View >
        <Text style={{color: 'aqua', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
                Choose your exercise
            </Text>
        <SelectDropdown
       
       data = {data.exercises.Legs}
       onSelect={(selectedItem, index) => {
        exercise(selectedItem)
        console.log(selectedItem, index);
        
      }}
      defaultButtonText={'Exercises'}
      
      buttonTextAfterSelection={(selectedItem, index) => {
        
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }} 
      buttonStyle={styles.dropdown} />
           
        </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

       <View>
        <Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your sets
            </Text>
        <TextInput style={styles.TextInputStyle}
        onChangeText={(val) => sets(parseInt(val)) }
        />
        </View>
       
        <View>
        <Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your reps
            </Text>
            <TextInput style={styles.TextInputStyle}
            onChangeText={(val) => reps(parseInt(val))}
            />
        </View>
     
            
      <View>
      <Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
                Select your weight
            </Text>
            <TextInput style={styles.TextInputStyleWeight}
            onChangeText={(val) => weight(parseInt(val))}
            />
      </View>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'space-evenly',marginTop: 5, marginBottom: 5}}>

<View >
 <Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
         backdown sets
     </Text>
 <TextInput style={styles.TextInputStyle}
 onChangeText={(val) => backdownset(parseInt(val)) }
 />
 </View>

 <View>
 <Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
         backdown reps
     </Text>
     <TextInput style={styles.TextInputStyle}
     onChangeText={(val) => backdownreps(parseInt(val))}
     />
 </View>

     
<View>
<Text style={{color: 'aqua', fontSize: 10, fontWeight: 'bold', alignSelf: 'center'}}>
         Backdown weight
     </Text>
     <TextInput style={styles.TextInputStyleWeight}
     onChangeText={(val) => backdownweight(parseInt(val))}
     />
</View>
</View>
           
  
      

                  <Pressable style={styles.Button} onPress={() =>  { Close(false); close2(false); InfoPress(reps2,sets2,weight2,exercise2,backdownreps2,backdownset2,backdownweight2)}}>
        
      </Pressable>
            </View>
       
        </View>


    </Modal>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        backgroundColor: 'black',
        height: '40%',
        margin: 20,
        borderRadius: 20,
        padding: 5
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 22,
      },
      TextInputStyle:{
        backgroundColor: 'white',
        width: 40,
        alignSelf: 'center',
        height: 35
      },
      Button:{
        width: '20%',
        height: '20%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'aqua',
        alignSelf: 'center'
      },
      dropdown:{
        alignSelf: 'center'
      },
      TextInputStyleWeight:{
        backgroundColor: 'white',
        width: 40,
        alignSelf: 'center',
        height: 35
      },
})