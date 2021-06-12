import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Image, View} from 'react-native';
import {Background} from '../components/Background';

export const Home = () => (
  <Background style={styles.contanier} colorSecondary="#fefefe">
    <Image style={styles.image} source={require('../assets/icons/logo.png')} />
    <View>
      {/* <Text>A trabajar</Text> */}
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
});
