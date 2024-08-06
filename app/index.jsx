import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


const index = () => {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style='light'/>
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')}/>
      <LinearGradient
      colors={['transparent', '#18181b']}
      style={{width: wp(100), height: hp(70)}}
      start={{x:0.5, y:0}}
      end={{x:0.5, y:0.8}}
      className="flex justify-end pb-12 space-y-8"
      >
        <View className="flex items-center">
<Text className="text-white">
    Best <Text className="text-rose-500">Wroktouts</Text>
</Text>
        </View>
      </LinearGradient>

    </View>
  )
}

export default index