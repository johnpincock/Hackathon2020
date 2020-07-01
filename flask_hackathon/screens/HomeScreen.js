import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import FlatListBasics from '../components/List';
import { createStackNavigator } from '@react-navigation/stack';
import sequenceStack from '../components/sequenceStack'
function SettingsScreen({ navigation }) {
  return (
    <FlatListBasics/>
  );
}

const Stack = createStackNavigator();
export default class HomeScreen extends Component {

  render() {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
    );
  }
}
