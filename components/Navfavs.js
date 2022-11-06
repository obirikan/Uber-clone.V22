import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from 'twrnc'
import { useContext ,useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Maps } from '../Context/Context';

const Navfavs = ({long,lat}) => {
    const navigation=useNavigation()
    const {setorigin,setdestination,origin}=useContext(Maps)
    const loca={
        "description": "My location",
        "location":{
            "lat":lat,
            "lng":long
        }
    }
    console.log(loca.location)
    console.log(loca.description)
    const data=[
        {
            id:"123",
            icon:"home-outline",
            location:"Home",
            destination:"London,Uk"
        },
        {
            id:"1222",
            icon:"briefcase-outline",
            location:"Work",
            destination:"Gbawe,Ghana"
        },
    ]
    
  return (
      <FlatList data={data} keyExtractor={(item)=>item.id} 
      ItemSeparatorComponent={()=>(
        <View
         style={[tw`bg-gray-200 w-100 ml-2`,{height:0.5}]}
        />
  )}
      renderItem={({item:{location,destination,icon}})=>(
        <TouchableOpacity 
        onPress={() => {
            setorigin({
                 location:loca.location,
                 description:loca.description
               })
               navigation.navigate('mapscreen')
          }}
        style={tw`flex-row p-5 `}>
             <Icon
              style={tw`mr-4 rounded-full bg-gray-400 p-3`}
              name={icon}
              type='ionicon'
              color='white'
              size={20}
             />
             <View >
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
             </View>
        </TouchableOpacity >
      )}/>
  )
}

export default Navfavs

const styles = StyleSheet.create({})