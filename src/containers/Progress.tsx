import React from 'react';
import {Text} from 'react-native';
import {Background} from '../components/Background';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export const Progress = () => {
  return (
    <Background>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      />
    </Background>
  );
};
