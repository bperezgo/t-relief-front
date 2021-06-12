import React from 'react';
import {StyleProp, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../assets';

type BackgrounProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Background = ({children, style}: BackgrounProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = isDarkMode ? Colors.darker : Colors.lighter;
  return (
    <LinearGradient
      useAngle={true}
      angle={135}
      angleCenter={{x: 0.0, y: 0.0}}
      colors={[colors.secondary, colors.secondaryBack]}
      style={style}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});