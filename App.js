import { StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Mapscreen from './screens/Mapscreen';
import Context from './Context/Context';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Context>
    <KeyboardAvoidingView 
     style={{flex:1}}
     behavior={Platform.OS==="ios"?"padding":"height"}
     keyboardVerticalOffset={Platform.OS==='ios'?-64:0}

     >
       <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator  screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="mapscreen" component={Mapscreen} />
                </Stack.Navigator>
            </SafeAreaProvider>
       </NavigationContainer>
    </KeyboardAvoidingView>
    </Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
