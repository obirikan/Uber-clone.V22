import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from '../components/Map';

import { createStackNavigator } from '@react-navigation/stack';
import NavCard from '../components/NavCard';
import RideOptions from '../components/RideOptions';
import { Icon } from '@rneui/base';


const Mapscreen = () => {
const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-full`}><Map/></View>
    </View>
  )
}

export default Mapscreen

const styles = StyleSheet.create({})