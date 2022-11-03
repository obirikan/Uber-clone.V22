import {  FlatList, Text, View,TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React from 'react'
import tw from 'twrnc';

const data=[
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"mapscreen"
    },
    {
        id:"456",
        title:"order food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen"
    },
]



const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <View>
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            horizontal
            renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>navigation.navigate(item.screen)}
                style={tw`p-3 pl-5 pt-5 bg-gray-200 m-2`}>
                    <View>
                        <Image
                          style={{width:120,height:120,resizeMode:'contain'}}
                          source={{uri:item.image}}
                        />
                        <Text style={tw`mt-2 ml-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full  w-10 mt-4`}
                            name='arrowright'
                            type='antdesign'
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default NavOptions
