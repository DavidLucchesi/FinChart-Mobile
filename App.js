import React from 'react';
import { createRootNavigator } from "./Tools/Router";
import {isSignedIn} from './Tools/Authentication';
import { StatusBar } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };

  }

  componentDidMount() {
    StatusBar.setHidden(true);

    isSignedIn()
    .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    .catch(err => alert("An error occurred"));
  }


  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
