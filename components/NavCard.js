import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
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
     <Text style={tw`text-xl py-5 flex text-center`}> SUPER PUMPED!!</Text>
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
                key:'AIzaSyBvY4dayqi5VtQAYCkStCOc2989p2jvGiA',
                language:'en'
            }}
            placeholder='where to?'
            enablePoweredByContainer={false}/>
         </View>
         <Navfavs/>
     </View>

     <View style={tw`flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('rideOptions')
        }}
        
        style={tw`bg-black flex  flex-row justify-evenly w-24 px-3 py-3 rounded-full `}>
            <Icon
              name='car-outline'
              type='ionicon'
              color='white'
              size={18}
            />
            <Text style={tw`text-white`}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-evenly w-24 px-3 py-3 rounded-full `}>
            <Icon
              name='fast-food-outline'
              type='ionicon'
              color='black'
              size={18}

            />
            <Text >Eats</Text>
        </TouchableOpacity>
     </View>
     
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