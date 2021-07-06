import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { showMessage } from 'react-native-flash-message';

export default function App() {
  const [password, setPassword] = useState('');

  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

  // {FINGERPRINT, FACIAL_RECOGNITION, IRIS}.
  //    A value of 1 indicates fingerprint support
  //    2 indicates facial recognition support
  //    3 indicates iris recognition support (Android-only)
  //    Devices can support multiple authentication methods- i.e. [1,2]
  //    If none are supported, this method returns an empty array.

  async function verifySupports() {
    const supported = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricAvailable(supported);
    const supportedTypes =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
  }

  useEffect(() => {
    verifySupports();
  }, []);

  if (supportedTypes.indexOf(1) >= 0) {
    auth = (
      <>
        <Text style={styles.subTitle}>
          Para entrar com sua impressão digital clique no botão abaixo!
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Ionicons name="finger-print" size={60} color="#fff" />
        </TouchableOpacity>
      </>
    );
  } else if (supportedTypes.indexOf(2) >= 0) {
    auth = (
      <>
        <Text style={styles.subTitle}>
          Para entrar com o reconhecimento de rosto clique no botão abaixo!
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <MaterialCommunityIcons
            name="face-recognition"
            size={60}
            color="#fff"
          />
        </TouchableOpacity>
      </>
    );
  } else if (supportedTypes.indexOf(2) >= 0) {
    auth = (
      <>
        <Text style={styles.subTitle}>
          Para entrar com o reconhecimento de íris clique no botão abaixo!
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Ionicons name="md-eye" size={60} color="#fff" />
        </TouchableOpacity>
      </>
    );
  } else {
    auth = (
      <>
        <Text style={styles.subTitle}>
          Entre com sua senha no campo abaixo!
        </Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputPassword}
          placeholder="Entre com sua senha"
          textContentType="password"
        />
      </>
    );
  }

  async function handleBiometricAuth() {
    let biometrics = await LocalAuthentication.isEnrolledAsync;

    if (!biometrics) {
      auth = (
        <>
          <Text style={styles.subTitle}>
            Entre com sua senha no campo abaixo!
          </Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputPassword}
            placeholder="Entre com sua senha"
            textContentType="password"
          />
        </>
      );
    } else {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Entrar com biometria',
        cancelLabel: 'Entrar com senha',
        disableDeviceFallback: true,
      });

      if (biometricAuth) {
        console.log('Autenticação com biometria realizada com sucesso');
        showMessage({
          message: 'Autenticação com biometria realizada com sucesso',
          type: 'success',
        });
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="leaf" size={30} color="#fff" />
        <Text style={styles.title}>idMint</Text>
        {auth}
      </View>
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
  inputPassword: {
    height: 40,
    width: '60%',
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
});
