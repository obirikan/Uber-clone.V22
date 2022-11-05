import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavCard from '../components/NavCard';
import RideOptions from '../components/RideOptions';


const Mapscreen = () => {
const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}><Map/></View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen
            name='navcard'
            component={NavCard}
           />
            <Stack.Screen
            name='rideOptions'
            component={RideOptions}
           />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default Mapscreen

const styles = StyleSheet.create({})