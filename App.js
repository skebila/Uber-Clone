import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

//1. setup redux



export default function App() {
  return (
    <Provider store={}>
      <View style={styles.container}>
        <Text>Let's build Uber!</Text>
        <StatusBar style="auto" />
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
