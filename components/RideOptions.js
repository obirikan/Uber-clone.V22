import { StyleSheet, Text, SafeAreaView ,TouchableOpacity,View} from 'react-native'
import React from 'react'
import  tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const RideOptions = () => {
  const navigation=useNavigation()
  const data=[
    {
        id:"123-x",
        title:"Uber-X",
        multiplier:"Home",
        image:"London,Uk"
    },
    {
      id:"123",
      title:"Uber-Xl",
      multiplier:"Home",
      image:"London,Uk"
  },
    {
      id:"123",
      title:"Uber LUX",
      multiplier:"Home",
      image:"London,Uk"
  },
]

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('navcard')
          }}
          style={tw`absolute top-5 left-5 rounded-full`}>
             <Icon
               name='arrow-back-outline'
               type='ionicon'
              />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl font-semibold`}>Select a Ride</Text>
      </View>

    </SafeAreaView>
  )
}

export default RideOptions

const styles = StyleSheet.create({})