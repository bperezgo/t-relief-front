import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Background} from '../components/Background';
import {FontColors} from '../assets/';

export const HighDemandsZones = () => {
  return (
    <Background>
      <Text style={styles.title}>Zonas de alta demanda</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/mapafalso.png')}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  title: {
    color: FontColors.lighter.white,
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: 375,
    height: 550,
  },
});
