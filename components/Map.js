import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useRef,useEffect} from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useContext } from 'react';
import { Maps } from '../Context/Context';
import MapViewDirection from 'react-native-maps-directions'
import axios from 'axios';
import { fonts } from '@rneui/base';
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const Map = () => {
 const {origin,destination,settime}=useContext(Maps)
 const navigation=useNavigation()

 const mapRef=useRef(null)
 console.log(origin);

 useEffect(() => {
     if(!origin||!destination) return
     mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
        edgepadding:{top:50,right:50,bottom:50,left:50}
     })
 }, [origin,destination])

 useEffect(() => {
  const apikey=''
    const travel=async ()=>{
        axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&units=imperial&key=${apikey}`).then((res)=>{
          settime(res.data.rows[0].elements[0])
      }).catch((err)=>console.log(err))
    }
   travel()
}, [origin,destination,''])

  return (
  <MapView
   ref={mapRef}
   style={tw`flex-1`}
   mapType='satellite'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005, 
      longitudeDelta: 0.005,
    }}
    onPress={(data) => {console.log(data.currentTarget.location)}}
  >
    <TouchableOpacity 
             onPress={()=>{
              navigation.navigate("Home")
             }}
             style={tw`absolute top-6 left-3 bg-black p-3 rounded-full`}
    >
    <Icon
               name='arrow-back-outline'
               type='ionicon'
               color='white'
              />

    </TouchableOpacity>
    {
     origin?.location&&(
        <Marker
        coordinate={{
            latitude:origin.location.lat,
            longitude:origin.location.lng
        }}
         title="kayspoint"
         description={origin.description}
         identifier='origin'
         onPress={()=>{
          navigation.navigate("page")
         }}
         onLongPress={()=>{
          console.log('hello')
         }}
        />
     )
    }

    {
     destination?.location&&(
        <Marker
        coordinate={{
            latitude:destination.location.lat,
            longitude:destination.location.lng
        }}
         title="kayspoint"
         description={destination.description}
         identifier='destination'
        />
     )
    }
</MapView>
  )
}

export default Map

const styles = StyleSheet.create({
  back:{
    fontSize:50,
    position:'relative',
    top:30,
    left:10,
  }
})