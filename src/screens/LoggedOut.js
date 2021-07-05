import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Entypo, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="leaf" size={30} color="#fff" />
        <Text style={styles.title}>TouchMint</Text>
      </View>
      <Text style={styles.subTitle}>
        Para entrar com sua impressão digital clique no botão abaixo!
      </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Ionicons name="finger-print" size={60} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
  },
  header: {
    width: '100%',
    backgroundColor: '#00aa0080',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 100,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  subTitle: {
    width: '80%',
    color: '#00aa0080',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
  },
  loginButton: {
    width: 100,
    height: 100,
    backgroundColor: '#00aa0080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: '30%',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.2,
  },
});
