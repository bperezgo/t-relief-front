/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// useColorScheme,
// https://github.com/transistorsoft/react-native-background-geolocation
// https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides-V5/emui-version-dependent-0000001050042515-V5

import React from 'react';
import {Image, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './src/containers/Home';
import {Goals} from './src/containers/Goals';
import {Progress} from './src/containers/Progress';
import {HighDemandsZones} from './src/containers/HighDemandZones'
import {Colors, FontColors} from './src/assets/';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';

const Tabs = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = isDarkMode ? Colors.darker : Colors.lighter;
  const fontColors = isDarkMode ? FontColors.darker : FontColors.lighter;

  const customTextProps = {
    style: {
      fontFamily: 'Roboto-Bold',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          inactiveTintColor: fontColors.black,
          activeTintColor: fontColors.white,
          style: {
            backgroundColor: colors.secondaryBack,
          },
        }}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/icons/home.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Goals"
          component={Goals}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/icons/configuration.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Progress"
          component={Progress}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/icons/esta.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="HighDemandsZones"
          component={HighDemandsZones}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/icons/ubication.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
