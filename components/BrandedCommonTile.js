import { StyleSheet, Text, View, Modal, Pressable,Image } from 'react-native'
import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';



let reqInstance = axios.create({
    headers:{
      'x-app-id': 'bcdfedf4',
      'x-app-key': 'c0ba995c96bbbe9be1e53f50814145f0',
      'x-remote-user-id': '0',
      'content-type': 'application/json',
      'accept': 'application/json'
    }
    
    });
    
export default function BrandedCommonTile({img, name,cal,brand,id}) {
    const [modalOpen,setModalOpen] = useState(false);
    const [NutData, setNutData] = useState({});
    
    const handlePress = ( ) => {
 
     
        reqInstance.get('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=' + {id}).then(  (response) => 
        {  // console.log(response);
         
         setNutData(response.data); 
         
         
        })
        .catch((error) => {
         console.log(error);
        });
       
       }

      useEffect(() => {
        console.log(NutData)
      }, [NutData])
  return (
    <Pressable style={styles.Container}>
        <Image src = {img}/>
      <Text>{name}</Text>
      <Text>{cal}</Text>
      <Text>{brand}</Text>

      <Modal visible={modalOpen} transparent={true} >
       <View style={styles.centeredView}>
       <View style={styles.modalView}>
        <View style={styles.ModalContentName}>
        <Text style={styles.ModalContentNameText}></Text>
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
    Container:{
        flexDirection: 'row',
        width: '50%',
        height: '10%',
        flexWrap:'wrap'
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