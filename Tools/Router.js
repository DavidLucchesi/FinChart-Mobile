// Tools/Router.js

import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator} from "react-navigation";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import Settings from "../Components/Settings";
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
    Accueil: {
      screen: Home
    },
    Profil: {
      screen: Profile
    },
    Paramètres: {
      screen: Settings
    }
  },
  {
    navigationOptions: {tabBarVisible: true, tabBarOptions: {activeTintColor: '#aa530e', inactiveTintColor: '#df8931'}}
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
