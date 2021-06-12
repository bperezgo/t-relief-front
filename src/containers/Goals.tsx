import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  GestureResponderEvent,
} from 'react-native';
import {Background} from '../components/Background';
import {SaveButton} from '../components/SaveButton';
import {GoalType} from '../@types/';
import {FontColors} from '../assets';
import {SERVER_API_CONFIG} from '../constants';

export const Goals = () => {
  const [inputValue, setInputValue] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  // const [goals, setGoals] = useState<GoalType[]>([]);

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const handlePress = async (e: GestureResponderEvent) => {
    try {
      const body = {id: '', kind: '', unit: '', value: parseFloat(inputValue)};
      const response = await fetch(SERVER_API_CONFIG.HOST, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      // const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const getGoals = async () => {
  //     const response = await fetch(SERVER_API_CONFIG.HOST);
  //     const data = await response.json();
  //     setGoals(data);
  //   };
  //   getGoals();
  // });
  return (
    <Background>
      <View>
        <Text style={styles.title}>Metas</Text>
      </View>
      <View>
        <Text style={styles.goal}>¿Cuánto quieres que te ayude a ganar?</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleChange}
        />
      </View>
      <View style={styles.btnContainer}>
        <SaveButton onPress={handlePress} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  title: {
    alignContent: 'center',
    fontSize: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    color: FontColors.lighter.white,
    margin: 12,
  },
  goal: {
    textAlign: 'center',
    color: FontColors.lighter.white,
    margin: 16,
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  input: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    elevation: 1,
    opacity: 0.8,
    color: FontColors.lighter.white,
    textAlign: 'center',
    fontSize: 20,
  },
  btnContainer: {
    alignItems: 'center',
  },
});
