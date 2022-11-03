import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
//https://links.papareact.com/gzs
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white-200 h-full`}>
      <View style={tw`p-2`}>
         <Image 
           style={{
            width:100,
            height:100,
            resizeMode:'contain'
           }}
           source={{
               uri:'https://links.papareact.com/gzs'
           }}
         />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})