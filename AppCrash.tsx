import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BlurView} from '@react-native-community/blur';
const Stack = createNativeStackNavigator();
function First({navigation}) {
  useEffect(() => {
    const tmo = setTimeout(() => {
      navigation.navigate('Second');
      clearTimeout(tmo);
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <BlurView
        blurType={'dark'}
        style={{height: 100, width: 100}}
        blurAmount={15}>
        <Text onPress={() => navigation.navigate('Second')}>CLICK HERE TO CRASH</Text>
      </BlurView>
    </View>
  );
}
function Second({navigation}) {
  return (
    <View style={{flex: 1}}>
      {['222', '333', '444', '555', '666'].map(item => (
        <BlurView
          blurType={'dark'}
          style={{height: 100, width: 100}}
          blurAmount={15}>
          <Text>{item}</Text>
        </BlurView>
      ))}
    </View>
  );
}
export default function AppCrash() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'First'}>
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
