import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Mapscreen from './screens/Mapscreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
       <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator  screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="mapscreen" component={Mapscreen} />
                </Stack.Navigator>
            </SafeAreaProvider>
       </NavigationContainer>
    </Provider>
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
