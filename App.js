import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store';

export default function App() {
  return (
    <Provider store={store}>
     <View style={styles.container}>
      <Text>Hello</Text>
    </View>
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
