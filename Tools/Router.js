// Tools/Router.js

import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator} from "react-navigation";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import Demonstration from "../Components/Demonstration";

export const SignedOut = createStackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  Demonstration: {screen: Demonstration}
},
{
  navigationOptions: {header: null}
});

export const SignedIn = createBottomTabNavigator({
    Home: {
      screen: Home
    }
  },
  {
    navigationOptions: {tabBarVisible: false}
  });

  export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
  };
