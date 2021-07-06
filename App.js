import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import LoggedOutScreen from './src/screens/LoggedOut';

export default function App() {
  return (
    <View style={styles.container}>
      <LoggedOutScreen />
      <StatusBar style="light" />
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
