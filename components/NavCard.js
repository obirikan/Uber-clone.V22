import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useContext } from 'react';
import { Maps } from '../Context/Context';
import { useNavigation } from '@react-navigation/native';
import Navfavs from './Navfavs';

const NavCard = () => {
    const {setdestination,origin}=useContext(Maps)
    const navigation=useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
     <Text style={tw`text-xl py-5 flex text-center`}>Kay You are SUPER PUMPED!!</Text>
     <View style={tw`border-t border-gray-200 flex-shrink`}>
         <View >
            <GooglePlacesAutocomplete
            styles={styles}
            onPress={(data, details = null) => {
                setdestination({
                    location:details.geometry.location,
                    description:data.description
                })
                navigation.navigate('rideOptions')
            }}
            fetchDetails ={true}
            query={{
                key:'AIzaSyBvhOxK6g42RrBfZqtFnutVGxo_GPkXzTM',
                language:'en'
            }}
            placeholder='where to?'
            enablePoweredByContainer={false}/>
         </View>
     </View>
     <Navfavs/>
    </SafeAreaView>
  )
}

export default NavCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:'#0000000F',
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }

})