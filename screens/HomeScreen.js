import { StyleSheet, Text, View ,SafeAreaView, Image,} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import {APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useContext } from 'react';
import { Maps } from '../Context/Context';
import Navfavs from '../components/Navfavs';

const HomeScreen = () => {
  const {setorigin,setdestination,origin}=useContext(Maps)
 
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
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
           styles={{
             container:{
                flex:0
             },
             textInput:{
              fontSize:18
             }

           }}
           onPress={(data, details = null) => {
            setorigin({
                 location:details.geometry.location,
                 description:data.description
               })
          }}
          fetchDetails ={true}
           query={{
             key:'AIzaSyBvhOxK6g42RrBfZqtFnutVGxo_GPkXzTM',
             language:'en'
           }}
           placeholder='where from?'
           enablePoweredByContainer={false}
       
          />
          
         <NavOptions/>
         <Navfavs/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})