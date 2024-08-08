import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {  GestureHandlerRootView } from 'react-native-gesture-handler';


const _layout = () => {
  LogBox.ignoreLogs(['Warning: Failed prop type'])
  return (
    <GestureHandlerRootView style={{flex:1}}>
   <Stack
   screenOptions={{
    headerShown:false
   }}
   >
    <Stack.Screen name="exercises" options={{
      presentation:"fullScreenModal"
    }} />
   </Stack>
   </GestureHandlerRootView>
  )
}

export default _layout