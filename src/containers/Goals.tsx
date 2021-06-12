import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, TextInput} from 'react-native';
import {Background} from '../components/Background';
import {GoalType} from '../@types/';
import {Colors, FontColors} from '../assets';

export const Goals = () => {
  const [inputValue, setInputValue] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const colors = isDarkMode ? Colors.darker : Colors.lighter;
  const [goals, setGoals] = useState<GoalType[]>([]);

  const handleChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <Background style={styles.container}>
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
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
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
});
