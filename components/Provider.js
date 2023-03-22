import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext, useState } from 'react'
export const MyContext = createContext(0);
const Provider = ({children}) => {
const [state, SetState] = useState(100);
    
  return (
    <MyContext.Provider value= {{state,SetState}}>
        {children}
    </MyContext.Provider>
  )
}

export default Provider

const styles = StyleSheet.create({})