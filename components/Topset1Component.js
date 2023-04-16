import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Accesorys from './Accesorys'
export default function Topset1Component({sets,sets2,rep,rep2,weight,weight2,exercise}) {
  return (
    <>
      <Accesorys sets={sets} rep={rep} weight={weight} exercise={exercise}/>
      <Accesorys sets={sets2} rep={rep2} weight={weight2} exercise={exercise}/>
    </>
  )
}

const styles = StyleSheet.create({})