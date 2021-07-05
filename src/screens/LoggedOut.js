import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TouchMint</Text>
      </View>
      <Text style={styles.subTitle}>
        Para entrar com sua impressão digital clique no botão abaixo!
      </Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.title}>Entrar</Text>
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
  },
  subTitle: {
    width: '80%',
    color: '#00aa0080',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
  },
  loginButton: {
    width: 100,
    height: 100,
    backgroundColor: '#00aa0080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: '30%',
  },
});
