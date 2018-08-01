// Tools/Router.js

import {TabNavigator, SwitchNavigator, StackNavigator} from "react-navigation";
import Home from "../Components/Home";
import Login from "../Components/Login";

export const SignedOut = StackNavigator({
  Login: {
    screen: Login
  }
});

export const SignedIn = TabNavigator(
  {
    Home: {
      screen: Home
    }}
);

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
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
