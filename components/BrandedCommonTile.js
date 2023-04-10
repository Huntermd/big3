import { StyleSheet, Text, View, Modal, Pressable,Image } from 'react-native'
import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent';



let reqInstance = axios.create({
    headers:{
      'x-app-id': 'bcdfedf4',
      'x-app-key': 'c0ba995c96bbbe9be1e53f50814145f0',
      'x-remote-user-id': '0',
      'content-type': 'application/json',
      'accept': 'application/json'
    }
    
    });
    
export default function BrandedCommonTile({ name,cal,Press, info, Nut,id,Calories, setCalories}) {
    const [modalOpen,setModalOpen] = useState(false);
    const [NutData, setNutData] = useState({});

    const Open = () => (
      setModalOpen(true)
    
    
    )
    
   
  return (
    <Pressable style={styles.Container} onPress={Open}>
        {/* <Image source = {img.photo.thumb} alt='hi' style={styles.ImageSize}/> */}
  <View>
  <Text style={styles.text}>{name}</Text>
      <Text>{cal}Cal</Text>
  </View>
      <ModalComponent Open={modalOpen} Close={setModalOpen} Facts={info} Food={name} Pressing={Press} Nutt={Nut} id={id} Calories={Calories} setCalories={setCalories}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: 'red',
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
        borderColor: 'black' ,
        borderWidth: 2,
        justifyContent: 'space-evenly',
        borderRadius: 10
        
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
      },
      text:{
        fontSize: 9
      },
      ImageSize:{
        width: 30,
        height: 30
      }
    
})