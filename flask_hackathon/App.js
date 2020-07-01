import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import sequenceStack from "./components/sequenceStack";
import CallHelp from "./components/CallHelp";
import newSettingsScreen from "./screens/SettingsScreen";
import newHomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Patients') {
        iconName = focused
        ? 'ios-contact'
        : 'ios-contact';
      } else if (route.name === 'Settings') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }else if (route.name === 'Camera') {
        iconName = focused
        ? 'ios-camera'
        : 'ios-camera';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Patients" component={sequenceStack} />
        <Tab.Screen name="Settings" component={NotificationsScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />

    </Tab.Navigator>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No Settings yet!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}
const Stack = createStackNavigator();
function TabAScreen( navigation ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={newHomeScreen} />
      <Stack.Screen name="TabA Details" component={Details} />
      <Stack.Screen name="Camera" component={Details} />

    </Stack.Navigator>
  );
}

function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome to TabA page!
      </Text>
      <Button 
      onPress={() => navigation.navigate('TabA Details')}
      title="Go to TabA Details"
      />
    </View>
  );
}
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}
function CameraScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Camera to add images to GP record or to send to GP.
      </Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Call help" component={CallHelp} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// import { StatusBar } from 'expo-status-bar';
// import React, {Component} from 'react';
// import { StyleSheet, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import axios from 'axios'; 
// import { Text, NavBar } from 'galio-framework';


// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// var url = "http://localhost:5000/api";

// function newHomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// export default class PrevCommune extends Component {

//   constructor(props){
//       super(props);
//       this.navigation=this.props.navigation;
//   };

//   getAxios=()=>{
//       axios.get(`${url}`).then((response)=>{
//           console.log("succes axios :",response);
//       }).catch((error)=>{
//           console.log("fail axios :", error);
//       });
//   };

//   getFetch=()=>{
//       fetch(url).then((response)=>{
//           console.log("succes fetch :",response)
//       }).catch((error)=>{
//           console.log("fail fetch :",error)
//       })
//   };

//   render(){
//       return (
//         <NavigationContainer>
//   <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={newHomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>

    
//           <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//          </Tab.Navigator>
//         </NavigationContainer>

//       );
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
