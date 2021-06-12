import React, {useEffect, useState} from 'react';
import {Text, useColorScheme} from 'react-native';
import {Background} from '../components/Background';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {StyleSheet} from 'react-native';
import {FontColors} from '../assets';

export const Progress = () => {
  const [copPerDay, setCopPerDay] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [rejected, setRejected] = useState(0);
  useEffect(() => {
    const getData = async () => {};
    getData();
  });
  return (
    <Background>
      <Text style={styles.title}>Pesos al día</Text>
      <AnimatedCircularProgress
        style={styles.animatedGraph}
        size={120}
        width={15}
        fill={75}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
        arcSweepAngle={270}
        rotation={225}
        lineCap={'round'}
      />
      <Text style={styles.value}>$ {copPerDay}</Text>
      <Text style={styles.title}>Carreras aceptadas</Text>
      <Text style={styles.value}>{accepted}</Text>
      <Text style={styles.title}>Carreras rechazadas</Text>
      <Text style={styles.value}>{rejected}</Text>
    </Background>
  );
};

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignContent: 'center',
  },
  animatedGraph: {
    alignSelf: 'center',
  },
  title: {
    color: FontColors.lighter.white,
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 20,
  },
  value: {
    color: FontColors.lighter.white,
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
