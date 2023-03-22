import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Provider from './components/Provider'
import TimeSteps from './components/TimeSteps'
export default function AppProvider() {
  return (
    <Provider>
    <TimeSteps/>
  </Provider>
  )
}

const styles = StyleSheet.create({})