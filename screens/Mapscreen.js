import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
//https://links.papareact.com/gzs
const Mapscreen = () => {
  return (
    <SafeAreaView style={tw` h-full`}>
      <View style={tw`p-5`}>
              <Text>hello i am map screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default Mapscreen

const styles = StyleSheet.create({})