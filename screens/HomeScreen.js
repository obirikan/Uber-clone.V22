import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import {APIKEY} from "@env"

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw` h-full`}>
      <View style={tw`p-5 h-full`}>
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
          <GooglePlacesAutocomplete
          placeholder='where from'
          styles={{
            container:{
               flex:0
            },
            textInput:{
               fontSize:15,
            },
         }}
          query={{
            key:'AIzaSyBxKxEfHLM1EhnPacoxM4yLiXIZVZ5r6h8',
            language: 'en',
          }}

          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={200}
         />

         <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})