import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { useState } from 'react';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function exercises() {
    const router = useRouter();
    const [exercises,setExercises] = useState(demoExercises)
    const item = useLocalSearchParams();
useEffect(()=>{
    if(item) getExercises(item.name)
},[item])

const getExercises = async(bodyPart) =>{
    let data = await fetchExercisesByBodypart(bodyPart);
    setExercises(data)

}
  return (
    <ScrollView>
       <StatusBar style='light'/>
       <Image 
       source={item.image}
       style={{width:wp(100),height:hp(45)}}
       className="rounded-b-[40px]"
       />
       <TouchableOpacity
       onPress={()=> router.back()}
          className="bg-rose-500 mx-4 absolute flex justify-center pr-1 items-center rounded-full"
          style={{height: hp(5.5), width: hp(5.5), marginTop:hp(7)}}
          >
             <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
       </TouchableOpacity>


    </ScrollView>
  )
}