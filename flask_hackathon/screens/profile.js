import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import PatientListScreen from '../components/List';

export default class profile extends Component {

  render() {
    return (
          <PatientListScreen/>
    );
  }
}


// import { createStackNavigator, createAppContainer } from "react-navigation";

// import SignIn from "../components/auth/SignIn";
// import SocialAuth from "../components/auth/SocialAuth";
// import SignUp from "../components/auth/SignUp";
// import ForgotPassword from "../components/auth/ForgotPassword";

// const AuthStack = createStackNavigator(
//   {
//     SignIn,
//     SignUp,
//     ForgotPassword,
//     SocialAuth
//   },
//   {
//     headerMode: "none"
//   }
// );

// const NewAPP = createAppContainer(AuthStack);

// export default NewAPP;