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
    <View style={{flex: 1}}>
      <Text>111</Text>
    </View>
  );
}
function Second({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BlurView blurType={"dark"} blurAmount={15}>
        <Text>222</Text>
      </BlurView>
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
