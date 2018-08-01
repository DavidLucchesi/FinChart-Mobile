// Components/Home.js

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { onSignOut } from '../Tools/Authentication'

export default ({navigation}) => (
  <View>
  <Text>Home</Text>
  <Button title='Déconnexion' onPress={() => {onSignOut().then(() => navigation.navigate("SignedOut"))}}/>
  </View>
);

const styles = StyleSheet.create({
})
