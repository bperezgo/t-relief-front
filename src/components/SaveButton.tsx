import React from 'react';
import {Pressable, StyleSheet, Text, GestureResponderEvent} from 'react-native';
import {Colors, FontColors} from '../assets';

type SaveButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export const SaveButton = ({onPress}: SaveButtonProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>Guardar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    elevation: 3,
    backgroundColor: Colors.lighter.main,
    width: '80%',
    marginTop: 20,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: FontColors.lighter.white,
    fontSize: 18,
  },
});
