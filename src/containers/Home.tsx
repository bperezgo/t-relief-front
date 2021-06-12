import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Image, View} from 'react-native';
import {Background} from '../components/Background';
import {Colors, FontColors} from '../assets';

export const Home = () => (
  <Background style={styles.contanier} colorSecondary="#fefefe">
    <Image style={styles.image} source={require('../assets/icons/logo.png')} />
    <View style={styles.callToAction}>
      <Text style={styles.callToActionMessage}>A trabajar</Text>
    </View>
  </Background>
);

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  callToAction: {
    backgroundColor: Colors.lighter.mainBackWithOpacity,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 125,
    elevation: 5,
    opacity: 0.7,
  },
  callToActionMessage: {
    color: FontColors.lighter.white,
    fontSize: 36,
    alignSelf: 'center',
  },
});
