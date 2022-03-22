/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, ViewStyle} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BlurView} from '@react-native-community/blur';

const App = () => {
  const backgroundStyle: ViewStyle = {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <BlurView style={{height: 200, width: 200}} blurType={'dark'}>
        <Text style={{color: Colors.lighter}}>Hello world</Text>
      </BlurView>
    </SafeAreaView>
  );
};

export default App;
