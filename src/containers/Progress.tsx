import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Background} from '../components/Background';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {StyleSheet} from 'react-native';
import {FontColors} from '../assets';
import {SERVER_API_CONFIG} from '../constants';

export const Progress = () => {
  const [copPerDay, setCopPerDay] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [percentCompleted, setPercentCompleted] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const driverId = SERVER_API_CONFIG.DRIVER_ID;
      const [fareResponse, countResponse, goalResponse] = await Promise.all([
        fetch(`${SERVER_API_CONFIG.HOST}/race/fare/${driverId}`),
        fetch(`${SERVER_API_CONFIG.HOST}/race/count/${driverId}`),
        fetch(
          `${SERVER_API_CONFIG.HOST}/driver/${SERVER_API_CONFIG.DRIVER_ID}`,
        ),
      ]);
      const [fare, count, goal] = await Promise.all([
        fareResponse.json(),
        countResponse.json(),
        goalResponse.json(),
      ]);
      const accumulated = fare.body[0].amount;
      setCopPerDay(fare.body[0].amount);
      setAccepted(count.body.accepted);
      setRejected(count.body.rejected);
      const inputVal = goal.body[0].goals[0].value;
      let percent = parseInt(
        (100 * parseFloat(accumulated)) / parseFloat(inputVal),
      );
      percent = percent <= 100 ? percent : 100;
      setPercentCompleted(percent);
    };
    getData();
  }, []);
  return (
    <Background>
      <Text style={styles.title}>Pesos al día</Text>
      {percentCompleted && (
        <AnimatedCircularProgress
          style={styles.animatedGraph}
          size={120}
          width={15}
          fill={percentCompleted}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          arcSweepAngle={270}
          rotation={225}
          lineCap={'round'}
        />
      )}
      <Text style={styles.value}>{percentCompleted} %</Text>
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
