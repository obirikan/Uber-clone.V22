import { StyleSheet, Text, View } from 'react-native'
import React,{useRef,useEffect} from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'twrnc';
import { useContext } from 'react';
import { Maps } from '../Context/Context';
import MapViewDirection from 'react-native-maps-directions'


const Map = () => {
 const {origin,destination}=useContext(Maps)
 const mapRef=useRef(null)

 useEffect(() => {
     if(!origin||!destination) return
     mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
        edgepadding:{top:50,right:50,bottom:50,left:50}
     })
 }, [origin,destination])
 
  return (
  <MapView
   ref={mapRef}
   style={tw`flex-1`}
   mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005, 
      longitudeDelta: 0.005,
    }}
  >
    {
     origin&&destination&&(
        <MapViewDirection
          origin={origin.description}
          destination={destination.description}
          apikey='AIzaSyBvhOxK6g42RrBfZqtFnutVGxo_GPkXzTM'
          strokeWidth={3}
          strokeColor='black'
        />
     )
    }
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

const styles = StyleSheet.create({})